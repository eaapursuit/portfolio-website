import React from "react";
import Image from "../assets/headshot.png";
import ImageWebP from "../assets/headshot.webp";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div
      className="section flex items-center min-h-[70vh] lg:min-h-[64vh]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-y-8 sm:gap-x-12">
          {/* {text} */}
          <div className="flex-1 text-center font-secondary sm:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Elisha Abochie-Ansah
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-10 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 ">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Content Creator",
                  2000,
                  "Fitness Junkie",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto sm:mx-0 "
            >
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto sm:mx-0"
            >
              {/* <button className="bg-btn-gradient hover:bg-btn-gradient-hover rounded-3xl font-primary text-white font-medium h-[56px] px-10 text-base">
                Contact me
              </button>
              <a
                href="#"
                className="bg-gradient-to-r text-transparent bg-clip-text from-[#d8cbc4] to-[#765341] font-bold font-primary hover:from-[#765341] hover:to-[#d8cbc4] text-base"
              >
                My Portfolio{" "}
              </a> */}
            </motion.div>
            {/* {socials} */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto sm:mx-0"
            >
              <a href="https://www.youtube.com/@eliTheCoder93" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://github.com/eaapursuit" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ekaansah" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* {image} */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" flex-1 max-w-[320px] sm:max-w-[482px]"
          >
            <img src={Image} alt="Elisha Abochie-Ansah" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
