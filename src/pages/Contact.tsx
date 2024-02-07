import Form from "../components/form/Form";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const contactVariant = {
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

const Contact = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <Element name="contact" className="h-screen flex items-center justify-center text-white">
      <motion.div
      initial="hidden"
      animate={control}
      ref={ref}
      variants={contactVariant}
      >
      <Form />
      </motion.div>
    </Element>
  );
};

export default Contact;
