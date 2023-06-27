import React from "react";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-full py-3 mt-10 ">
      <div className="w-full h-[300px] relative ">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="bg-image"
          className="object-cover grayscale "
        />
        <div className="absolute bottom-5 left-5 text-xl bg-green-500 px-4 ">
          <h1 className="font-bold text-4xl">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex md:flex-row flex-col px-2  py-4 gap-24">
        <div className="flex-1 flex flex-col gap-7">
          <h1 className="font-bold text-2xl text-blue-500 ">Who Are We?</h1>
          <p className="   ">
            Welcome to our freelance services! We are a dedicated MERN stack
            developer with expertise in React Native and Android development.
            Our goal is to provide high-quality and efficient solutions for all
            your web and mobile application needs. As a freelancer, we have
            gained valuable experience working on various projects,
            collaborating with clients from different industries. Our passion
            for coding and problem-solving has enabled us to deliver robust and
            scalable applications that meet the unique requirements of our
            clients. Our Skills and Expertise: MERN Stack Development: We
            specialize in building full-stack applications using the MERN
            (MongoDB, Express.js, React.js, and Node.js) technology stack. With
            our expertise in each of these components, we can seamlessly develop
            powerful web applications with rich user experiences. <br />
            <strong className="text-blue-500">
              React Native Development:{" "}
            </strong>{" "}
            We have hands-on experience in developing cross-platform mobile
            applications using React Native. By leveraging the power of React,
            we can create engaging mobile apps that run smoothly on both iOS and
            Android platforms. Android Development: With our Android development
            skills, we can create native Android applications that are tailored
            to your specific needs. Whether it's developing a new app from
            scratch or enhancing an existing one, we have the knowledge and
            expertise to deliver outstanding results. <br />
            <strong className="text-blue-500">Our Approach:</strong> When
            working with clients, we prioritize effective communication and
            collaboration. We believe that understanding your vision and goals
            is crucial to delivering a successful project. We actively involve
            our clients throughout the development process, ensuring that your
            feedback and ideas are incorporated into the final product. Our
            commitment to quality is unwavering. We follow industry best
            practices and coding standards to ensure that the applications we
            develop are secure, efficient, and maintainable. We stay up-to-date
            with the latest trends and technologies, continuously expanding our
            skill set to provide cutting-edge solutions. Let's Work Together: If
            you are looking for a reliable and experienced MERN stack developer
            with expertise in React Native and Android development, we are here
            to help you. Whether you need assistance with a new project, app
            maintenance, or custom development, we are ready to tackle any
            challenge. Contact us today to discuss your requirements and let's
            bring your ideas to life!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-7  ">
          <h1 className="font-bold text-2xl text-blue-500 ">What We Do?</h1>
          <p className="">
            If you are looking for a reliable and experienced MERN stack
            developer with expertise in React Native and Android development, we
            are here to help you. Whether you need assistance with a new
            project, app maintenance, or custom development, we are ready to
            tackle any challenge. Contact us today to discuss your requirements
            and let's bring your ideas to life!
            <br />
            <br /> - Dynamic Websites
            <br /> - Fast and Handy
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <button className="bg-green-500 p-3 rounded-md hover:bg-green-600">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
