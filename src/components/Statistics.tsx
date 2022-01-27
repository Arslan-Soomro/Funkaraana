import { FilterIcon, StarIcon, TrendingUpIcon, ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";
import DropMenu from "./DropMenu";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
    return (
        <section className="p-4 h-full flex flex-col bg-white">

            {/* Top Section */}
            <div className="flex space-x-6 items-center border-b border-nclr-200 py-2 px-2 ">
                <h3 className="text-2xl font-bold">Dashboard</h3>
                <div className="hidden md:flex space-x-4 text-nclr-600 text-sm items-center ">
                    <button className="flex space-x-1 items-center hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded">
                        <ViewGridIcon className="h-5 w-5" />
                        <p>Tiles</p>
                    </button>
                    <button className="flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded">
                        <TrendingUpIcon className="h-5 w-5" />
                        <p>Chart</p>
                    </button>
                    <button className="flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded">
                        <ViewListIcon className="h-5 w-5" />
                        <p>P AND L</p>
                    </button>
                    <button className="flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded">
                        <p>Trends</p>
                        <StarIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex py-4 space-x-4">
                <input placeholder="Search" className="hidden md:block py-2 px-3 rounded bg-nclr-100" />
                <DropMenu title="All Marketplaces" options={[{name: "Pakistan"}, {name: "India"}, {name: "Germany"}]} />
                <div className="hidden md:flex items-center space-x-1 text-nclr-600 cursor-pointer hover:text-brclr-600 active:text-brclr-700 transition-all ">
                    <FilterIcon className="h-5 w-5" />
                    <p>Filter</p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex  items-center justify-center gap-2 overflow-y-auto flex-wrap">
                {/*TODO make it more responsive */}
                <StatisticsCard day="Today" daydate="25/01/2022" sales={2} orders={"0/0/0"} advcost={100} payout={800} gprofit={200} nprofit={100}    />
                <StatisticsCard day="Yesterday" daydate="24/01/2022" sales={5} orders={"0/0/0"} advcost={200} payout={5000} gprofit={1000} nprofit={500} bgclr="bg-green-600"  />
                <StatisticsCard day="This Week" daydate="18/01/2022" sales={10} orders={"0/0/0"} advcost={500} payout={8000} gprofit={2000} nprofit={1000} bgclr="bg-yellow-600"  />
            </div>
        </section>
    )
}

export default Statistics;