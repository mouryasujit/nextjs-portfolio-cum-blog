import React from "react";
import Image from "next/image";
import Insta from "public/1.png";
import face from "public/2.png";
import twit from "public/3.png";
import yout from "public/4.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex md:justify-between w-full flex-col md:flex-row  justify-center my-4 gap-3 p-2 ">
      <h1>This is my portfolio cum blog website</h1>
      <h2>
        <div className="scond flex items-center gap-x-2 h-5 cursor-pointer ">
          By <span>Sujitkumar Mourya</span>
          <div className="icon flex gap-x-3">
            <Link href="https://www.linkedin.com/in/sujitkumar-mourya-9640a523a/">
              <div className="img1 h-7 w-7">
                <Image alt="" src={Insta} />
              </div>
            </Link>
            <div
              className="img1 h-7 w-7"
              href="https://www.linkedin.com/in/sujitkumar-mourya-9640a523a/"
            >
              <Image alt="" src={face} />
            </div>
            <div
              className="img1 h-7 w-7"
              href="https://twitter.com/Sujitkumar200?t=R10HF1rcucA-fE1pHGgttw&s=08"
            >
              <Image alt="" src={twit} />
            </div>
            <Link href="https://youtube.com/@cartonimation">
              <div className="img1 h-7 w-7">
                <Image alt="" src={yout} />
              </div>
            </Link>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default Footer;
