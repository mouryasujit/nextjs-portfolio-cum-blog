"use client";
import React from "react";
import Image from "next/image";
import illus from "/public/illustration.png";
import Link from "next/link";
import axios from "axios";
import { NextResponse } from "next/server";

const getData = async () => {
  try {
    const res = await axios.get("/api/posts");
    // console.log(res.json());
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
        {data &&
          data.map((item) => (
            <Link href={`/blog/${item._id}`}>
              <div
                className="posts flex flex-col items-center gap-5 bg-gray-300 shadow-md rounded-lg p-3 "
                key={item?.id}
              >
                <div className="img   h-[250px] w-[350px] relative ">
                  <Image
                    src={item.img}
                    alt="post-image"
                    fill="true"
                    className="h-full w-full"
                  />
                </div>
                <div className="content flex-2 flex justify-center flex-col gap-3 ">
                  <div className="h1 font-bold text-2xl text-black  ">
                    {item?.title}
                  </div>
                  <p className="h1 font-bold text-xl text-gray-700 ">
                    {item?.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Blog;
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";

// export async function getServerSideProps() {
//   try {
//     const res = await axios.get("http://localhost:3000/api/posts", {
//       cache: "no-store",
//     });
//     const data = await res.data;
//     console.log(data);
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: { data: [] }, // Return an empty array or handle the error appropriately
//     };
//   }
// }

// const Blog = ({ data }) => {
//   console.log(data);
//   return (
//     <>
//       <div className="flex flex-col gap-10 w-full my-14">
//         {data?.map((item) => (
//           <Link href={`/blog/${item.id}`} key={item.id}>
//             <div className="posts flex w-full gap-5">
//               <div className="img h-[250px] w-[350px] relative">
//                 <Image
//                   src={item.img}
//                   alt="post-image"
//                   className="h-full w-full"
//                 />
//               </div>
//               <div className="content flex-2 flex justify-center flex-col">
//                 <div className="h1">{item.title}</div>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Blog;
