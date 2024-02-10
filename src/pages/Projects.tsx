import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Card from "../components/Card";

const cardVariant = {
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: "backOut",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div>
      <Element name="projects" className="text-4xl text-white">
        Projects
      </Element>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={control}
        variants={cardVariant}
        className="h-screen flex flex-wrap items-center justify-center text-white"
      >
        <Card
          title="Flappy Bird"
          url="https://github.com/LerkkaP/flappy-bird"
          description="testi"
          stack={["Python", "Pygame", "Matplotlib", "TinyDB"]}
        />

        <Card
          title="Ecommerce Flask"
          url="https://github.com/LerkkaP/ecommerce-flask"
          description="testi2"
          stack={["Python", "Flask", "Javascript", "Html", "CSS", "PostgreSQL"]}
        />
        <Card
          title="Workout tracker"
          url="https://github.com/LerkkaP/workout-tracker"
          description="testi3"
          stack={["React", "Javascript", "MongoDB", "REST"]}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
