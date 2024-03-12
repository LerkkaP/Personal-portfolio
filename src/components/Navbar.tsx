import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 p-8 z-10 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
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
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <div className="flex justify-center space-x-4">
          {["about", "projects", "contact"].map((path) => (
            <motion.div
              key={path}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link
                activeClass="active"
                className="text-white text-2xl mx-6 text-white  relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-blue-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center cursor-pointer"
                to={path}
                spy={true}
                smooth={true}
                duration={800}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
