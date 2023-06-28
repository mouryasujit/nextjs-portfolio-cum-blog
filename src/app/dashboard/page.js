"use client";
// import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const imgarr = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/apps.jpg",
    "/BeFunky-collage.jpg",
    "/booking.jpg",
    "/contact.png",
    "/hero.png",
    "/illustration.png",
    "/jobathon.jpg",
    "/websites.jpg",
    "/whetherapp.jpg",
  ];
  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      // console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className=" min-h-screen w-full mx-auto flex md:flex-row flex-col-reverse mt-14 md:my-0 items-center justify-center gap-4 cursor-pointer  ">
        <div className="flex-1 h-full flex flex-col gap-4 items-center ">
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div
                  className="flex md:w-[65%] w-[80vw]  justify-between items-center "
                  key={post._id}
                >
                  <div className="">
                    <Image
                      src={imgarr[Math.floor(Math.random() * 14)]}
                      alt=""
                      width={200}
                      height={100}
                      className=" shadow-lg rounded-md "
                    />
                  </div>
                  <h2 className=" font-bold text-xl  ">{post.title}</h2>
                  <span
                    title="delete"
                    className=" text-white bg-red-500 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer "
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form
          className=" w-[90vw] md:w-[40%]  flex flex-col gap-3  "
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-2xl">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
          />
          <input
            type="text"
            placeholder="Desc"
            className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
          />
          <input
            type="text"
            placeholder="Image"
            className="h-16 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
          />
          <textarea
            placeholder="Content"
            cols="30"
            rows="10"
            className=" h-32 rounded-lg border-2 border-green-500 p-2 font-bold text-lg bg-black text-white "
          ></textarea>
          <button className="text-white border-2 border-green-500 bg-green-500 rounded-lg h-14 px-1 ">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
