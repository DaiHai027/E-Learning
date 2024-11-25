"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../images/startup-project-team-working-office-organise-company.jpg";
import BackImage from "../../images/homepage/back.png";
import Circle from "../../images/homepage/circle.png";
import Union from "../../images/homepage/Union.png";

// Import component and constants
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";

//Framer motion
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// Sub-component to display the title
const HeroTitle = () => {
  return (
    <div className="lg:relative flex lg:items-start items-center ">
      <p className="text-2xl sm:text-30ct font-bold leading-10 text-center lg:text-left ">
        Empowering <br className="lg:block hidden" /> Education Through
        Innovative <span className="text-blue">E-Learning Solutions</span>
      </p>
      <Image
        src={Circle}
        alt="circle"
        width={190}
        // height="auto"
        className="absolute -bottom-2 -left-6 lg:block hidden "
        priority
      />
    </div>
  );
};

// Sub-component to display the description text
const HeroDescription = () => {
  return (
    <BaseText
      className="leading-7 -tracking-wide text-center lg:text-left"
      fontWeight="text-normal"
      textColor="text-black"
      fontSize={FONT_SIZE.PX_14}
      title="We specialize in creating cutting-edge e-learning solutions that transform the educational experience for institutions, businesses, and learners worldwide."
    />
  );
};

// Sub-component to display action buttons
const HeroButtons = () => (
  <div className="flex flex-row  gap-3 sm:gap-5">
    <button
      onClick={() =>
        document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })
      }
      className="px-6 py-2 bg-blue-600 bg-black text-white rounded-full hover:bg-blue-700 transition flex items-center gap-2 hover:bg-black/70"
    >
      Get Started
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition border border-gray-400">
      Learn More
    </button>
  </div>
);

// Sub-component to manage the right-side image
const HeroImageWrapper = () => {
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full sm:w-2/3 relative flex items-end justify-center sm:justify-end"
    >
      <Image
        priority
        src={Union}
        alt="union"
        width={50}
        height={50}
        className="absolute -top-6 right-72  lg:block hidden z-20"
      />
      <Image
        priority
        src={BackImage}
        alt="background"
        width={800}
        // height="auto"
        className="absolute -top-14 -right-10 lg:block hidden z-0"
      />
      <Image
        src={HeroImage}
        alt="startup-project"
        width={550}
        // height="auto"
        className="rounded-lg sm:w-auto z-10"
        priority
      />
    </motion.div>
  );
};

// Main Hero component
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col lg:flex-row gap-10 sm:gap-5 lg:py-40 pt-20 pb-28  max-w-[1100px] mx-auto px-4 sm:px-0"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/3 flex flex-col justify-between lg:items-start items-center gap-5 max-w-[450px]"
      >
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </motion.div>
      <HeroImageWrapper />
    </motion.div>
  );
}
