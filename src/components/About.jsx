import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className="py-8 lg:py-24 lg:h-screen flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* {img} */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top"
          ></motion.div>
          {/* {text} */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with 2 years of experience.
            </h3>
            <p className="mb-6">
              Do laboris mollit labore minim ipsum. Nisi incididunt veniam ipsum
              irure veniam reprehenderit dolor consectetur id voluptate. Laboris
              officia excepteur ipsum consectetur velit aliquip ut pariatur.
              Nulla ea commodo adipisicing consequat mollit sint ut est do culpa
              ipsum velit. Do esse eu dolor laboris pariatur dolore eu cupidatat
              eiusmod magna ea dolore aliquip nisi. Laboris do aute eiusmod
              nulla mollit dolor reprehenderit exercitation ullamco enim.
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
                  {inView ? <CountUp start={0} end={5} duration={3}/> : null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br/>
                  Completed
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-lg"> Contact Me</button>
              <a href='#' className="text-gradient btn-link">
                My Portfolio
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
