import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="relative">
      <div className="max-w-screen-xl flex items-center justify-end mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

        <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
          <NavLink
            to="/"
            className={
              "py-4 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:underline underline-offset-8 dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={
              "py-4 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:underline underline-offset-8 dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={
              "py-4 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:underline underline-offset-8 dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={
              "py-4 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:underline underline-offset-8 dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
