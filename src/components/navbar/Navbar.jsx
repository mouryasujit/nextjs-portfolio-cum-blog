"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Darkmode from "../darkmodetoogle/Darkmode";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut, useSession } from "next-auth/react";
import { ThemeContext } from "@/Context/ThemeContest";

const lists = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <div className="fixed top-0 left-0 w-full z-10 my-3  p-2 md:p-0 ">
      <div className="flex justify-between items-center   py-2 max-w-7xl mx-auto relative ">
        <h1 className="font-bold">NextApp</h1>
        <div className="hidden md:flex md:justify-between md:items-center w-[50%] ">
          <Darkmode />
          {lists.map((list) => (
            <Link
              className="hover:bg-blue-500 hover:rounded-md p-1"
              href={list.url}
              key={list.id}
            >
              {list.title}
            </Link>
          ))}

          {session.status === "authenticated" ? (
            <div className="flex items-center gap-3 ">
              <p className="font-bold bg-blue-700 p-1 rounded-md ">
                {session.data.user.name}
              </p>
              <button
                className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
                onClick={() => signOut("credentials")}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 ">
              <Link
                href="/dashboard/login"
                className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
              >
                Login
              </Link>
              <Link
                href="/dashboard/register"
                className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        {open && (
          <div
            className={
              mode === "dark"
                ? "md:hidden absolute flex flex-col top-12 p-3 gap-4 left-0 z-40 bg-black w-full "
                : "md:hidden absolute flex flex-col top-12 p-3 gap-4 left-0 z-40 bg-white w-full"
            }
          >
            <Darkmode />
            {lists?.map((list) => (
              <Link
                className="hover:bg-blue-500 hover:rounded-md p-1"
                href={list.url}
                key={list.id}
              >
                {list.title}
              </Link>
            ))}

            {session.status === "authenticated" ? (
              <div className="flex items-center gap-3 ">
                <p className="font-bold bg-blue-700 p-1 rounded-md ">
                  {session.data.user.name}
                </p>
                <button
                  className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
                  onClick={() => signOut("credentials")}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 ">
                <Link
                  href="/dashboard/login"
                  className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard/register"
                  className="bg-green-500 p-1 rounded-sm hover:bg-white hover:text-green-500 hover:text-bold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
        <div className="md:hidden text-white " onClick={() => setOpen(!open)}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
