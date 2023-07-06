import React from "react";

// import illus from "/public/illustration.png";

import axios from "axios";
import { NextResponse } from "next/server";
import Card from "@/components/card/Card";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse("error", { status: 500 });
  }

  return res.json();
}

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
