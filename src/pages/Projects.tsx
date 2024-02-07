import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Card from "../components/Card";

const cardVariant = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "ease",
      duration: 1.5,
      delay: 0.3,
    },
  },
}

const Projects = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <div>
      <Element name="projects" className="text-4xl text-white">Projects</Element>
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={control}
        variants={cardVariant}
        className="h-screen flex flex-wrap items-center justify-center text-white">
          <Card />
          <Card />
          <Card />
      </motion.div>
    </div>

  );
};

export default Projects;
