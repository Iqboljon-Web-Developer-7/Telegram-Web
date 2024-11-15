// @ts-nocheck

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";
import { GET_USER_BY_ID } from "./sanity/lib/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({
      user: { name, email, image },
      account,
      profile: { id, sub, login, bio },
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(GET_USER_BY_ID, {
          id: id || sub,
          useCdn: false,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: +id || +sub,
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
            id: profile?.id || profile?.sub,
          });

        token.id = user?._id || user?.id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });

      return session;
    },
  },
  debug: true,
});
