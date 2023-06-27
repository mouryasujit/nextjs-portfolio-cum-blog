"use client";
import React from "react";
import Image from "next/image";
import contact from "public/contact.png";
import { useForm } from "@formspree/react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkvzqrp");
  const router = useRouter();

  if (state.succeeded) {
    router.push("/");
    alert("will contact you soon");
  }

  return (
    <div className="flex w-full h-full flex-col md:gap-16  mt-14  ">
      <h1 className=" text-3xl md:text-5xl md:font-semibold text-center">
        🎧 KEEP IN TOUCH 🎧
      </h1>
      <div className="big w-[80vw] md:w-[70%]  flex md:flex-row flex-col mx-auto justify-between">
        <div className="IMG flex-1 moving mb-6 ">
          <Image src={contact} className="md:w-[350px]  md:h-[350px] w-[90vw] h-[40vh] relative" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="inputs flex-1 flex flex-col gap-5 "
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            className="h-14 rounded-md text-bold p-3 bg-transparent border-4 border-white "
          />
          {/* <img src={contact} alt="" /> */}
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            required
            className="h-14 rounded-md text-bold p-3 bg-transparent  border-white border-4  "
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            required
            placeholder="What work you need to have"
            className="h-40 rounded-md text-bold p-3 bg-transparent border-4 "
          ></textarea>

          <button
            disabled={state.submitting}
            className="bg-green-500 p-3 rounded-md hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
