import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useState } from "react";

const title = "Filter"

const color = [
  { name: "Red", checked: false },
  { name: "Green", checked: false },
  { name: "Blue", checked: false },
];

const DropList = () => {
  const [selectedColor, setSelectedColor] = useState({name: "color"});

  return(<div className="m-2">
    <div><p>{title}</p></div>
    <div>{color.map((clr, i) => {
      return(
        <div className="text-sm text-nclr-800 my-2">
          <input key={i} type="checkbox" className="h-4 w-4 mr-3 border-gray-300 rounded-full text-indigo-600 focus:ring-indigo-500" />
          {clr.name}
        </div>
      )
    })}</div>
  </div>)
}

export default DropList;