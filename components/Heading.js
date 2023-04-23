import { useState, useEffect } from "react";
import Star from "./icons/Star";
import Heart from "./icons/Heart";
import Tag from "./icons/Tag";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Heading = ({ text = "Heading", color = "black" }) => {
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //     gsap.to(
  //       ".text",
  //       {
  //         y : -35,
  //         ease : "power3",
  //         scrollTrigger: {
  //           trigger: ".first",
  //           start: "top 20%",
  //           end: "bottom center",
  //           scrub: 1.3,
  //         }
  //       }
  //     );
  //   }, []);

  const colorLookup = {
    "black" : { name: "black", code: "black" },
    "black" : { name: "black", code: "black" },
  };
  return (
    <div className="relative group first inline-block">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text text-white font-bold text-[6rem] whitespace-nowrap leading-[105px] z-10 opacity-100"
        style={{ color: colorLookup[color].code }}
      >
        {text}
      </motion.p>
      <Star className="absolute top-0 right-[-2rem] group-hover:rotate-180 transition-all duration-700 ease-out" />
      <Heart className="absolute top-0 left-[-4rem] group-hover:rotate-[-34deg] transition-all duration-300 ease-out" />
      {/* <Tag className="absolute right-[10rem] top-5 group-hover:rotate-12 transition-all duration-300 ease-out" /> */}
    </div>
  );
};

export default Heading;
