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
      image: "/LoveSL.png",
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

    // {id : crypto.randomUUID(), name : "Humanlot" , workplace : "Loopcraft" , overview : "More than just a payroll." , image : "/JM.png"},
  ];
  return (
    <div>
      {/* <div className="flex items-center justify-center">
            <Heading 
            text = {"Projects"}
            />
            </div> */}
      <div className="flex items-center justify-center">
        <motion.div layout="position" className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {data.map((item, i) => (
            <div key={i}>
              <Card 
              image={item.image} 
              fallback={item.fallback_image} 
              title = {item.name}
              overview={item.overview}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
