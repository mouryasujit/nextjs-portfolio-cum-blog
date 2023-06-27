import Connect from "@/utils/db";
import NextAuth from "next-auth";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import googleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await Connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const ispasscorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (ispasscorrect) {
              return user;
            } else {
              throw new Error("UserId or Password Incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    googleProvider({
      clientId: process.env.google_ID,
      clientSecret: process.env.google_SECRET,
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});
export { handler as GET, handler as POST };
