"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const router = useRouter();
  const session = useSession();
  const [err, seterr] = useState(false);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status == "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      }
    } catch (error) {
      seterr(true);
    }
  };
  return (
    <div className="max-w-7xl h-[80vh] md:h-[100vh] flex justify-center items-center ">
      <form
        className=" w-[90vw] md:w-[30%] p-2 h-max flex flex-col gap-4 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="username"
          required
          name="name"
          className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
        />
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
          Register
        </button>
        {err && (
          <p className="text-center text-red-700 ">
            Try again something went wrong
          </p>
        )}
        <Link
          href="/dashboard/login"
          className="text-blue-500 underline text-center hover:text-red-500 "
        >
          Login with an existing account
        </Link>
      </form>
    </div>
  );
};

export default Register;
