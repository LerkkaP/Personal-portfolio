import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="relative py-8">
      <div className="">
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
          <div className="flex justify-evenly" id="navbar-default">
            {["/", "/projects", "/contact"].map((path) => (
              <motion.div
                key={path}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <NavLink
                  to={path}
                  className={
                    "mx-25 text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-blue-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
                  }
                >
                  {path === "/"
                    ? "About"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
