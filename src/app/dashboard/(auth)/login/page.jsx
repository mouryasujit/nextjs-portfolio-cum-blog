"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const Router = useRouter();
  const Session = useSession();
  const [err, seterr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signIn("credentials", { email, password });
    } catch (error) {
      seterr(true);
    }
    Router?.push("/");
  };

  if (Session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (Session.status == "authenticated") {
    Router?.push("/dashboard");
  }

  return (
    <div className="flex w-full flex-col justify-center items-center md:h-[90vh] h-[80vh] ">
      <form
        className="md:w-[30%] w-[90vw] p-2 h-max flex flex-col gap-4 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="E-mail"
          required
          name="email"
          className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
        />
        <button
          type="submit"
          className="text-white border-2 border-green-500 bg-green-500 rounded-lg h-16 "
        >
          Login
        </button>
        {err && (
          <p className="text-center text-red-700 ">Something went wrong</p>
        )}
        <Link
          href="/dashboard/register"
          className="text-blue-500 underline text-center hover:text-red-500 "
        >
          Don't have an account register
        </Link>
        <hr className="w-full" />
      </form>
      <h1 className="font-bold text-white my-2 "> Or </h1>
      <button
        className="text-white border-2 border-green-500 bg-green-500 rounded-lg h-14 px-1 "
        onClick={() => signIn("google")}
      >
        Login with google
      </button>
    </div>
  );
};

export default Login;
