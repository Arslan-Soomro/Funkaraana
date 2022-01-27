import { useContext, useEffect } from "react";
import { pushNotification_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { userData } from "../utils/customTypes";
import { postTo } from "../utils/utils";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";




const SmartSignup = () => {

    const [state, dispatch] = useContext(GlobalContext);

    let navigate = useNavigate();

    const clickHandler = async (data: userData) => {
        const res = await postTo('/user/signup', data);

        if(res && res.message){
            dispatch({type: pushNotification_ACT, payload: res.message});
            if(res.status >= 200 && res.status < 300){
                navigate('/login');
            }
        }
    }

    return(<Signup signClickHandler={clickHandler} />)
}

export default SmartSignup;