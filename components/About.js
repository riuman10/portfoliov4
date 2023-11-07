const About = () => {
  const techs = [
    {
      id: "1",
      name: "Next.js",
    },
    {
      id: "2",
      name: "React JS",
    },
    {
      id: "3",
      name: "React Native",
    },
    {
      id: "4",
      name: "Framer Motion",
    },
    {
      id: "5",
      name: "Node.js",
    },
    {
      id: "6",
      name: "Tailwind CSS",
    },
    {
      id: "7",
      name: "MongoDB",
    },
    {
      id: "8",
      name: "Supabase",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center mt-14 lg:mx-8 mx-4">
      <div className="lg:w-[50%] w-full lg:text-2xl text-xl text-gray-300 font-[500] lg:mb-0 mb-6">
        <p className="text-sm lg:text-lg">
          Hello! I'm Riumaan, and I have a passion for crafting digital wonders
          on the World Wide Web. My journey into the realm of web development
          commenced in 2015 when I embarked on the mission to make the computer
          utter its first "hello." As I pieced together a seemingly simple yet
          remarkably impactful creation, I unearthed a trove of knowledge about
          this dynamic universe. Fast-forward to the present day, and my odyssey
          has led me through diverse landscapes, from dynamic startups and
          ingenious small teams to corporate giants and innovative design
          studios. Today, my primary mission revolves around the creation of
          universally accessible and inclusive digital products and experiences
          at a Maldivian company for an array of discerning clients.
        </p>
        <p className="mb-8 text-sm lg:text-lg">
          Here's a glimpse of the technologies I've been actively engaged with
          recently:
        </p>
        <div className="grid grid-cols-2">
          {techs.map((item) => (
            <p className="mb-1 text-base">{item.name}</p>
          ))}
        </div>
      </div>
      <Video />
    </div>
  );
};

const Video = () => {
  return (
    <video width="500" height="500" muted autoPlay loop playsInline>
      <source src="./checkkk.mov" type="video/mp4" />
    </video>
  );
};
export default About;
