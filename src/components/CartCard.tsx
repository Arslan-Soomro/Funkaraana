import { useContext } from "react";
import { removeFromCart_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { ProductDataType } from "../utils/customTypes";

const CartCard = ({id, name, seller, price, image, qty}: ProductDataType) => {

    const [state, dispatch] = useContext(GlobalContext);

    const removeClickHandler = () => {
        dispatch({type: removeFromCart_ACT, payload: {id, name, seller, price, image, qty}});
    }

    return (
        <div className="flex flex-col xs:flex-row justify-between py-4 border-b max-w-[1280px] md:w-4/5 my-0 mx-auto">
        <div className="flex gap-2 flex-col items-center xs:items-start xs:flex-row">
            <img src={image} className="w-[100px] h-[100px] object-cover rounded"/>
            <div className="flex flex-col justify-between items-center xs:items-start text-center xs:text-left">
                <div>
                    <p className="truncate">{name}</p>
                    <p className="text-sm text-nclr-600 truncate">by {seller}</p>
                </div>
                <p className="text-sbrclr-600 text-sm font-bold">Qty {qty != undefined ? qty : 1}</p>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center">
            <p className="text-sbrclr-600 text-right text-base xs:text-lg font-bold">Rs. {price}</p>
            <button className="text-brclr-600 hover:text-brclr-700 active:text-brclr-800" onClick={removeClickHandler}>Remove</button>
        </div>
    </div>
    )
}

export default CartCard;