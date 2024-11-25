"use client";
import React from "react";
import Image from "next/image";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import bg from "../../images/homepage/bg-ex.png";
import Mailcheck from "../../images/homepage/mail-check.png";
import Line from "../../images/homepage/line-experience.png";

//Framer motion
import { motion, useAnimation } from "framer-motion";

export default function Experience() {
  return (
    <div
      className="w-full bg-cover bg-center pt-28 pb-32"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="max-w-[1100px] mx-auto flex lg:flex-row flex-col lg:items-start items-center justify-between gap-10 relative lg:px-0 px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center"
        >
          <BaseText
            className="mb-4 lg:text-left text-center"
            fontWeight="text-medium"
            textColor="text-white"
            fontSize={FONT_SIZE.PX_30}
            title={"Ready to Elevate Your E-Learning Experience?"}
          />
          <BaseText
            className="lg:whitespace-pre-line tracking-wider leading-7 lg:text-left text-center"
            fontWeight="text-normal"
            textColor="text-white"
            fontSize={FONT_SIZE.PX_16}
            title={
              "Let's collaborate to create impactful e-learning solutions \n that empower learners and educators alike."
            }
          />
        </motion.div>
        <div className="flex items-start ">
          <Button />
        </div>
        <Image
          loading="lazy"
          src={Line}
          alt="line"
          width={600}
          className="absolute -right-16 -top-10 lg:block hidden"
        />
      </div>
    </div>
  );
}

const Button = () => {
  return (
    <motion.button
      initial={{ x: 60, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.5 }}
      onClick={() =>
        document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })
      }
      className="bg-white text-black px-6 py-2 rounded-full flex flex-row items-center gap-2 z-10 hover:bg-red-300"
    >
      <Image
        loading="lazy"
        src={Mailcheck}
        alt="mailcheck"
        width={20}
        height={20}
      />
      Get in touch
    </motion.button>
  );
};
