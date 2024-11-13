import React, { useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home'); //This is the state to track active link

  return (
    <nav className=" fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto"></div>
      {/* Inner Nav  */}
      <div
        className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-3xl 
          max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50"
      >
        {['home', 'about', 'work', ].map((item) => (
       <Link
          key={item}
          to={item}
          smooth={true}
          spy={true}
          offset={-200}
          style={{
            background: activeLink === item ? 'linear-gradient(92.23deg, #8b0000 21.43%, #a0522d 50.63%, #8b4513 100%, #d2691e 117.04%)' : 'transparent',
            color: activeLink === item ? '#fff' : 'rgba(255, 255, 255, 0.5)',
          }}
          className={`cursor-pointer w-[60px] h-[60px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 ${activeLink === item ? 'active' : ''}`}
          onClick={() => setActiveLink(item)}
          aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
        >
          {item === 'home' && <BiHomeAlt />}
          {item === 'about' && <BiUser />}
          {/* {item === 'services' && <BsClipboardData />} */}
          {item === 'work' && <BsBriefcase />}
          {item === 'contact' && <BsChatSquareText />}
        </Link>   
        ))}
      </div>
    </nav>
  );
};

export default Nav;
