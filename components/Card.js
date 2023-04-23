import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
    image = "/JM.png",
    fallback = "/JM.png",
    title = "",
    overview = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <motion.div
        Layout = "card"
        transition={{ layout: { duration: 1.5 , type : "spring" , bounce : 0.2 } }}
        className="flex flex-col w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width={isOpen ? 350 : 300}
          height={isOpen ? 310 : 300}
          src={image}
          className={`rounded-2xl mb-2 cursor-pointer transition-all hover:translate-y-[-10px] duration-700`}
        />
        <motion.p className="text-lg">
          {title}
        </motion.p>
        <motion.p  className="text-gray-500">
          At the Loopcraft
        </motion.p>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              Layout="inside"
              className="w-[300px]"
            >
              <p>
                {overview}
              </p>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </motion.div>
  );
};

export default Card;
