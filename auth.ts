import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";
import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  GET_USER_BY_ID_FOR_AUTH,
} from "./sanity/lib/queries";
import { redirect } from "next/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { name, email, image } = user;
      const id = profile?.id || profile?.sub;
      const login = profile?.login || "";
      const bio = profile?.bio || "";

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(GET_USER_BY_ID_FOR_AUTH, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          status: "offline",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(GET_USER_BY_ID_FOR_AUTH, {
            id: profile?.id || profile?.sub,
          });

        token.id = user?._id || user?.id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id || token.sub });
      const isUserExist = await client
        .withConfig({ useCdn: false })
        .fetch(GET_USER_BY_ID, {
          id: session.id,
        });

      if (isUserExist) {
        Object.assign(session, { isExist: true });
      } else {
        Object.assign(session, { isExist: false });
      }

      return session;
    },
  },
});
