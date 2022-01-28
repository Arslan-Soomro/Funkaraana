import { useContext } from "react"
import { pushNotification_ACT, removeLocalToken_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { apiUrl } from "../utils/globals";
import { postTo } from "../utils/utils"
import AddProduct from "./AddProduct"

const SmartAddProduct = () => {

    const [state, dispatch] = useContext(GlobalContext);

    const clickHandler = async (prodData: {name: string, price: number, image: File, description: string, token?: string | null}) => {

        const localToken = localStorage.getItem('token');
        const formData = new FormData();

        if(localToken){
            formData.append('name', prodData.name);
            formData.append('price', prodData.price.toString());
            formData.append('image', prodData.image);
            formData.append('description', prodData.description);
            formData.append('token', localToken);

            const res = await fetch(`${apiUrl}/product`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept' : 'multipart/form-data'
                },
            });

            if(res.status === 401){
                dispatch({type: removeLocalToken_ACT});
            };

            const resData = await res.json();

            dispatch({type: pushNotification_ACT, payload: resData.message});

        }else{
            dispatch({type: removeLocalToken_ACT});
        }

        //const res = await postTo('/product', prodData, true, true, dispatch);
        /*
        if(res && res.message){
            dispatch({type: pushNotification_ACT, payload: res.message});
        }*/
        
    }

    return(
        <AddProduct addClickHandler={clickHandler} />
    )
}

export default SmartAddProduct;