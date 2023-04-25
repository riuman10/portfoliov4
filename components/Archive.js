import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "./Heading";


const Archive = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1.3,
      },
      backgroundColor: "black",
      duration : 1,
      ease: "power3.easeOut",
    });
  }, []);
  return (
    <div className="h-screen section">
      <div className="flex items-center justify-center mt-24 lg:mx-0 mx:8">
        <Heading 
        text = "From the archive"
        color = "white"
        />
      </div>
    </div>
  );
};

export default Archive;
