import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <span className="block text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 WD103P | MP2 |
          <Link to="https://github.com/tinapen" className="hover:underline">
            {" "}
            Tinapen
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
