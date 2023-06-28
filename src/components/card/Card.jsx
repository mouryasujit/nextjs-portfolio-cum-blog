"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
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

  return (
    <Link
      href={`https://nextjs-portfolio-cum-blog.vercel.app/blog/${item._id}`}
    >
      <div
        className="posts flex flex-col items-center gap-5 bg-gray-300 shadow-md rounded-lg p-3 "
        key={item?.id}
      >
        <div className="img   h-[250px] w-[350px] relative ">
          <Image
            src={imgarr[Math.floor(Math.random() * 14)]}
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
