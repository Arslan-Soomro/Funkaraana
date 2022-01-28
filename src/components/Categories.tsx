import { useState } from "react";
import DropMenu from "./DropMenu";
import { FilterIcon } from "@heroicons/react/solid";
import CheckList from "./CheckList";
import { CategoryElementProps } from "../utils/customTypes";

//TODO Break Down Into Components

const Categories = ({children, title, categories, filters, menu }: CategoryElementProps) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <section className="w-full h-full py-2 flex flex-col">
      {/* Heading */}
      <div className="flex flex-row justify-between px-6 py-2 border-b">
        <p className="text-sm xs:text-lg sm:text-2xl font-bold text-brclr-600">
          {title}
        </p>
        <div className="flex gap-2 text-nclr-600 text-xs xs:text-sm">
          <DropMenu title={menu.title} options={menu.options} />
          <button className="block md:hidden" onClick={() => setOpenSidebar(openSidebar ? false : true)}>
            <FilterIcon className="h-5 w-5 text-nclr-600 hover:text-nclr-700 active:text-nclr-800" />
          </button>
        </div>
      </div>

      {/* Body */}
      <section className="flex h-full relative">
        {/* Sidebar */}
        <div
          className={` h-full w-[220px] max-w-[220px] absolute xs:relative transition-all ${
            openSidebar ? "left-0" : "-left-[220px]"
          } bg-white z-20`}
        >
          <div className="text-nclr-700 px-8 py-6 space-y-2 text-sm flex flex-col items-start justify-start border-b">
            {categories.map((cat, i) => (
              <button key={i}>{cat.name}</button>
            ))}
          </div>
          <div className="text-nclr-700 px-8 py-6 space-y-4">
            {filters.map((filter, i) => (
              <div key={i}>
              <p className="mb-2">{filter.title}</p>
              <CheckList checks={filter.subFilters} />
            </div>
            ))}
          </div>
        </div>

        {/* The Content To Show { Children } */}
        <div className="w-full h-full">
          {/* <CollectionList /> */}
          { children }
        </div>
      </section>
    </section>
  );
};

export default Categories;
