import React from "react";
import pic from "../../public/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Feed</span>
            <div className="flex space-x-1 text-2xl md:4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Detail-oriented and proactive Front-End Developer with 1.6 years
              of hands-on experience in React.js, JavaScript, HTML5, CSS3, and
              Tailwind CSS. Skilled in developing responsive and user-friendly
              web applications, with a focus on performance optimization and
              Agile development. Experienced in collaborating with
              cross-functional teams to deliver scalable and high-quality
              applications.
            </p>
            <br />
            {/* Social Media */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <FaXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/telegram">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold ">Currently Working on</h1>
                <div className="flex space-x-5 ">
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-500" />
                  <SiJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-500" />
                  <SiMysql className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-500" />
                  <FaHtml5 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-500" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr class="border-0 border-t-2 border-gray-400 my-4"></hr>
    </>
  );
}

export default Home;
