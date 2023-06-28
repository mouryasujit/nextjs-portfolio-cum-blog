"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <Link href={`/blog/${item._id}`}>
      <div
        className="posts flex flex-col items-center gap-5 bg-gray-300 shadow-md rounded-lg p-3 "
        key={item?.id}
      >
        <div className="img   h-[250px] w-[350px] relative ">
          <Image
            src={item.img || "/illustration.png"}
            alt="post-image"
            fill="true"
            className="h-full w-full"
          />
        </div>
        <div className="content flex-2 flex justify-center flex-col gap-3 ">
          <div className="h1 font-bold text-2xl text-black  ">
            {item?.title}
          </div>
          <p className="h1 font-bold text-xl text-gray-700 ">{item?.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
