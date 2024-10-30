import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"

const services = [
  {
    name: "UI/UX design",
    description:
      "In veniam incididunt occaecat ut exercitation ut consequat nulla.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "In veniam incididunt occaecat ut exercitation ut consequat nulla.",
    link: "Learn more",
  },
  {
    name: "Site Testing",
    description:
      "In veniam incididunt occaecat ut exercitation ut consequat nulla.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <div className="py-8 lg:py-24 lg:h-screen flex items-center" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* {text} */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="font-primary text-[32px] text-accent mb-6 tracking-[10%] uppercase">
              What I Do.
            </h2>
            <h3 className="max-w-[455px] font-primary font-semibold text-[26px] mb-16 leading-[46px];">
              {" "}
              Cupidatat ullamco ad id Lorem tempor occaecat laborum.
            </h3>
            <button className="bg-btn-gradient hover:bg-btn-gradient-hover rounded-3xl font-primary font-medium h-[56px] px-10 text-white ">
              See My Work
            </button>
          </motion.div>
          {/* {services} */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            {/* {services list} */}
            <div>
              {services.map((service, index) => {
                //destructuring service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                        <a href="#" className=" bg-btn-gradient hover:bg-btn-gradient-hover rounded-full font-primary text-white font-medium px-10 text-base w-9 h-9 mb-[42px] justify-center items-center">
                            <BsArrowUpRight />
                        </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
