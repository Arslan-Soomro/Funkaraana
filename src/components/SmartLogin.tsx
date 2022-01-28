import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkLocalToken_ACT, pushNotification_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { userData } from "../utils/customTypes";
import { checkLocalToken_DIS, postTo } from "../utils/utils";
import Login from "./Login"

const SmartLogin = () => {

    const [state, dispatch] = useContext(GlobalContext); 
    const navigate = useNavigate();


    const loginclickHandler = async (data: userData) => {

        const sendableData: userData = {
            username: data.username,
            password: data.password,
        }

        const res = await postTo('/user/login', sendableData);

        if(res && res.message != undefined){
           
            dispatch({type: pushNotification_ACT, payload: res.message});
            
            if(res.status >= 200 && res.status < 300){
                if(res.data) localStorage.setItem('token', res.data.token);
                checkLocalToken_DIS(dispatch);
                navigate('/');
            }
        }

        

    }

    return(
        <Login clickHandler={loginclickHandler} />
    )
}

export default SmartLogin;