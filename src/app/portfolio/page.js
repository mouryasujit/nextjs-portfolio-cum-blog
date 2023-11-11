import React from "react";
import illustration from "/public/illustration.png";
import website from "/public/websites.jpg";
import appli from "/public/apps.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="flex w-full h-full flex-col gap-7 ">
      <h3 className="text-lg font-bold px-2">Choose a gallery</h3>
      <div className="imgcon w-full flex md:flex-row flex-col  mx-2 gap-8 ">
        <Link href="/portfolio/illustrations">
          <div
            className="img2  h-[400px] w-[300px] border-4 border-white bg-[url('/public/illustration.png')] relative font-bold hover:text-green-400 hover:overflow-hidden "
            style={{
              backgroundImage: `url(${website.src})`,
              backgroundSize: "cover",
            }}
          >
            <Image
              fill={true}
              src={appli}
              alt="image"
              className="hover:scale-110  "
            />
            <h2 className="text-4xl absolute bottom-4 right-3">Application</h2>
          </div>
        </Link>
        <Link href="/portfolio/websites">
          <div
            className="img2  h-[400px] w-[300px] border-4 border-white bg-[url('/public/illustration.png')] relative font-bold hover:text-green-400 hover:overflow-hidden "
            style={{
              backgroundImage: `url(${website.src})`,
              backgroundSize: "cover",
            }}
          >
            <Image
              fill={true}
              src={illustration}
              alt="image"
              className="hover:scale-110  "
            />
            <h2 className="text-4xl absolute bottom-4 right-3">Illustration</h2>
          </div>
        </Link>
        <Link href="/portfolio/applications">
          <div
            className="img2  h-[400px] w-[300px] border-4 border-white bg-[url('/public/illustration.png')] relative font-bold hover:text-green-400 hover:overflow-hidden "
            style={{
              backgroundImage: `url(${website.src})`,
              backgroundSize: "cover",
            }}
          >
            <Image
              fill={true}
              src={website}
              alt="image"
              className="hover:scale-110  "
            />
            <h2 className="text-4xl absolute bottom-4 right-3">Websites</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
