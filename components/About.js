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
    },{
      id: "4",
      name: "Framer Motion",
    },{
      id: "5",
      name: "Node.js",
    },
    {
      id: "6",
      name: "Tailwind CSS",
    },
    {
      id: "7",
      name: "Mongo",
    },
    {
      id: "8",
      name: "Supabase",
    }
  ];
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center mt-14 lg:mx-8 mx-4">
      <div className="lg:w-[50%] w-full lg:text-2xl text-xl text-gray-400 font-[500] lg:mb-0 mb-6">
        <p className="leading-9">
          Hello! Riumaan here and I enjoy creating things that live on the
          internet. My interest in web development started back in 2015 when I
          decided to try make the computer say hello — turns out hacking
          together a very dumb but insanely great product taught me a lot about
          this whole new world! Fast-forward to today, and I’ve had the
          privilege of working at a start-up, a small but very creative team, a
          huge corporation, and a design studio. My main focus these days is
          building accessible, inclusive products and digital experiences at
          Upstatement for a variety of clients.
        </p>
        <p className="mb-8">Here are a few technologies I’ve been working with recently:</p>
        <div className="grid grid-cols-2">
        {
          techs.map((item) => (
            <p className="mb-1 text-base">{item.name}</p>
          ))
        }
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
