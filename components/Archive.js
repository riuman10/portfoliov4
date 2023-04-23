import { motion } from "framer-motion";

const Archive = () => {
  return (
    <motion.div
      initial={{ background: "white", opacity: 0 }}
      whileInView={{ background: "black", opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.4 }}
      className="h-screen"
    ></motion.div>
  );
};

export default Archive;
