import { useEffect, useState } from "react";
import GlobalContext from "../context/global-context";
import Cart from "./Cart";

const SmartCart = () => {

    return(
        <Cart prods={JSON.parse(localStorage.getItem('cartItems')!)} />
    )
}

export default SmartCart;