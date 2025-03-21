import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  type DefaultSession,
  type NextAuthConfig,
  type AdapterUser,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { z as zod } from "zod";
import { compare } from "bcryptjs";

import { db } from "@/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface AdapterUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }
}

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

// Only use the adapter when not using credentials provider
const adapter = PrismaAdapter(db);

export const authConfig = {
  providers: [
    DiscordProvider,
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const validatedCredentials = schema.parse(credentials);

        const user = await db.user.findUnique({
          where: {
            email: validatedCredentials.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
            firstName: true,
            lastName: true,
            role: true,
          },
        });

        if (!user) {
          throw new Error("User not found with this email.");
        }

        const passwordMatch = await compare(
          validatedCredentials.password,
          user.password,
        );
        if (!passwordMatch) {
          throw new Error("Invalid password.");
        }

        // Return user without password
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],
  // Explicitly set the strategy to JWT
  session: {
    strategy: "jwt",
  },
  // Only use the adapter for OAuth providers
  adapter: adapter,
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
        firstName: token.firstName,
        lastName: token.lastName,
        email: token.email,
        role: token.role,
      },
    }),
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
} satisfies NextAuthConfig;
