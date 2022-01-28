import { useContext } from "react";
import { pushNotification_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { userData } from "../utils/customTypes";
import { postTo } from "../utils/utils";
import Login from "./Login"

const SmartLogin = () => {

    const [state, dispatch] = useContext(GlobalContext); 

    const loginclickHandler = async (data: userData) => {

        //console.log(data);

        const sendableData: userData = {
            username: data.username,
            password: data.password,
        }

        const res = await postTo('/user/login', sendableData);

        if(res && res.message != undefined){
           
            dispatch({type: pushNotification_ACT, payload: res.message});
            if(res.status >= 200 && res.status < 300){

            }
        }

        

    }

    return(
        <Login clickHandler={loginclickHandler} />
    )
}

export default SmartLogin;