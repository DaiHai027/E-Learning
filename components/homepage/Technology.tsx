"use client";
// src/components/Technology.tsx
import React from "react";
import BaseText from "../custom/BaseText";
import Image from "next/image";
import { FONT_SIZE } from "../custom/enum";

//Framer motion
import { motion, useAnimation } from "framer-motion";

// Image imports
import frontendImage from "../../images/homepage/technology/frontend.png";
import backendImage from "../../images/homepage/technology/backend.png";
import mobileImage from "../../images/homepage/technology/mobile.png";
import cloudImage from "../../images/homepage/technology/cloud.png";
import machineImage from "../../images/homepage/technology/machine.png";
import securityImage from "../../images/homepage/technology/security.png";
import dataImage from "../../images/homepage/technology/data.png";
import devopsImage from "../../images/homepage/technology/devops.png";
import virtualImage from "../../images/homepage/technology/virtual.png";

// List of technology items
const technologies = [
  {
    title: "Front-End Development",
    description:
      "HTML5, CSS3, JavaScript (ES6+) with frameworks such as React.js",
    icon: frontendImage,
  },
  {
    title: "Back-End Development",
    description:
      "Node.js, Python/Flask or Ruby, API development with GraphQL, Go, Java",
    icon: backendImage,
  },
  {
    title: "Mobile Development",
    description: "Flutter and React Native/iOS/Android native development",
    icon: mobileImage,
  },
  {
    title: "Cloud Services",
    description:
      "Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)",
    icon: cloudImage,
  },
  {
    title: "AI and Machine Learning",
    description: "TensorFlow, PyTorch, Natural Language Processing (NLP)",
    icon: machineImage,
  },
  {
    title: "Virtual and Augmented Reality",
    description: "Unity, Unreal Engine, A-Frame, WebXR",
    icon: virtualImage,
  },
  {
    title: "DevOps and Automation",
    description: "Docker, Kubernetes, Jenkins, GitLab CI/CD",
    icon: devopsImage,
  },
  {
    title: "Security Protocols",
    description:
      "SSL/TLS encryption, OAuth 2.0, JWT authentication and authorization",
    icon: securityImage,
  },
  {
    title: "Data Analytics and Big Data",
    description:
      "Tools for data processing and analytics in large digital edu platforms",
    icon: dataImage,
  },
];

// Header component
const Header: React.FC = () => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h1 className="text-30ct font-medium mb-4 text-center lg:text-left">
      OUR TECHNOLOGY EXPERTISE
    </h1>
    <p className="text-gray-600 text-16ct tracking-wider leading-7 text-center lg:text-left">
      We leverage the latest technologies to build robust, scalable,
      <br className="hidden md:block" />
      and secure e-learning solutions.
    </p>
  </motion.div>
);

// Technology Card component
const TechnologyCard: React.FC<{
  title: string;
  description: string;
  icon: any;
  index: number;
}> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
    >
      <div className="flex justify-center items-center bg-[#E7EFF9] rounded-t-lg">
        <Image
          loading="lazy"
          src={icon}
          alt={title}
          width={210}
          // height="auto"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 px-10 py-6">
        <h3 className="text-16ct font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-12ct">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Technology() {
  return (
    <div className="w-full bg-[#D1E8FA] pt-28 pb-32">
      <div className="max-w-[1100px] mx-auto px-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              description={tech.description}
              icon={tech.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
