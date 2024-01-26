import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-4">
    <div className="text-center">
      <p>Feel free to follow me on these platforms</p>
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
      <small>&copy; 2023 Erik Peteri</small>
    </div>
  </footer>
  )
}

export default Footer;
