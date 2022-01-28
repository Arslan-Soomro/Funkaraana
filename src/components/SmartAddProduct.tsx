import { useContext } from "react"
import { pushNotification_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { postTo } from "../utils/utils"
import AddProduct from "./AddProduct"

const SmartAddProduct = () => {

    const [state, dispatch] = useContext(GlobalContext);

    const clickHandler = async (prodData: {name: string, price: number, image: string, description: string, token?: string | null}) => {
        
        const res = await postTo('/product', prodData, true, true, dispatch);

        if(res && res.message){
            dispatch({type: pushNotification_ACT, payload: res.message});
        }
        
    }

    return(
        <AddProduct addClickHandler={clickHandler} />
    )
}

export default SmartAddProduct;