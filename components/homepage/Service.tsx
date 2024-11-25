"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ServiceBg from "../../images/homepage/BG-service.png";
import Icon_1 from "../../images/homepage/service/icon_1.png";
import Icon_2 from "../../images/homepage/service/icon_2.png";
import Icon_3 from "../../images/homepage/service/icon_3.png";
import Title from "../../images/homepage/Title.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

//Framer motion
import { motion, useAnimation } from "framer-motion";

const services = [
  {
    icon: Icon_1,
    title: "Learning Management Systems",
    description:
      "Develop bespoke LMS platforms tailored to your organization's unique requirements.",
  },
  {
    icon: Icon_2,
    title: "E-Learning Application Dev",
    description:
      "Build engaging and interactive learning applications accessible across devices.",
  },
  {
    icon: Icon_3,
    title: "Student Information Systems",
    description:
      "Streamline student data management with customized solutions.",
  },
  {
    icon: Icon_1,
    title: "Education Management Systems",
    description:
      "Automate administrative tasks such as scheduling, reporting, and communication.",
  },
  {
    icon: Icon_2,
    title: "E-Learning Content Development",
    description:
      "Design engaging multimedia content, including videos, quizzes, and interactive modules.",
  },
  {
    icon: Icon_3,
    title: "Education Analytics",
    description:
      "Utilize big data analytics to gain insights into learner behavior.",
  },
  {
    icon: Icon_3,
    title: "Corporate Training Solutions",
    description: "Streamline employee onboarding and professional development.",
  },
];

// Add this interface before ServiceCard
interface Service {
  icon: { src: string };
  title: string;
  description: string;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex lg:flex-row gap-5 h-[155px] cursor-pointer">
    <img
      src={service.icon.src}
      alt={service.title}
      className="object-contain w-12 h-12"
      loading="lazy"
    />
    <div className="flex flex-col">
      <h3 className="text-14ct font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 text-12ct pr-7">{service.description}</p>
    </div>
  </div>
);

const NavigationButtons = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => (
  <div className="flex gap-2 ml-auto">
    <button
      onClick={onPrev}
      className="p-2 rounded-[5px] bg-white border border-gray-300 hover:bg-gray-50"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      onClick={onNext}
      className="p-2 rounded-[5px] bg-white border border-gray-300 hover:bg-gray-50"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

interface PaginationDotsProps {
  currentSlide: number;
  services: Array<any>;
  setCurrentSlide: (index: number) => void;
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const PaginationDots = ({
  currentSlide,
  services,
  setCurrentSlide,
  swiperRef,
}: PaginationDotsProps) => (
  <div className="flex gap-2">
    {services.map((_, index) => (
      <button
        key={index}
        className={`h-2 rounded-full transition-all duration-300 ${
          currentSlide === index ? "w-8 bg-white" : "w-2 bg-white"
        }`}
        onClick={() => {
          setCurrentSlide(index);
          swiperRef.current?.slideTo(index);
        }}
      />
    ))}
  </div>
);

export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const nextSlide = () => swiperRef.current?.slideNext();
  const prevSlide = () => swiperRef.current?.slidePrev();

  return (
    <div
      className="w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${ServiceBg.src})` }}
    >
      <div className="mx-auto pt-28 pb-32  px-4 max-w-[1100px] flex-col items-center">
        <div className="mb-12 flex flex-col lg:flex-row justify-between gap-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 lg:w-[50%]"
          >
            <h2 className="text-30ct font-medium mb-4 text-center lg:text-left relative leading-10 ">
              OUR E-LEARNING
              <br className="lg:block hidden" /> SERVICES AND SOLUTIONS
              <Image
                src={Title}
                alt="title"
                loading="lazy"
                className="absolute top-2 left-1 lg:block hidden"
                width={600}
                // height="auto"
              />
            </h2>
            <BaseText
              className="lg:whitespace-pre-line tracking-wider leading-7 text-center lg:text-left"
              fontWeight="text-normal"
              textColor="text-gray-600"
              fontSize={FONT_SIZE.PX_16}
              title={
                "At Edlab Studio, we offer a comprehensive suite of e-learning \n solutions designed to meet diverse educational needs:"
              }
            />
          </motion.div>
          <div className="flex lg:justify-end justify-center lg:items-end items-center lg:w-[50%]">
            <button
              onClick={() =>
                document
                  .querySelector("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-1 border border-white text-black text-14ct rounded-full hover:bg-gray-100 transition w-fit"
            >
              Start With Us
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <line x1="5" y1="12" x2="19" y2="12" />{" "}
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile devices
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
          spaceBetween={24}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-4 mt-8">
          <PaginationDots
            currentSlide={currentSlide}
            services={services}
            setCurrentSlide={setCurrentSlide}
            swiperRef={swiperRef}
          />
          <NavigationButtons onNext={nextSlide} onPrev={prevSlide} />
        </div>
      </div>
    </div>
  );
}
