"use client";
import Image from "next/image";
import Hero from "/public/hero.png";
import Link from "next/link";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <div className=" flex w-full flex-col md:flex-row md:justify-between justify-center  h-full items-center mt-7  ">
      <div className="container1  flex-1 px-2 md:px-0   ">
        <h1 className="text-6xl py-3 bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text font-bold leading-snug ">
          Hello👋, <br /> I am Sujitkumar Mourya
        </h1>
        <p className=" text-lg py-5">
          I am Full stack webdeveloper, <br /> Graphic designer and Content
          creator.
        </p>
        <Link href="/portfolio">
          <button className="bg-green-500 p-3 rounded-md hover:bg-green-600">
            See our works
          </button>
        </Link>
        <button
          onClick={handleDownload}
          className="bg-green-500 p-3 mx-2 rounded-md hover:bg-green-600"
        >
          Download Cv
        </button>
      </div>
       
      <div className="imgcontainer flex-1 px-4 ">
        <Image src={Hero} className="moving" alt="Hero section" />
      </div>
    </div>
  );
}
