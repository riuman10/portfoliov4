import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  image = "/JM.png",
  fallback = "/JM.png",
  title = "",
  overview = "",
  workplace = "",
  gradient = "",
  color = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      Layout="card"
      transition={{ layout: { duration: 1.5, type: "spring", bounce: 0.2 } }}
      className="flex flex-col w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* <Image
          width={isOpen ? 350 : 300}
          height={isOpen ? 310 : 300}
          src={image}
          className={`rounded-2xl mb-2 cursor-pointer transition-all hover:translate-y-[-10px] duration-700`}
        /> */}
      <div
        style={{
          width: isOpen ? "340px" : "300px",
          height: isOpen ? "310px" : "300px",
          backgroundColor: color,
          backgroundImage: gradient,
        }}
        className={`relative rounded-2xl mb-2 cursor-pointer transition-all hover:translate-y-[-10px] duration-700 bg-gradient-tr`}
      >
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white whitespace-nowrap">
          {title}.
        </p>
      </div>
      <motion.p className="text-lg card-text font-medium">{title}</motion.p>
      <motion.p className="text-gray-500">At {workplace}</motion.p>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, height: 0 }}
            Layout="inside"
            className="w-[300px]"
          >
            <p className="text-gray-900">{overview}</p>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
