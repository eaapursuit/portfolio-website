import React from "react";
import CountUp from "react-countup";
import Image from "../assets/headshot.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className="py-8 lg:py-24 lg:h-screen flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">

          {/* {text} */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className="flex-1">
            <h2 className="font-primary text-[32px] mb-6 tracking-[10%] uppercase text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with 2 years of experience.
            </h3>
            <p className="mb-6">
              I come from a diverse background with about 6 years as a personal trainer working with collegiate
              and professional athletes. During the pandemic, I began making my fitness presence known online and worked as a virtual performance coach in the fitness tech space. Since then, I've completed a 13 month long
              software engineering fellowship at Pursuit, which is based out of Long Island City, New York.
            </p>
            {/* {stats} */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={2}/> : null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3}/> : null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br/>
                  Completed
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="bg-btn-gradient hover:bg-btn-gradient-hover rounded-3xl font-primary text-white font-medium h-[56px] px-10 text-base"> Contact Me</button>
              <a href='#' className="bg-gradient-to-r text-transparent bg-clip-text from-[#d8cbc4] to-[#765341] font-bold font-primary hover:from-[#765341] hover:to-[#d8cbc4] text-base btn-link">
                My Portfolio
                </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
