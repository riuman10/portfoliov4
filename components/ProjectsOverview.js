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
      color : "#26004d",
      background : `radial-gradient(at 53% 46%, hsla(233, 88%, 58%, 1) 0, hsla(233, 88%, 58%, 0) 50%),
      radial-gradient(at 68% 10%, hsla(264, 93%, 56%, 1) 0, hsla(264, 93%, 56%, 0) 50%),
      radial-gradient(at 75% 84%, hsla(350, 91%, 63%, 1) 0, hsla(350, 91%, 63%, 0) 50%),
      radial-gradient(at 95% 20%, hsla(259, 94%, 69%, 1) 0, hsla(259, 94%, 69%, 0) 50%),
      radial-gradient(at 7% 2%, hsla(21, 88%, 51%, 1) 0, hsla(21, 88%, 51%, 0) 50%),
      radial-gradient(at 14% 12%, hsla(13, 94%, 69%, 1) 0, hsla(13, 94%, 69%, 0) 50%),
      radial-gradient(at 29% 75%, hsla(274, 92%, 66%, 1) 0, hsla(274, 92%, 66%, 0) 50%)`,
      fallback_image: "/HMfallback.png",
      overview:
        "Humanlot is an human resource management system. Created and developed by the Loopcraft. An all-in-one platform to manage your employee data, run payrolls, automate leave flows, provide benefits, & more.",
    },
    {
      id: "amaya",
      name: "Amaya resorts",
      workplace: "Sri Lanka",
      image: "/amaya.png",
      color : "#26004d",
      background : `radial-gradient(at 75% 97%, hsla(23, 88%, 64%, 1) 0, hsla(23, 88%, 64%, 0) 50%),
      radial-gradient(at 36% 43%, hsla(18, 94%, 56%, 1) 0, hsla(18, 94%, 56%, 0) 50%),
      radial-gradient(at 58% 59%, hsla(113, 89%, 62%, 1) 0, hsla(113, 89%, 62%, 0) 50%),
      radial-gradient(at 93% 74%, hsla(164, 94%, 55%, 1) 0, hsla(164, 94%, 55%, 0) 50%),
      radial-gradient(at 18% 84%, hsla(245, 91%, 60%, 1) 0, hsla(245, 91%, 60%, 0) 50%),
      radial-gradient(at 29% 41%, hsla(278, 90%, 69%, 1) 0, hsla(278, 90%, 69%, 0) 50%),
      radial-gradient(at 15% 76%, hsla(182, 95%, 54%, 1) 0, hsla(182, 95%, 54%, 0) 50%)`,
      fallback_image: "/JMfallback.png",
      overview:
        "Scattered across the beautiful parts of Kandy, Dambulla and pasikudah.",
    },

    {
      id: "love",
      name: "Love Sri Lanka",
      workplace: "Sri Lanka",
      color : "#26004d",
      background : `radial-gradient(at 76% 97%, hsla(186, 91%, 52%, 1) 0, hsla(186, 91%, 52%, 0) 50%),
      radial-gradient(at 73% 45%, hsla(289, 91%, 53%, 1) 0, hsla(289, 91%, 53%, 0) 50%),
      radial-gradient(at 31% 51%, hsla(175, 92%, 50%, 1) 0, hsla(175, 92%, 50%, 0) 50%),
      radial-gradient(at 97% 46%, hsla(36, 85%, 61%, 1) 0, hsla(36, 85%, 61%, 0) 50%),
      radial-gradient(at 100% 85%, hsla(70, 95%, 59%, 1) 0, hsla(70, 95%, 59%, 0) 50%),
      radial-gradient(at 22% 23%, hsla(50, 88%, 67%, 1) 0, hsla(50, 88%, 67%, 0) 50%),
      radial-gradient(at 2% 84%, hsla(218, 95%, 53%, 1) 0, hsla(218, 95%, 53%, 0) 50%)`,
      overview: "Sri Lanka promotion",
      image: "/LoveSLL.png",
      fallback_image: "/JMfallback.png",
    },
    {
      id: "jm",
      name: "Jama'athuge Khabaru",
      workplace: "National Institute of Education , Maldives",
      overview: "Educational Magazine.",
      color : "#26004d",
      background : `radial-gradient(at 13% 84%, hsla(111, 94%, 54%, 1) 0, hsla(111, 94%, 54%, 0) 50%),
      radial-gradient(at 16% 69%, hsla(289, 91%, 62%, 1) 0, hsla(289, 91%, 62%, 0) 50%),
      radial-gradient(at 5% 50%, hsla(189, 86%, 50%, 1) 0, hsla(189, 86%, 50%, 0) 50%),
      radial-gradient(at 57% 22%, hsla(277, 95%, 57%, 1) 0, hsla(277, 95%, 57%, 0) 50%),
      radial-gradient(at 19% 50%, hsla(241, 93%, 61%, 1) 0, hsla(241, 93%, 61%, 0) 50%),
      radial-gradient(at 85% 7%, hsla(17, 92%, 55%, 1) 0, hsla(17, 92%, 55%, 0) 50%),
      radial-gradient(at 39% 40%, hsla(228, 87%, 56%, 1) 0, hsla(228, 87%, 56%, 0) 50%)`,
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
