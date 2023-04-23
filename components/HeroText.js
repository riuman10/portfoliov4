import { useState , useEffect } from "react";
import Star from "./icons/Star";
import Heart from "./icons/Heart";
import Tag from "./icons/Tag";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroText = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(
          ".text",
          {
            y : -35,
            ease : "power3",
            scrollTrigger: {
              trigger: ".first",
              start: "top 20%",
              end: "bottom center",
              scrub: 1.3,
            }
          }
        );
      }, []);
    return (
        <div className="relative group first">
            <motion.p 
            initial = {{opacity : 0 }}
            animate = {{opacity : 1 }}
            transition = {{duration : .8 }}
            className="text text-[#1D1D1F] font-bold lg:text-[9rem] text-[4rem] whitespace-nowrap lg:leading-[105px] leading-[50px] z-10 opacity-100">Curious<br></br>developer,<br></br>code breaker,<br></br>storyteller</motion.p>
            <Star className="absolute top-0 lg:left-[-2rem] left-[-3rem] -z-10 group-hover:rotate-180 transition-all duration-700 ease-out" />
            <Heart className="absolute bottom-0 left-[-3rem] -z-10 group-hover:rotate-[-34deg] transition-all duration-300 ease-out" />
            <Tag className="absolute lg:right-[10rem] right-[1rem] top-5 -z-10 group-hover:rotate-12 transition-all duration-300 ease-out" />
        </div>
    )
}


export default HeroText;