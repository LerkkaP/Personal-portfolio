import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="relative py-8">
      <div className="max-w-screen-xl flex items-center justify-center mx-auto">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

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
          <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
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
                    " px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-4 group  transition duration-300 relative group"
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-700 transition-all group-hover:w-full"></span>
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
