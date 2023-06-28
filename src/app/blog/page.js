import React from "react";

// import illus from "/public/illustration.png";

import axios from "axios";
import { NextResponse } from "next/server";
import Card from "@/components/card/Card";

const getData = async () => {
  try {
    const res = await axios.get(
      "https://nextjs-portfolio-cum-blog.vercel.app/api/posts"
      // "http://localhost:3000/api/posts"
    );
    // console.log(res.json());
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return new NextResponse("Server error");
  }
};
const Blog = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <>
      <div className=" flex flex-wrap justify-between gap-10 w-full my-14 p-2 ">
        {Array.isArray(data) &&
          data?.map((item) => <Card item={item} key={item._id} />)}
      </div>
    </>
  );
};

export default Blog;
