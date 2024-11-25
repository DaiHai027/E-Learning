"use client";
import React, { useState } from "react";
import ServiceBg from "../../images/homepage/methodology/bg.png";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import circle from "../../images/homepage/methodology/circle-methodology.png";
import Image1 from "../../images/group-asia-young-creative-people-smart-casual-wear-discussing-business-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-office-coworker-teamwork-concept (1).jpg";
import Image2 from "../../images/woman-taking-e-learning-courses.jpg";
import Image3 from "../../images/classmates-discussing-information-study-session.jpg";
import Image4 from "../../images/close-up-woman-online-class.jpg";
import Image5 from "../../images/group-business-people-having-meeting.jpg";
import Image6 from "../../images/it-specialist-writing-html-script-binary-code-database-security.jpg";
import Image7 from "../../images/job-colleagues-working-laptop.jpg";
import Image8 from "../../images/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office-coworker-teamwork-concept.jpg";
import { motion } from "framer-motion";

const phases = [
  {
    id: 1,
    image: Image1,
    title: "DISCOVERY PHASE",
    content:
      "Collaborate to understand your vision, goals, and requirements. Conduct in-depth analysis of your target audience and market trends. Define project scope, objectives, and success metrics.",
  },
  {
    id: 2,
    image: Image2,
    title: "PLANNING AND STRATEGY",
    content:
      "Define project scope, timelines, and resources. Develop a comprehensive project roadmap. Establish communication protocols and reporting structures.",
  },
  {
    id: 3,
    image: Image3,
    title: "DESIGN AND PROTOTYPING",
    content:
      "Create wireframes and UI/UX designs focused on user engagement. Develop prototypes to visualize the end product. Incorporate your feedback to refine designs.",
  },
  {
    id: 4,
    image: Image4,
    title: "AGILE DEVELOPMENT",
    content:
      "Implement features using iterative sprints for flexibility. Conduct regular reviews and updates to ensure alignment with project goals. Ensure continuous integration and development.",
  },
  {
    id: 5,
    image: Image5,
    title: "QUALITY ASSURANCE",
    content:
      "Perform thorough testing, including unit, integration, and user acceptance tests. Address any issues and ensure compliance with quality standards. Address any issues promptly with a focus on quality.",
  },
  {
    id: 6,
    image: Image6,
    title: "DEPLOYMENT AND INTEGRATION",
    content:
      "Configure hosting, databases, and security measures. Seamless deployment of the solution in your preferred environment. Integrate with existing systems and third-party tools.",
  },
  {
    id: 7,
    image: Image7,
    title: "TRAINING AND SUPPORT",
    content:
      "Provide training sessions and documentation for smooth adoption. Offer ongoing support and maintenance services.",
  },
  {
    id: 8,
    image: Image8,
    title: "FEEDBACK AND IMPROVEMENT",
    content:
      "Collect user feedback to identify areas for enhancement. Implement updates and new features as needed. Ensure your solution evolves with your organization's needs.",
  },
];

export default function Methodology() {
  return (
    <div
      className="w-full  bg-clip-content bg-cover "
      style={{ backgroundImage: `url(${ServiceBg.src})` }}
    >
      <div className="mx-auto pt-28 pb-32 px-4 max-w-[1100px] flex flex-col">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="lg:mb-12 mb-4"
        >
          <h2 className="text-30ct font-medium mb-4 lg:relative text-center lg:text-left">
            OUR <span className="text-blue ">PROVEN DEVELOPMENT </span>{" "}
            <br className="lg:block hidden" />
            METHODOLOGY
            <Image
              loading="lazy"
              src={circle}
              alt="circle"
              width={400}
              // // height="auto"
              className="absolute -top-7 left-16 lg:block hidden"
            />
          </h2>

          <div className="flex flex-row justify-between gap-5">
            <BaseText
              className="lg:whitespace-pre-line tracking-wider leading-7 text-center lg:text-left"
              fontWeight="text-normal"
              textColor="text-gray-600"
              fontSize={FONT_SIZE.PX_16}
              title={
                "We follow a structured approach to deliver high-quality \n e-learning solutions:"
              }
            />
          </div>
        </motion.div>
        <AccordionContainer />
      </div>
    </div>
  );
}

interface AccordionProps {
  index: number;
  title: string;
  content: string;
  image: StaticImageData;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Accordion: React.FC<AccordionProps> = ({
  index,
  title,
  content,
  image,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(index);
  };

  return (
    <motion.div
    initial={{ y: 0, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 1 }}    
      className={` rounded-sm flex flex-row ${
        isActive ? "bg-[#EEF0F2]" : "bg-[#434853]"
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="h-[600px] w-[60px] flex flex-col justify-between items-center py-5 text-slate-800"
      >
        <span className="w-10 h-10 bg-white rounded-full text-center flex items-center justify-center">
          {index + 1}
        </span>
        <span
          className={` rotate-180  ${
            isActive ? "text-black" : "text-white"
          } font-medium text-16ct p-2 vertical-text transition-all duration-300`}
        >
          {title}
        </span>
      </button>
      <div
        style={{
          width: isActive ? "600px" : "0px",
          transition: "all 1s ease-in-out",
          opacity: isActive ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="px-5 py-10 text-sm text-slate-500 flex flex-col gap-10">
          <Image
            loading="lazy"
            src={image}
            alt="image"
            width={580}
            // // height="auto"
            className="rounded-sm"
          />
          <BaseText
            className="text-14ct text-slate-500 leading-7 tracking-wider"
            fontSize={FONT_SIZE.PX_14}
            title={content}
          />
        </div>
      </div>
    </motion.div>
  );
};
const AccordionMobile: React.FC<AccordionProps> = ({
  index,
  title,
  image,
  content,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(index);
  };

  return (
    <div
      className={` rounded-sm flex flex-col ${
        isActive ? "bg-[#EEF0F2]" : "bg-[#434853]"
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="h-[60px] w-full flex flex-row justify-between items-center p-5 text-slate-800 "
      >
        <span
          className={` ${
            isActive ? "text-black" : "text-white"
          } font-medium text-16ct p-2 transition-all duration-300`}
        >
          {title}
        </span>
        <span className="w-10 h-10 bg-white rounded-full text-center flex items-center justify-center">
          {index + 1}
        </span>
      </button>
      <div
        style={{
          height: isActive ? "fit-content" : "0px",
          transition: "all 1s ease-in-out",
          opacity: isActive ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="px-5 py-4 text-sm text-slate-500 flex flex-col gap-10 items-center">
          <Image
            loading="lazy"
            src={image}
            alt="image"
            width={580}
            height={400}
            className="rounded-sm "
          />
          <BaseText
            className="text-14ct text-slate-500 leading-7 tracking-wider text-center"
            fontSize={FONT_SIZE.PX_14}
            title={content}
          />
        </div>
      </div>
    </div>
  );
};

const AccordionContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <div className="max-w-[1100px] w-full h-[600px] mx-auto flex-row gap-1 lg:flex hidden">
        {phases?.map((item, index) => {
          return (
            <Accordion
              key={index}
              index={index}
              title={item?.title}
              content={item?.content}
              image={item?.image}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
      <div className="max-w-[1100px] w-full h-auto mx-auto flex-col gap-1 flex lg:hidden">
        {phases?.map((item, index) => {
          return (
            <AccordionMobile
              key={index}
              index={index}
              title={item?.title}
              content={item?.content}
              image={item?.image}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </>
  );
};
