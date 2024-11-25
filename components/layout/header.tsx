"use client";
import React from "react";
import Logo from "../../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import Mail_check from "../../images/homepage/mail-check.png";
import { usePathname } from 'next/navigation';

export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="w-full bg-white pt-14">
      <div className="max-w-[1100px] mx-auto lg:px-0 px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src={Logo.src}
                alt="Logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-black ${
                currentPath === "/" ? "font-bold text-black" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-gray-600 hover:text-black ${
                currentPath === "/services" ? "font-bold text-black" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/features"
              className={`text-gray-600 hover:text-black ${
                currentPath === "/features" ? "font-bold text-black" : ""
              }`}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className={`text-gray-600 hover:text-black ${
                currentPath === "/contact" ? "font-bold text-black" : ""
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() =>
                document
                  .querySelector("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-6 py-2 rounded-full border hover:bg-gray-50 border-black flex flex-row items-center gap-2"
            >
              <Image
                priority
                src={Mail_check}
                alt="mail check"
                width={20}
                // height="auto"
                style={{ objectFit: "contain" }}
              />
              Get in touch
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden p-2">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
