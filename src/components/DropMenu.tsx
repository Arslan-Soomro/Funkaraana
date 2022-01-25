import { Menu } from "@headlessui/react";
import { ChevronDownIcon, BeakerIcon } from "@heroicons/react/solid";

const DropMenu = ({title, options}: {title: string, options: { name:string }[]}) => {
    return (
        <Menu>
            <Menu.Button className="flex items-center space-x-4 text-nclr-600 hover:text-nclr-700 active:text-nclr-800">{title} <ChevronDownIcon className="ml-2 h-4 w-4" /></Menu.Button>
            <div className="relative w-fit">
                <Menu.Items className="border shadow-xl min-w-[150px] flex flex-col z-30 rounded bg-white absolute right-0 top-5 w-fit">
                    {options.map((item, i) => (
                        <Menu.Item as="button" className="p-3 text-left text-sm hover:bg-nclr-100" key={i}>{item.name}</Menu.Item>
                    ))}
                </Menu.Items>
            </div>
        </Menu>
    )
}

export default DropMenu;