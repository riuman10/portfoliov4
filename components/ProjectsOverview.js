import Heading from "./Heading";
import Card from "./Card";
import { motion } from "framer-motion";

const ProjectsOverview = () => {
  const data = [
    {
      id: "humanlot",
      name: "Humanlot",
      workplace: "Loopcraft",
      overview: "More than just a payroll.",
      image: "/humanlot.png",
      fallback_image: "/HMfallback.png",
      overview : "Humanlot is an human resource management system. Created and developed by the Loopcraft. An all-in-one platform to manage your employee data, run payrolls, automate leave flows, provide benefits, & more."
    },
    {
      id: "amaya",
      name: "Amaya resorts",
      workplace: "Loopcraft",
      overview: "More than just a payroll.",
      image: "/amaya.png",
      fallback_image: "/JMfallback.png",
      overview : "Scattered across the beautiful parts of Kandy, Dambulla and pasikudah."
    },

    {
      id: "love",
      name: "Love Sri Lanka",
      workplace: "Loopcraft",
      overview: "More than just a payroll.",
      image: "/LoveSLL.png",
      fallback_image: "/JMfallback.png",
    },
    {
      id: "jm",
      name: "Jama'athuge Khabaru",
      workplace: "Loopcraft",
      overview: "More than just a payroll.",
      image: "/JM.png",
      fallback_image: "/JMfallback.png",
    },
  ];
  return (
      <div className="flex items-center justify-center">
        <motion.div Layout = "po" className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-0 mx-3">
          {data.map((item, i) => (
            <motion.div key={i}>
              <Card 
              image={item.image} 
              fallback={item.fallback_image} 
              title = {item.name}
              overview={item.overview}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
};

export default ProjectsOverview;
