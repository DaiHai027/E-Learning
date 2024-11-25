// src/components/Feature.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import FeatureImage from "@/images/group-asia-young-creative-people-smart-casual-wear-discussing-business-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-office-coworker-teamwork-concept (2).jpg";
import CircleImage from "../../images/homepage/circle-feature.png";

//Framer motion
import { motion, useAnimation } from "framer-motion";

const features = [
  {
    title: "Interactive Content Creation and Management",
    details: [
      "Easily create and manage diverse learning materials, including multimedia content like videos, quizzes, and interactive modules.",
      "Utilize drag-and-drop functionality for course creation.",
      "Support for unlimited file storage and document sharing.",
    ],
  },
  {
    title: "User Management and Authentication",
    details: [
      "Securely manage user roles, permissions, and authentication.",
      "Support for Single Sign-On (SSO), multi-factor authentication, and self-registration options.",
      "Custom user types and bulk actions for efficient administration.",
    ],
  },
  {
    title: "Adaptive Learning Paths and AI-Powered Personalization",
    details: [
      "Personalize education by tailoring content to individual learner needs using AI-driven recommendations.",
      "Adjust learning paths in real-time based on learner behavior and performance analytics.",
      "Implement intelligent tutoring systems for enhanced learning support.",
    ],
  },
  {
    title: "Security and Compliance",
    details: [
      "Implement robust security measures including SSL/TLS encryption and HTTPS.",
      "Ensure data protection with compliance to global regulations like GDPR and FERPA.",
      "Regular security audits and secure authentication protocols.",
    ],
  },
  {
    title: "Social Learning and Collaboration Tools",
    details: [
      "Foster collaboration through discussion boards, forums, real-time chat, and messaging features.",
      "Enable peer-to-peer interaction, group projects, and peer review functionalities.",
      "Support for virtual classrooms with live video conferencing and interactive whiteboards.",
    ],
  },
  {
    title: "Robust Analytics and Reporting",
    details: [
      "Track learner progress and performance with detailed, real-time analytics.",
      "Generate custom reports to inform decision-making and improve course effectiveness.",
      "Monitor KPIs and engagement metrics.",
    ],
  },
  {
    title: "Mobile Accessibility",
    details: [
      "Responsive design for all devices, including dedicated mobile apps for iOS and Android.",
      "Provide offline access to learning materials for anytime, anywhere learning.",
    ],
  },
  {
    title: "Integration Capabilities",
    details: [
      "Seamlessly connect with third-party systems like CRM, ERP, HRIS, and other tools.",
      "Streamline workflows with API integrations and ensure interoperability.",
    ],
  },
  {
    title: "Scalability and Performance",
    details: [
      "Robust architecture accommodating growing user bases and content libraries.",
      "Cloud-based solutions for seamless scalability and high availability.",
    ],
  },
];

const FeatureList: React.FC<{
  features: { title: string; details: string[] }[];
  selectedTitle: string | null;
  onSelectTitle: (title: string) => void;
}> = ({ features, selectedTitle, onSelectTitle }) => (
  <div className="border-l-4 border-gray-200 h-full">
    {features.map((feature, index) => (
      <div
        key={index}
        className={`relative pl-4 cursor-pointer py-4 ${
          selectedTitle === feature.title
            ? "before:absolute before:left-[-4px] before:top-0 before:h-full before:w-1 before:bg-blue"
            : ""
        }`}
        onClick={() => onSelectTitle(feature.title)}
      >
        <h3
          className={`text-lg ${
            selectedTitle === feature.title
              ? "font-bold text-black"
              : "font-normal text-gray-600"
          }`}
        >
          {feature.title}
        </h3>
      </div>
    ))}
  </div>
);

const FeatureDetails: React.FC<{
  selectedFeature: { title: string; details: string[] };
}> = ({ selectedFeature }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.4 }}
    transition={{ duration: 2 }}
    className="relative h-full flex flex-col gap-5"
    key={selectedFeature.title} // Key prop to trigger animation on title change
  >
    <div className="flex-shrink-0">
      <Image
        loading="lazy"
        src={FeatureImage}
        width={665}
        // height="auto"
        alt="E-learning platform demonstration"
        className="rounded-lg shadow-lg"
      />
    </div>
    <ul className="mt-2 space-y-2 flex-grow lg:h-[150px] h-auto lg:px-0 px-4">
      {selectedFeature.details.map((detail, idx) => (
        <li
          key={idx}
          className="text-gray-600 text-16ct list-disc leading-9 tracking-wider"
        >
          {detail}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Feature() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(
    features[0].title
  );

  const selectedFeature = features.find(
    (feature) => feature.title === selectedTitle
  )!;

  return (
    <div className="max-w-[1100px] mx-auto px-4 pt-28 pb-32">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.9 }}
        transition={{ duration: 0.5 }}
        className="text-start mb-12"
      >
        <h2 className="text-30ct font-medium mb-4 relative text-center lg:text-left">
          <Image
            loading="lazy"
            src={CircleImage}
            alt="circle"
            width={250}
            // height="auto"
            className="absolute top-[-20px] left-[-15px] lg:block hidden"
          />
          <span className="text-blue  ">KEY FEATURES</span> OF OUR
          <br className="lg:block hidden" />
          E-LEARNING SOFTWARE
        </h2>
        <BaseText
          className="lg:whitespace-pre-line tracking-wider leading-7 text-center lg:text-left"
          fontWeight="text-normal"
          textColor="text-gray-600"
          fontSize={FONT_SIZE.PX_16}
          title={
            "Our e-learning platforms are equipped with a range of features \n to provide an exceptional learning experience:"
          }
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeatureList
            features={features}
            selectedTitle={selectedTitle}
            onSelectTitle={setSelectedTitle}
          />
        </motion.div>
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.5 , delay : 0.4 }}
        >
          <FeatureDetails selectedFeature={selectedFeature} />
        </motion.div>
      </div>
    </div>
  );
}
