import { State_T, Action_T } from "./context-types";


const globalReducer = (state: State_T, action: Action_T) => {
    switch(action.type){
        case 'add-to-cart':
            if(action.payload){
                console.log(action.payload);
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }else{
                return state;
            };
        case 'remove-from-cart':
            if(action.payload){
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item, i) => {
                        return item.id != action.payload.id
                    })
                };
            }else{
                return state;
            };

        case 'save-cart':
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems));
            return state;
        case 'refresh-cart':
            return {
                ...state,
                cartItems: localStorage.getItem(JSON.parse('cart-items'))
            }

    }
};

export default globalReducer;