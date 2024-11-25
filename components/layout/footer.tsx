// components/Footer.js
import React from "react";
import BaseText from "../custom/BaseText";
import { FONT_SIZE } from "../custom/enum";
import { PAGES_ENDPOINTS } from "../custom/pages-endpoints";
import Link from "next/link";
import Logo from "../../images/logo.png";
import Twitter from "../../images/twitter.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Youtube from "../../images/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-[#D8DDE0] pt-10 w-full flex flex-col gap-14 ">
      <div className="lg:w-[1100px] w-full mx-auto lg:px-0 px-10 py-10 flex flex-col gap-10">
        {/* Subscribe Section */}
        <div className="bg-white rounded-lg px-10 py-9 mx-auto text-center lg:text-left min-w-full max-w-full flex lg:flex-row flex-col justify-between items-start gap-5">
          <div className="flex flex-col gap-5 lg:items-start items-center max-w-[500px]">
            <BaseText
              title="Get in Touch"
              fontSize={FONT_SIZE.PX_40}
              fontWeight="font-semibold"
              className="lg:text-left text-center"
            />
            <BaseText
              title="Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help."
              className="text-gray-600 lg:text-left text-center"
              fontSize={FONT_SIZE.PX_20}
            />
            <ul className=" space-y-8">
              <li className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m2.357 7.714 6.98 4.654c.963.641 1.444.962 1.964 1.087.46.11.939.11 1.398 0 .52-.125 1.001-.446 1.964-1.087l6.98-4.654M7.157 19.5h9.686c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327H7.157c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327" />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 text-sm ml-4"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064 1.468-1.545-.19-3.31-1.108-4.609-1.723-2.435-5.504.927-5.39 3.066.363 6.746 7.66 14.74 14.726 14.042 2.21-.218 4.75-4.21 2.215-5.669-1.268-.73-3.009-2.17-4.343-.767" />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 text-sm ml-4"
                >
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.56 20.82a.964.964 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.592 7.592 0 0 1 12 3c2 0 3.919.785 5.333 2.181 5.181 5.116.056 12.196-4.773 15.64" />
                  <path d="M10.75 12a1 1 0 0 1-1-1V8.64L12 7l2.25 1.64V11a1 1 0 0 1-1 1z" />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600  text-sm ml-4"
                >
                  123 Street 256 House
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center w-full lg:w-2/5 flex-col gap-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 w-full">
              <input
                type="email"
                placeholder="Enter Your First Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="Enter Your Last Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 w-full">
              <input
                required
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 w-full">
              <textarea
                required
                placeholder="Enter Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <p className="text-gray-600 text-sm">
              By submitting this form you agree to our{" "}
              <Link href={PAGES_ENDPOINTS.GET_STARTED} className="text-blue">
                terms and conditions
              </Link>{" "}
              and our{" "}
              <Link href={PAGES_ENDPOINTS.GET_STARTED} className="text-blue">
                privacy policy
              </Link>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </p>
            <button
              type="button"
              className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between mt-10 w-full gap-10">
          {/* Logo and Description */}
          <div className=" mb-6 lg:mb-0">
            <Link href={PAGES_ENDPOINTS.GET_STARTED}>
              <img
                src={Logo.src}
                alt="Logo"
                className="h-10 mb-4 hover:cursor-pointer"
              />
            </Link>

            <BaseText
              title={
                "Collaborate to understand your vision, goals, and requirements. Conduct in-depth analysis of your target audience and market trends."
              }
              fontSize={FONT_SIZE.PX_14}
              className="text-gray-600 w-[310px] pr-10 leading-6"
            />
          </div>

          <div>
            <h4 className="font-semibold mb-3">Footer Heading</h4>
            <ul className="text-gray-600 space-y-2 text-14ct">
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Footer Heading</h4>
            <ul className="text-gray-600 space-y-2 text-14ct">
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Footer Heading</h4>
            <ul className="text-gray-600 space-y-2 text-14ct">
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black"
                >
                  Footer link
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className=" mb-6 lg:mb-0">
            <h4 className="font-semibold mb-3">Socials</h4>
            <ul className="text-gray-600 space-y-2 text-14ct">
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black flex items-center gap-4"
                >
                  <img src={Twitter.src} alt="Twitter" className="h-5" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black flex items-center gap-4"
                >
                  <img src={Facebook.src} alt="Facebook" className="h-5" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black flex items-center gap-4"
                >
                  <img src={Instagram.src} alt="Instagram" className="h-5" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={PAGES_ENDPOINTS.GET_STARTED}
                  className="hover:text-black flex items-center gap-4"
                >
                  <img src={Youtube.src} alt="Youtube" className="h-5" />
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="flex justify-between py-10  text-gray-600 text-sm bg-black lg:px-0 px-5 max-h-[100px]">
        <div className="w-[1100px] mx-auto flex flex-row justify-between">
          <p>&copy; 2024 Edlabs. All rights reserved.</p>
          <div className="space-x-4">
            <Link
              href={PAGES_ENDPOINTS.GET_STARTED}
              className="hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link
              href={PAGES_ENDPOINTS.GET_STARTED}
              className="hover:text-black"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
