/*import { motion } from "framer-motion";

const Contact = () => {
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
        <div className="absolute top-1/4 text-4xl">Contact</div>
      </div>
    </motion.div>
  );
};

export default Contact;*/

import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className=" h-screen flex items-center justify-center text-white">
      <div className="absolute top-1/4 text-4xl">Contact</div>
      <ContactForm />
    </div>
  );
};

export default Contact;
