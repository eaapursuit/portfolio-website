import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
 
// import Img1 from '../assets/OptimaDashboard.png'
// import Img2 from '../assets/OptimaEmissionsComplianceReport.png'
// import Img3 from '../assets/OptimaEnergyAnalysis.png'
import Img4 from '../assets/OptimaLandingPage.png'

const Work = () => {

    const handleClick = () => {
        window.location.href='https://optimanyc.netlify.app';
    };

    return (
        <div className="pt-16 lg:py-24 lg:h-screen flex items-center" id='work'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        {/* {text} */}
                        <div>
                            <h2 className="font-primary text-[32px] mb-6 tracking-[10%] uppercaseleading-tight text-accent" > My Fullstack Web Apps </h2>
                        <p className="max-w-sm mb-16">Optima is a platform that assists building owners in NYC with visualizing, maintaining, and improving their carbon emissions as mandated by New York Local Law 97. </p>
                        <button className="bg-btn-gradient hover:bg-btn-gradient-hover rounded-3xl font-primary text-white font-medium h-[56px] px-10 text-base btn-sm" onClick={handleClick}>Visit Optima</button>
                        </div>
                        {/* {image} */}
                        <div className="group relative overflow-hidden border-2 border-white/50 max-w-xs rounded-xl">
                          {/* {overlay} */}
                        <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>
                          {/* {img} */}
                          <img className="group-hover:scale-125 transition-all duration-500 max-w-xs" src={Img4} alt =''/>
                          {/* {pretitle} */}
                        {/* <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                            <span className="bg-btn-gradient">Full Stack Development</span></div> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Work;