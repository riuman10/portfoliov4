import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  image = "/JM.png",
  fallback = "/JM.png",
  title = "",
  overview = "",
  workplace = "",
  gradient = "",
  text_color = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      Layout="card"
      transition={{ layout: { duration: 1, type: "spring", bounce: 0.3 } }}
      className="flex flex-col w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative">
        <div
          // width={isOpen ? 350 : 300}
          // height={isOpen ? 310 : 300}
          // src={image}
          className={`rounded-2xl mb-2 cursor-pointer transition-all hover:translate-y-[-10px] duration-700`}
          style = {{
            backgroundImage : `${gradient}`,
            width : isOpen ? 350 : 300,
            height : isOpen ? 310 : 300
          }}
        />
        <p 
        className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold whitespace-nowrap"
        style = {{
          color : `${text_color}`
        }}
        >
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
            transition={{ duration: 0.35 }}
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
