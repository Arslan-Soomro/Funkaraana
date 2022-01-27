
const StatisticsCard = ({day, daydate, sales, orders, advcost, payout, gprofit, nprofit, bgclr}: {day:string, daydate: string, sales: number, orders: string, advcost: number , payout: number, gprofit: number, nprofit: number, bgclr?: string }) => {
    //TODO Style this to fit specific needs
    
    return (
        <div className="min-h-[230px] overflow-hidden rounded max-w-[200px] xs:max-w-[300px]">
            <div className={`p-4 text-white ${bgclr ? bgclr : "bg-brclr-600"}`}>
                <p>{day}</p>
                <p>{daydate}</p>
            </div>
            <div className="border border-nclr-200 grid grid-cols-2 justify-items-center items-center text-center text-xs xs:text-sm p-4 gap-4">
                <div className="w-1/2 space-y-1">
                    <p>Sales</p>
                    <p>Rs. {sales}</p>
                </div>
                <div className="w-1/2 space-y-1">
                    <p>Orders</p>
                    <p>{orders}</p>
                </div>
                <div className="w-1/2 space-y-1">
                    <p>Advertising Cost</p>
                    <p>Rs. {advcost}</p>
                </div>
                <div className="w-1/2 space-y-1">
                    <p>
                        Estimated Payout
                    </p>
                    <p>
                        Rs. {payout}
                    </p>
                </div>
                <div className="w-1/2 space-y-1">
                    <p>Gross Profit</p>
                    <p>Rs. {gprofit}</p>
                </div>
                <div className="w-1/2 space-y-1">
                    <p>Gross Profit</p>
                    <p>Rs. {nprofit}</p>
                </div>
            </div>
            <button className={`text-center w-full text-white p-3 ${bgclr ? bgclr : "bg-brclr-600"}`}>More</button>
        </div>
    )
}

export default StatisticsCard;