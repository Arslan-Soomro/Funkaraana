
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-white border-b border-nclr-150 fixed w-full h-16 z-40 max-h-[80px]">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link
                className="text-xl xs:text-2xl font-black text-brclr-600 transition-colors duration-200 transform lg:text-2xl hover:text-brclr-700"
                to="/"
              >
                Funkaraana
              </Link>
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
              <Link
                to="/products"
                className="px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-nclr-100 active:bg-nclr-200"
              >
                Dashboard
              </Link>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <Link to="/cart"
                className="hidden mx-4 text-nclr-500 transition-colors duration-200 transform md:block hover:text-nclr-600 active:text-nclr-700 focus:outline-none"
                aria-label="show notifications"
              >
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="pt-[64px] w-full h-full">
      {children}
    </div>
    </>
  );
};

export default Navbar;
