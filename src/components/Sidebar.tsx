import { ArrowLeftIcon, ChartBarIcon, CogIcon, EyeIcon, PlusIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = ({ children }) => {
  return (
    <section className="w-full h-full flex flex-row bg-nclr-50">
      <div className="h-full max-w-[280px] w-1/4 p-4">
        <div className="h-full w-full shadow-lg shadow-brclr-200 bg-brclr-700 rounded px-3 xs:px-6 py-8 text-white text-sm lg:text-base flex flex-col gap-6 sm:gap-4">
          <Link to="/products" className="flex flex-col lg:flex-row gap-2 p-2 text-center items-center hover:bg-brclr-600 active:bg-brclr-500  rounded-lg cursor-pointer">
            
              <PlusIcon className="h-6 w-6" />
            
            <p className="hidden sm:block">Add Product</p>
          </Link>
          <Link to="/prodview" className="flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg">
              <EyeIcon className="h-6 w-6" />
            <p className="hidden sm:block">View Products</p>
          </Link>
          <Link to="/statistics" className="flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg">
            <ChartBarIcon className="h-6 w-6" />
            <p className="hidden sm:block">Statistics</p>
          </Link>
          <Link to="/" className="flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg">
            <CogIcon className="h-6 w-6" />
            <p className="hidden sm:block">Settings</p>
          </Link>
          <Link to="/login" className="flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg">
            <ArrowLeftIcon className="h-6 w-6" />
            <p className="hidden sm:block">Go Back</p>
          </Link>
        </div>
      </div>

      <section className="h-full w-full flex flex-col">
        {children}
      </section>
    </section>
  );
};


export default Sidebar;
