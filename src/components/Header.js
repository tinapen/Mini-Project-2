import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeLink = "text-blue-500";
  const inactiveLink = "text-gray-500";

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-500 bg-gray-900 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          {/* Note Logo, that will redirects to Home page once clicked */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 fill-blue-500 "
            >
              <path
                fillRule="evenodd"
                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                clipRule="evenodd"
              />
            </svg>
            {/* Site Logo Name  */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Lyrix
            </span>
          </NavLink>
          <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="dark"
              className="flex items-center p-2 mr-5 text-xs font-medium text-gray-50 bg-gray-800 rounded-lg border border-gray-600 toggle-dark-state-example hover:bg-gray-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <svg
                  className="w-[20px] h-[20px] text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px] text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {/* Home page link  */}
            <li className="hover:underline me-4 md:me-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                Home
              </NavLink>
            </li>
            {/* About page link  */}
            <li className="hover:underline me-4 md:me-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                About
              </NavLink>
            </li>
            {/* Contact page link  */}
            <li className="hover:underline">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
