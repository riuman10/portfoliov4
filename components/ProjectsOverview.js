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
      color : "#fd5d5d",
      background : `radial-gradient(at 57% 20%, hsla(13, 91%, 51%, 1) 0, hsla(13, 91%, 51%, 0) 50%),
      radial-gradient(at 35% 9%, hsla(339, 86%, 58%, 1) 0, hsla(339, 86%, 58%, 0) 50%),
      radial-gradient(at 83% 94%, hsla(39, 93%, 55%, 1) 0, hsla(39, 93%, 55%, 0) 50%),
      radial-gradient(at 59% 0%, hsla(218, 85%, 69%, 1) 0, hsla(218, 85%, 69%, 0) 50%)`,
      fallback_image: "/HMfallback.png",
      overview:
        "Humanlot is an human resource management system. Created and developed by the Loopcraft. An all-in-one platform to manage your employee data, run payrolls, automate leave flows, provide benefits, & more.",
    },
    {
      id: "amaya",
      name: "Amaya resorts",
      workplace: "Sri Lanka",
      image: "/amaya.png",
      color : "#ffcf66",
      background : `radial-gradient(at 37% 78%, hsla(16, 94%, 59%, 1) 0, hsla(16, 94%, 59%, 0) 50%),
      radial-gradient(at 83% 15%, hsla(272, 95%, 64%, 1) 0, hsla(272, 95%, 64%, 0) 50%),
      radial-gradient(at 87% 50%, hsla(76, 94%, 63%, 1) 0, hsla(76, 94%, 63%, 0) 50%),
      radial-gradient(at 9% 43%, hsla(133, 86%, 67%, 1) 0, hsla(133, 86%, 67%, 0) 50%)`,
      fallback_image: "/JMfallback.png",
      overview:
        "Scattered across the beautiful parts of Kandy, Dambulla and pasikudah.",
    },

    {
      id: "love",
      name: "Love Sri Lanka",
      workplace: "Sri Lanka",
      color : "#5dc8fd",
      background : `radial-gradient(at 0% 89%, hsla(348, 88%, 68%, 1) 0, hsla(348, 88%, 68%, 0) 50%),
      radial-gradient(at 1% 16%, hsla(231, 89%, 70%, 1) 0, hsla(231, 89%, 70%, 0) 50%),
      radial-gradient(at 97% 60%, hsla(103, 91%, 67%, 1) 0, hsla(103, 91%, 67%, 0) 50%),
      radial-gradient(at 36% 77%, hsla(139, 91%, 67%, 1) 0, hsla(139, 91%, 67%, 0) 50%)`,
      overview: "Sri Lanka promotion",
      image: "/LoveSLL.png",
      fallback_image: "/JMfallback.png",
    },
    {
      id: "jm",
      name: "Jama'athuge Khabaru",
      workplace: "National Institute of Education , Maldives",
      overview: "Educational Magazine.",
      color : "#fd5df0",
      background : `radial-gradient(at 34% 33%, hsla(334, 95%, 68%, 1) 0, hsla(334, 95%, 68%, 0) 50%),
      radial-gradient(at 4% 1%, hsla(352, 85%, 69%, 1) 0, hsla(352, 85%, 69%, 0) 50%),
      radial-gradient(at 42% 25%, hsla(349, 88%, 59%, 1) 0, hsla(349, 88%, 59%, 0) 50%),
      radial-gradient(at 42% 98%, hsla(192, 95%, 68%, 1) 0, hsla(192, 95%, 68%, 0) 50%)`,
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
