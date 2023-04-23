import { useState, useeffect, useRef } from "react";
import MenuDots from "./icons/MenuDots";
import { motion, AnimatePresence } from "framer-motion";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
  return (
    <div className="flex justify-between items-center container mx-auto py-4 px-6">
      <p className="font-roboto font-medium" onClick={() => router.push('/')}>Riumaan</p>
      <Menu />
    </div>
  );
};

const Menu = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: crypto.randomUUID(), name: "Home", link: "/" },
    { id: crypto.randomUUID(), name: "Work", link: "/" },
    { id: crypto.randomUUID(), name: "About", link: "/" },
    { id: crypto.randomUUID(), name: "Brainchild", link: "/" },
];
useOnClickOutside(ref, () => setIsOpen(!isOpen))
return (
    <div className="relative">
      <div>
        <MenuDots
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0, y: -5, transition: { duration: 0.3 } }}
            className="border border-gray-100 rounded-lg mt-2 shadow-lg absolute right-0 top-9"
          >
            {items.map((item, i) => (
              <motion.div
                key = {i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer hover:bg-gray-50 pl-2 pr-14 m-2 py-1 rounded-lg group"
              >
                <p className="font-medium text-sm text-gray-500 group-hover:text-gray-900">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
