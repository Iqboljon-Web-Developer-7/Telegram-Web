import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { writeClient } from "./sanity/lib/write-client";
import { GET_USER_BY_ID } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user: { name, email, image }, account, profile }) {
      const { id, login, bio } = profile || {};
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(GET_USER_BY_ID, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
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
          .fetch(GET_USER_BY_ID, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });

      return session;
    },
  },
});
