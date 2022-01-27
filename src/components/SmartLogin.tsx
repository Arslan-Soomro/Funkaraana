import { userData } from "../utils/customTypes";
import { postTo } from "../utils/utils";
import Login from "./Login"

const SmartLogin = () => {

    const loginclickHandler = async (data: userData) => {

        //console.log(data);

        const sendableData: userData = {
            username: data.username,
            password: data.password,
        }

        const res = await postTo('/user/login', sendableData);
        
        console.log(res);

    }

    return(
        <Login clickHandler={loginclickHandler} />
    )
}

export default SmartLogin;