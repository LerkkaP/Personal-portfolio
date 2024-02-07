import { Element } from "react-scroll";
import { useEffect } from "react";
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";

const aboutVariant = {
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

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])
  return (
    <Element name="about" className="h-screen flex items-center justify-center text-white">
      <motion.div
      initial="hidden"
      animate={control}
      ref={ref}
      variants={aboutVariant}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur, ut architecto cumque a ipsum inventore recusandae vitae temporibus, debitis animi aliquid eligendi quos repellendus consequuntur maiores? Enim, quae vero.
      </motion.div>
    </Element>
  );
};

export default About;
