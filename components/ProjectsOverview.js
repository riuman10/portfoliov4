import Heading from "./Heading";
import Card from "./Card";
import { motion } from "framer-motion";

const ProjectsOverview = () => {
  const data = [
    {
      id: "humanlot",
      name: "Humanlot",
      workplace: "Loopcraft",
      text_color: "#fff",
      gradient: `linear-gradient(to top, #ff0844 0%, #ffb199 100%)`,
      overview:
        "Humanlot is an human resource management system. Created and developed by the Loopcraft. An all-in-one platform to manage your employee data, run payrolls, automate leave flows, provide benefits, & more.",
    },
    {
      id: "amaya",
      name: "Amaya resorts",
      workplace: "Sri Lanka",
      text_color: "#545454",
      gradient: `linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)`,
      overview:
        "Scattered across the beautiful parts of Kandy, Dambulla and pasikudah.",
    },

    {
      id: "love",
      name: "Love Sri Lanka",
      workplace: "Sri Lanka",
      text_color: "#f9d423",
      gradient: `linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)`,
      overview: "Sri Lanka promotion",
    },
    {
      id: "jm",
      name: "Jama'athuge Khabaru",
      workplace: "National Institute of Education , Maldives",
      overview: "Educational Magazine.",
      text_color: "#9999ff",
      gradient: `linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)`,
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <motion.div
        Layout="po"
        className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-0 mx-3"
      >
        {data.map((item, i) => (
          <motion.div key={i}>
            <Card
              title={item.name}
              overview={item.overview}
              workplace={item.workplace}
              gradient={item.gradient}
              text_color={item.text_color}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsOverview;
