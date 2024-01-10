import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white fixed left-0 bottom-0 w-full text-center z-1">
      <p className="py-4">Feel free to follow me on these platforms</p>
      <div className="flex justify-center py-1">
        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/LerkkaP">
          {" "}
          <img
            src="src/assets/github.svg"
            alt="GitHub"
            className="w-10 h-10 mx-1"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/erikpeteri/"
        >
          <img
            src="src/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-10 h-10 mx-1"
          />
        </motion.a>
      </div>
      <p className="text-sm pt-4 pb-8">&copy; 2023 Erik Peteri</p>
    </footer>
  );
};

export default Footer;
