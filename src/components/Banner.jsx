import React from "react";
import Image from "../assets/headshot.png";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="section py-8 lg:py-24 lg:h-screen flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              Elisha <span>Abochie-Ansah</span>
            </h1>
            <div>
                <span>I am a </span>
            </div>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
