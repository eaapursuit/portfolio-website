import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8 justify-items-center">
      <div className="container mx-auto">
        <div className="flex justify-between  ">
            <a href='#'>
                <img src={Logo} alt=''/>
            </a>
            {/* button */}
            <button className="bg-btn-gradient rounded-3xl font-primary text-white font-medium h-[48px] px-6 text-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
