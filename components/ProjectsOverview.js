import Heading from "./Heading";
import Card from "./Card";
import { motion } from "framer-motion";

const ProjectsOverview = () => {
  const data = [
    {
      id: "humanlot",
      name: "Humanlot",
      workplace: "Loopcraft",
      image: "/humanlot.png",
      color : "#ffffff",
      background : `radial-gradient(at 94% 88%, hsla(271, 92%, 63%, 1) 0, hsla(271, 92%, 63%, 0) 50%),
      radial-gradient(at 52% 3%, hsla(131, 91%, 51%, 1) 0, hsla(131, 91%, 51%, 0) 50%),
      radial-gradient(at 24% 23%, hsla(340, 88%, 66%, 1) 0, hsla(340, 88%, 66%, 0) 50%),
      radial-gradient(at 97% 59%, hsla(181, 87%, 65%, 1) 0, hsla(181, 87%, 65%, 0) 50%)`,
      fallback_image: "/HMfallback.png",
      overview:
        "Humanlot is an human resource management system. Created and developed by the Loopcraft. An all-in-one platform to manage your employee data, run payrolls, automate leave flows, provide benefits, & more.",
    },
    {
      id: "amaya",
      name: "Amaya resorts",
      workplace: "Sri Lanka",
      image: "/amaya.png",
      color : "#ffffff",
      background : `radial-gradient(at 62% 83%, hsla(40, 93%, 57%, 1) 0, hsla(40, 93%, 57%, 0) 50%),
      radial-gradient(at 55% 71%, hsla(17, 86%, 66%, 1) 0, hsla(17, 86%, 66%, 0) 50%),
      radial-gradient(at 23% 28%, hsla(303, 91%, 66%, 1) 0, hsla(303, 91%, 66%, 0) 50%),
      radial-gradient(at 0% 100%, hsla(90, 86%, 60%, 1) 0, hsla(90, 86%, 60%, 0) 50%)`,
      fallback_image: "/JMfallback.png",
      overview:
        "Scattered across the beautiful parts of Kandy, Dambulla and pasikudah.",
    },

    {
      id: "love",
      name: "Love Sri Lanka",
      workplace: "Sri Lanka",
      color : "#ffffff",
      background : `radial-gradient(at 71% 32%, hsla(217, 93%, 56%, 1) 0, hsla(217, 93%, 56%, 0) 50%),
      radial-gradient(at 60% 31%, hsla(193, 95%, 64%, 1) 0, hsla(193, 95%, 64%, 0) 50%),
      radial-gradient(at 81% 23%, hsla(246, 87%, 54%, 1) 0, hsla(246, 87%, 54%, 0) 50%),
      radial-gradient(at 16% 98%, hsla(257, 95%, 62%, 1) 0, hsla(257, 95%, 62%, 0) 50%)`,
      overview: "Sri Lanka promotion",
      image: "/LoveSLL.png",
      fallback_image: "/JMfallback.png",
    },
    {
      id: "jm",
      name: "Jama'athuge Khabaru",
      workplace: "National Institute of Education , Maldives",
      overview: "Educational Magazine.",
      color : "#ffffff",
      background : `radial-gradient(at 49% 15%, hsla(294, 88%, 67%, 1) 0, hsla(294, 88%, 67%, 0) 50%),
      radial-gradient(at 1% 70%, hsla(263, 85%, 54%, 1) 0, hsla(263, 85%, 54%, 0) 50%),
      radial-gradient(at 46% 53%, hsla(177, 90%, 64%, 1) 0, hsla(177, 90%, 64%, 0) 50%),
      radial-gradient(at 79% 75%, hsla(114, 94%, 64%, 1) 0, hsla(114, 94%, 64%, 0) 50%)`,
      image: "/JM.png",
      fallback_image: "/JMfallback.png",
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
              image={item.image}
              fallback={item.fallback_image}
              title={item.name}
              overview={item.overview}
              workplace= {item.workplace}
              gradient={item.background}
              color = {item.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsOverview;
