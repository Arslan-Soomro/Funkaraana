import { userData } from "../utils/customTypes";
import { postTo } from "../utils/utils";
import { State_T, Action_T } from "./context-types";
import { addToCart_ACT, checkLocalToken_ACT, pushNotification_ACT, refreshCart_ACT, removeFromCart_ACT, removeLocalToken_ACT, removeNotification_ACT, saveCart_ACT, toggleNotificationAdded_ACT } from "./global-actions";


//FIXME Adding and removing products doesn't happen by the diffrence of 1

//FIXME notifications doesn't work, maybe because of async method
const globalReducer = (state: State_T, action: Action_T) => {
    switch(action.type){
        case addToCart_ACT:
            if(action.payload){
                
                //Get Product if already Exists
                const toFind = state.cartItems.filter((item) => item.id == action.payload.id)[0];
                //Get Products without the product we are searching for  
                let finalItems = state.cartItems.filter((item) => item.id != action.payload.id);

                //Check if qty property exists
                if(toFind != undefined){
                    if(toFind.qty != undefined){
                        toFind.qty = toFind.qty + 1;
                    }else{
                        toFind.qty = 2;
                    }

                    finalItems = [...finalItems, toFind];
                }else{
                    finalItems = [...finalItems, action.payload];
                };

                localStorage.setItem("cartItems", JSON.stringify(finalItems));

                return {
                    ...state,
                    cartItems: finalItems
                }
            }else{
                return state;
            };
        case removeFromCart_ACT:
            if(action.payload){

                const finalItems = state.cartItems.filter((item, i) => {
                    if(item.id == action.payload.id){
                        if(item.qty != undefined && item.qty > 1){
                            item.qty = item.qty - 1;
                            return true;
                        }
                    }else{
                        return item.id != action.payload.id;
                    }
                });
                
                localStorage.setItem('cartItems', JSON.stringify(finalItems));

                console.log(finalItems);

                return {
                    ...state,
                    cartItems: finalItems
                };
            }else{
                return state;
            };
        case saveCart_ACT:
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems));
            return state;
        case refreshCart_ACT:
            return {
                ...state,
                cartItems: localStorage.getItem(JSON.parse('cartItems'))
            }
        
        case pushNotification_ACT:
            //We make sure that we receive a string
            console.log("Payload: " + action.payload);
            if(action.payload && typeof action.payload === "string"){
                const arrLength = state.notifications.length;
                const newNotificationState = {
                    ...state,
                    notifications: [...state.notifications, action.payload],
                    notificationAdded: true,
                }

                //Check if previous and this notification is same
                if(arrLength > 0){
                    if(state.notifications[arrLength - 1] != action.payload){
                        return newNotificationState;
                    }else{
                        return state;
                    }
                }else{
                    return newNotificationState;
                }
            }else{
                return state;
            }
        
        case removeNotification_ACT: 
            //If Array has at least one element
            if(state.notifications.length > 0){

                //Remove First Element ana map rest to newArr
                const [, ...newArr] = state.notifications;

                //Update State
                return {
                    ...state,
                    notifications: newArr,
                }
            }else{
                return state;
            }
        case toggleNotificationAdded_ACT:
            return {
                ...state,
                notificationAdded: state.notificationAdded ? false : true,
            }
        case checkLocalToken_ACT:
            //This case expects that the payload would include token, isLoggedIn, userInfo

            if(action.payload && action.payload.token && action.payload.isLoggedIn && action.payload.userInfo){
                return {
                    ...state,
                    token: action.payload.token,
                    isLoggedIn: action.payload.isLoggedIn,
                    userInfo: action.payload.userInfo
                }
            }else{
                return {
                    ...state,
                    token: null,
                    isLoggedIn: false,
                    userInfo: null,
                  }
            }
        case removeLocalToken_ACT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isLoggedIn: false,
                userInfo: null
            }
            
        default:
            return state;
    }
};

export default globalReducer;