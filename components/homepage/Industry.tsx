"use client";

// src/components/Industry.tsx
import React from "react";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import Image from "next/image";
import CorporationImage from "../../images/homepage/industry/corporation.png";
import EducationImage from "../../images/homepage/industry/education.png";
import EdTechImage from "../../images/homepage/industry/edutech.png";
import OrganizationImage from "../../images/homepage/industry/organization.png";
import Line from "../../images/homepage/line-industry.png";

//Framer motion
import { motion, useAnimation } from "framer-motion";

const industries = [
  {
    title: "Educational Institutions",
    description:
      "Schools, colleges, and universities seeking to enhance their digital offerings. Support for K-12 and higher education curricula.",
    icon: EducationImage,
  },
  {
    title: "EdTech and eLearning Companies",
    description:
      "Innovators bringing new educational technologies to market efficiently. Support in developing scalable, innovative solutions.",
    icon: EdTechImage,
  },
  {
    title: "Non-Profit Organizations",
    description:
      "NGOs focusing on educational initiatives and outreach programs. Affordable solutions tailored to budget constraints.",
    icon: OrganizationImage,
  },
  {
    title: "Corporate Training",
    description:
      "Businesses aiming to improve workforce skills and compliance training. Customized modules for various departments and roles.",
    icon: CorporationImage,
  },
];

// Component to display the header text
const HeaderText: React.FC = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:px-0 px-5">
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-10"
      >
        <h2 className="text-30ct font-medium text-white leading-10 tracking-normal font-sans text-center lg:text-left relative z-10">
          SERVING DIVERSE
          <br className="lg:block hidden" />
          <span className="lg:text-nowrap text-center">
            {" "}
            INDUSTRIES & LEARNERS
          </span>
          <Image
            src={Line}
            alt="line"
            className="absolute top-8 -left-0 lg:block hidden z-0"
            width={500}
            // height="auto"
            priority
          />
        </h2>
     
        <BaseText
          className="lg:whitespace-pre-line tracking-wider leading-7 text-center lg:text-left"
          fontWeight="text-normal"
          textColor="text-white/70"
          fontSize={FONT_SIZE.PX_16}
          title={
            "Our e-learning platforms are equipped with unique features to provide an exceptional learning experience."
          }
        />
      </motion.div>
    </div>
  );
};

// Component to display each industry card
const IndustryCard: React.FC<{
  title: string;
  description: string;
  icon: any;
  index: number;
}> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="p-6 flex flex-row gap-4 items-start"
    >
      <img
        src={icon.src}
        alt={title}
        width={50}
        height={50}
        className="object-contain"
        loading="lazy"
      />
      <div>
        <h3 className="text-16ct font-bold mb-3 text-white lg:text-nowrap">
          {title}
        </h3>
        <p className="text-gray-600 text-14ct leading-[22px] text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Industry() {
  return (
    <div className="w-full bg-gradient-to-b from-[#44464b] to-[#1b1e23] pt-28 pb-32">
      <div className="max-w-[1100px] mx-auto flex lg:flex-row flex-col gap-9">
        <HeaderText />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-start justify-start">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
