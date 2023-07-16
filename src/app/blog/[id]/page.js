import Image from "next/image";
import React from "react";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
// import { NextResponse } from "next/server";

async function getData(id) {
  const res = await fetch(
    `https://nextjs-portfolio-cum-blog.vercel.app/api/posts/${id}`,
    // `http://localhost:3000/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return new PageNotFoundError("No data found");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post?.title,
    description: post?.desc,
  };
}
const Blogpost = async ({ params }) => {
  // console.log(params.id);
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
  const data = await getData(params.id);
  console.log(data);
  return (
    <>
      {data && (
        <div className="max-w-7xl  mx-auto flex flex-col gap-7 my-14 p-2 ">
          <div className="with-img w-7xl  flex gap-4 justify-between flex-col  md:flex-row w-[90vw] md:w-full md:full  ">
            <div className="info flex flex-col justify-between py-4 w-[100%] ">
              <h3 className="title text-4xl font-bold ">{data?.title}</h3>
              <p className="text text-xl text-gray-300 ">{data?.desc}</p>
              <div className="profile flex items-center gap-3 ">
                <div className="profileimg w-8 h-8 relative rounded-full ">
                  <Image
                    src={imgarr[Math.floor(Math.random() * 13)]}
                    className="rounded-full"
                    alt=""
                    fill
                  ></Image>
                </div>
                <h4 className="name">{data?.username}</h4>
              </div>
            </div>
            <div className="img md:w-[600px] md:h-[250px] w-[90vw] h-[40vh] relative ">
              <Image src={imgarr[Math.floor(Math.random() * 13)]} fill alt="" />
            </div>
          </div>
          <p className="test-container text-gray-300 ">{data?.content}</p>
        </div>
      )}
    </>
  );
};

export default Blogpost;
