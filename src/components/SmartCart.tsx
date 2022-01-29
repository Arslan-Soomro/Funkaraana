import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pushNotification_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import Cart from "./Cart";

const SmartCart = () => {

    const [state, dispatch] = useContext(GlobalContext);
    const navigate = useNavigate();

    const payClickHandler = () => {
        if(!state.isLoggedIn){
            dispatch({type:pushNotification_ACT, payload: "You Must login before you checkout"});
            navigate('/login');
        }else{
            dispatch({type:pushNotification_ACT, payload: "Order placed succesfully"});
            localStorage.removeItem('cartItems');
            navigate('/');
        }   
    }

    return(
        <Cart prods={JSON.parse(localStorage.getItem('cartItems')!)} paymentClickHandler={payClickHandler} />
    )
}

export default SmartCart;