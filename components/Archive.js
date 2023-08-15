import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "./Heading";
import About from "./About";

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
      backgroundColor: "#232023",
      duration : 1,
      ease: "power3.easeOut",
    });
  }, []);

  useEffect(() => {
    gsap.to(".card-text", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1.3,
      },
      color : "white",
      duration : .2,
      ease: "power3.easeOut",
    });
  }, []);


  return (
    <div className="min-h-screen section">
      <div className="flex items-center justify-center mt-36 lg:mx-0 mx:8">
        <Heading 
        text = "About"
        color = "white"
        />
      </div>
      <About />
    </div>
  );
};

export default Archive;
