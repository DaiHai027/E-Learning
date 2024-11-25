"use client";
// src/components/Partner.tsx
import React from "react";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import Image from "next/image";
import Partner1 from "../../images/homepage/Partner/partner1.png";
import Partner2 from "../../images/homepage/Partner/partner2.png";
import CheckIcon from "../../images/homepage/Partner/check.png";

//Framer motion
import { motion, useAnimation } from "framer-motion";

// Data for partners
const data = [
  {
    flexClass: "lg:flex-row flex-col",
    image: Partner1,
    text: [
      {
        title: "Expertise and Innovation",
        description:
          "A team of seasoned professionals passionate about education and technology. Commitment to leveraging the latest tools and methodologies, including AI, AR/VR, and machine learning.",
      },
      {
        title: "Customized Solutions",
        description:
          "Tailor-made software that aligns perfectly with your unique needs and objectives. Focus on delivering solutions that provide real value to your organization.",
      },
      {
        title: "Quality and Reliability",
        description:
          "Rigorous quality assurance processes to deliver dependable and high-performing solutions. Adherence to industry best practices and standards.",
      },
    ],
  },
  {
    flexClass: "lg:flex-row-reverse flex-col",
    image: Partner2,
    text: [
      {
        title: "Client-Centric Approach",
        description:
          "Transparent communication and collaboration throughout the project lifecycle. Dedicated project managers and a responsive team to ensure your vision is realized.",
      },
      {
        title: "Security and Compliance",
        description:
          "Prioritize data protection with robust security measures and compliance with global regulations like GDPR and FERPA.",
      },
      {
        title: "Cost-Effective Services",
        description:
          "Competitive pricing without compromising on quality. Deliver high-quality solutions within your budget constraints.",
      },
    ],
  },
];

// Partner Header Component
const PartnerHeader: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-5">
    <BaseText
      title="WHY EDLABS IS THE RIGHT PARTNER FOR YOU"
      fontSize={FONT_SIZE.PX_30}
      fontWeight="font-medium"
      textColor="text-white"
      className="text-center"
    />
    <BaseText
      title="We follow a structured approach to deliver high-quality e-learning solutions:"
      fontSize={FONT_SIZE.PX_16}
      fontWeight="text-normal"
      textColor="text-white/70"
      className="text-center lg:whitespace-pre-line"
    />
  </div>
);

// Partner Item Component
const PartnerItem: React.FC<{
  flexClass: string;
  image: any;
  text: { title: string; description: string }[];
}> = ({ flexClass, image, text }) => {
  return (
    <div className={`flex gap-12 w-full ${flexClass}`}>
      <motion.div
        initial={{ x: -70, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='w-2/3'
      >
        <Image loading="lazy" src={image} alt="partner" className="w-full" />
      </motion.div>
      <div className="flex flex-col gap-7 lg:w-1/3 w-full justify-between items-center">
        {text.map((item, index) => (
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
          >
            <div className="flex flex-row gap-4">
              <img
                src={CheckIcon.src}
                alt="check"
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-2 w-[280px] pr-10">
                <BaseText
                  title={item.title}
                  fontSize={FONT_SIZE.PX_16}
                  fontWeight="font-medium"
                  textColor="text-white"
                />
                <BaseText
                  title={item.description}
                  fontSize={FONT_SIZE.PX_14}
                  fontWeight="font-normal"
                  textColor="text-gray-300"
                  className="leading-[22px] tracking-[-0.01em]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Partner() {
  return (
    <div className="w-full bg-gradient-to-b from-[#44464b] to-[#1b1e23] pt-28 pb-32">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center justify-center gap-20 lg:px-0 px-5">
        <PartnerHeader />
        {data.map((item, index) => (
          <PartnerItem
            key={index}
            flexClass={item.flexClass}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
