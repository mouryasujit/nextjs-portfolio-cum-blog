import React from "react";
import Image from "next/image";
import illus from "/public/illustration.png";
import Link from "next/link";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="px-2 font-bold text-2xl text-green-700 my-4 ">
        {params.category}
      </h1>
      <div className="mainpost min-h-screen">
        <div className="small flex w-full  gap-6 mb-12 md:odd:flex-row-reverse shadow-md odd:bg-gray-400 rounded-md flex-col-reverse    h-[90vh] md:h-full p-2 ">
          <div className="content flex-1 flex flex-col justify-center gap-8  ">
            <div className="ttitle font-bold text-4xl  ">Booking Website</div>
            <div className="desc">
              <li>This is created using MERN Stack</li>
              <li>Here you can check availability</li>
              <li>
                of hotel rooms Book hotel and check which hotels are present
                city with their distance.
              </li>
              <li> Here you cannot pay since currently payment is diabled</li>
            </div>
            <Link href="https://mybookingclient.onrender.com/">
              <button className="bg-green-500 p-3 rounded-md hover:bg-green-600 w-max">
                See More
              </button>
            </Link>
          </div>
          <div className="img   w-[90vw]  md:w-[300px] h-[450px] mx-auto relative flex-1 ">
            <Image alt="" src="/booking.jpg" className="h-full w-full" fill />
          </div>
        </div>
        <div className="small flex w-full flex-col gap-6 mb-12 md:odd:flex-row-reverse shadow-md odd:bg-gray-400 rounded-md h-[90vh] md:h-full p-2  ">
          <div className="content flex-1 flex flex-col justify-center gap-8  ">
            <div className="ttitle font-bold text-4xl  ">
              Freelancer Website
            </div>
            <div className="desc">
              <li>Its a fullstack website made with MERN stack</li>
              <li>.Its has features like be a seller comment on courses,</li>
              <li>
                purchase course,talk yo you mentor with bilt in chat can filter
                content according to your need.
              </li>
              <li>Can filter contents based on your needs</li>
              <li>Can post new jobs</li>
            </div>
            <Link href="https://mybookingclient.onrender.com/">
              <button className="bg-green-500 p-3 rounded-md hover:bg-green-600 w-max">
                See More
              </button>
            </Link>
          </div>
          <div className="img   w-[90vw]  md:w-[300px] h-[450px] mx-auto relative flex-1  ">
            <Image alt="" src="/jobathon.jpg" className="" fill />
          </div>
        </div>
        <div className="small flex w-full flex-col gap-6 mb-12 md:odd:flex-row-reverse shadow-md odd:bg-gray-400 rounded-md h-[90vh] md:h-full p-2 ">
          <div className="content flex-1 flex flex-col justify-center gap-8  ">
            <div className="ttitle font-bold text-4xl  ">Anime Website</div>
            <div className="desc">
              <li>This is a website sho caing my designing skills </li>
              <li>Has awesome colors </li>
              <li>Has been listed some great anime </li>
              <li>Used Swiper.js </li>
            </div>
            <Link href="https://wondrous-creponne-7713ef.netlify.app/">
              <button className="bg-green-500 p-3 rounded-md hover:bg-green-600 w-max">
                See More
              </button>
            </Link>
          </div>
          <div className="img   w-[90vw]  md:w-[300px] h-[450px] mx-auto relative flex-1 ">
            <Image
              alt=""
              src="/BeFunky-collage.jpg"
              className="h-full w-full"
              fill
            />
          </div>
        </div>
        <div className="small flex w-full flex-col  gap-6 mb-12 md:odd:flex-row-reverse shadow-md odd:bg-gray-400 rounded-md h-[90vh] md:h-full p-2 ">
          <div className="content flex-1 flex flex-col justify-center gap-8  ">
            <div className="ttitle font-bold text-4xl  ">Whether App</div>
            <div className="desc">
              <li>This is android app made with react Native </li>
              <li>Need location access </li>
              <li>5-day 3 hour weather forecast </li>
              <li> You can see population sunrise etc for your city </li>
            </div>
            <Link href="https://github.com/mouryasujit/React-navtive-whether-app">
              <button className="bg-green-500 p-3 rounded-md hover:bg-green-600 w-max">
                See this repo
              </button>
            </Link>
          </div>
          <div className="img   w-[90vw]  md:w-[300px] h-[450px] mx-auto relative flex-1 ">
            <Image alt="" src="/whetherapp.jpg" className="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
