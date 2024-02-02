/*import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <div className=" h-screen flex items-center justify-center text-white">
        <div className="absolute top-1/4 text-4xl">Projects</div>
      </div>
    </motion.div>
  );
};

export default Projects;*/



import { Element } from "react-scroll";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div>
    <Element name="projects" className="text-4xl text-white">Projects</Element>

    <div className="h-screen flex flex-wrap items-center justify-center text-white">
      <Card />
      <Card />
      <Card />
    </div>
    </div>

  );
};

export default Projects;
