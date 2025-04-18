import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";
import prisma from "@/lib/prisma";

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
