"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

const getData = async (id) => {
  try {
    const res = await fetch(
      `https://sujitkumarmourya.vercel.app/api/posts/${id}`,
      {
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      return { notFound: true };
    }
    console.log(res.data);
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const BlogPost = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getData(params.id);
        setData(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error While Fetching data...</div>;
  }

  // Shuffle the array using Fisher-Yates algorithm
  const shuffledImgArr = imgarr.sort(() => Math.random() - 0.5);

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

export default BlogPost;
