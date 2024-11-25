"use client";
// src/components/Question.tsx
import React from "react";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
// FAQ data
const questions = [
    {
      question: "What services does [Your Company Name] offer in e-learning software development?",
      answer: "We offer end-to-end e-learning software development services, including custom LMS development, mobile learning apps, virtual classroom solutions, e-learning content creation, and more.",
    },
    {
      question: "Can you customize the e-learning platform to fit our organization's specific needs?",
      answer: "Absolutely. We specialize in creating tailored solutions that align with your unique requirements, objectives, and branding.",
    },
    {
      question: "How long does it typically take to develop an e-learning solution?",
      answer: "The timeline depends on the project's complexity and scope. After understanding your needs, we can provide an estimated timeframe during the initial consultation.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure your e-learning platform remains up-to-date, secure, and fully functional.",
    },
    {
      question: "What security measures do you implement to protect our data?",
      answer: "We implement robust security protocols, including encryption, secure authentication, regular security audits, and compliance with relevant regulations like GDPR.",
    },
    {
      question: "Can you integrate the e-learning platform with our existing systems?",
      answer: "Yes, we can integrate your e-learning solution with various systems such as CRM, ERP, HRIS, and third-party tools to ensure seamless operations.",
    },
    {
      question: "Do you assist with content creation for the e-learning courses?",
      answer: "While our primary focus is software development, we can collaborate with your content team or recommend partners to assist with creating engaging e-learning content.",
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing options, including fixed-price, time-and-materials, and dedicated team models, tailored to suit your project's needs.",
    },
    { 
      question: "How do we get started with [Your Company Name]?",
      answer: "Simply reach out to us via email or phone, or fill out the contact form on our website. We'll schedule an initial consultation to discuss your project in detail.",
    }
  ];  

// FAQItem Component
const FAQItem: React.FC<{ question: string; answer: string; value: string }> = ({ question, answer, value }) => (
  <AccordionItem value={value}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

// Main Question Component
export default function Question() {
  return (
    <div className="max-w-[1100px] mx-auto flex lg:flex-row flex-col gap-10 pt-28 pb-32 justify-between lg:px-0 px-5">
      {/* Header Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 lg:w-1/3 w-full mt-7 lg:items-start items-center"
      >
        <BaseText
          title="FREQUENTLY ASKED QUESTIONS"
          className="leading-10 tracking-normal font-sans lg:text-left text-center"
          fontWeight="text-medium"
          fontSize={FONT_SIZE.PX_30}
        />
        <BaseText
          className="leading-6 tracking-wider font-sans lg:pr-20 lg:text-left text-center"
          fontWeight="text-medium"
          fontSize={FONT_SIZE.PX_16}
          title="This is where all the answers to your question are."
        />
        {/* Button Component */}
        <button
          onClick={() => document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })}
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-blue-700 flex items-center gap-2 w-fit mt-6 hover:cursor-pointer hover:bg-black/50"
        >
          Get Started Today
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
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.5, delay:0.2 }}
        className="lg:w-2/3 w-full flex flex-col gap-4"
      >
        <Accordion type="single" collapsible>
          {questions.map((item, index) => (
            <FAQItem
              key={index}
              value={`item-${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
