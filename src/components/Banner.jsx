import React from "react";
import Image from "../assets/headshot.png";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="section py-8 lg:py-24 lg:h-screen flex items-center min-h-[85vh] lg:min-h-[78vh]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Elisha <span>Abochie-Ansah</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a </span>
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
              <p className="mb-8 max-w-lg mx-auto lg:mx-0 ">
                Incididunt adipisicing in ullamco officia reprehenderit duis do
                ut est eu nulla.{" "}
              </p>
              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <button className="bg-btn-gradient hover:bg-btn-gradient-hover rounded-3xl font-primary text-white font-medium h-[56px] px-10 text-base">
                  Contact me
                </button>
                <a
                  href="#"
                  className="bg-gradient-to-r text-transparent bg-clip-text from-[#d8cbc4] to-[#765341] font-bold font-primary hover:from-[#765341] hover:to-[#d8cbc4] text-base"
                >
                  My Portfolio{" "}
                </a>
              </div>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img
              src={Image}
              alt=""
              className="w-1/2 h-auto sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
