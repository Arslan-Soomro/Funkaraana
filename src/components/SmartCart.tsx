import { useContext } from "react";
import GlobalContext from "../context/global-context";
import Cart from "./Cart";
import { products } from "../utils/dummyData";

const SmartCart = () => {

    //const [state, dispatch] = useContext(GlobalContext);

    //console.log(state.cartItems);

    return(
        <Cart prods={products} />
    )
}

export default SmartCart;