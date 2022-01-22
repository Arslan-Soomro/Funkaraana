import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-nclr-150 absolute z-10 w-full h-16">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a
                className="text-2xl font-black text-brclr-600 transition-colors duration-200 transform lg:text-2xl hover:text-brclr-700"
                href="#"
              >
                Funkaraana
              </a>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-brclr-600 hover:text-brclr-700 focus:outline-none active:text-brclr-800 "
                aria-label="toggle menu"
                onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`flex-1 md:flex md:items-center md:justify-between ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link
                to="/login"
                className="px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-clr-100 active:bg-nclr-200"
              >
                Signup
              </Link>
              <a
                href="#"
                className="px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200"
              >
                Products
              </a>
              <a
                href="#"
                className="px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-nclr-100 active:bg-nclr-200"
              >
                Dashboard
              </a>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <button
                className="hidden mx-4 text-nclr-500 transition-colors duration-200 transform md:block hover:text-nclr-600 active:text-nclr-700 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
