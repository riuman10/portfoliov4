import HeartFooter from "./icons/HeartFooter";
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <motion.div 
        initial = {{opacity : 0 , y :10}}
        whileInView={{opacity :1 , y : 0}}
        viewport={{once : false, amount :.7}}
        transition = {{duration : .6 , ease : "easeIn"}}
        className="text-center py-1 flex items-center text-lg bg-[#1D1D1F] justify-center bg-transparent">
            <p className="flex items-center font-medium text-white">Think different  </p>
        </motion.div>
    )
}


export default Footer;