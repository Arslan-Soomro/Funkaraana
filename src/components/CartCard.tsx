
const CartCard = ({id, name, seller, price}: {id: number, name: string, seller: string, price: number}) => {
    return (
        <div className="flex flex-col xs:flex-row justify-between py-4 border-b max-w-[1280px] md:w-4/5 my-0 mx-auto">
        <div className="flex gap-2 flex-col items-center xs:items-start xs:flex-row">
            <img src="images/flowers.jpg" className="w-[100px] h-[100px] object-cover rounded"/>
            <div className="flex flex-col justify-between items-center xs:items-start text-center xs:text-left">
                <div>
                    <p className="truncate">{name}</p>
                    <p className="text-sm text-nclr-600 truncate">by {seller}</p>
                </div>
                <p className="text-sbrclr-600 text-sm font-bold">Qty 1</p>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center">
            <p className="text-sbrclr-600 text-right text-base xs:text-lg font-bold">Rs. {price}K</p>
            <button className="text-brclr-600">Remove</button>
        </div>
    </div>
    )
}

export default CartCard;