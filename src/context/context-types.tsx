import { ProductDataType } from "../utils/customTypes";

export type Action_T = { type: string, payload?: any};
export type Dispatch_T = (action: Action_T) => void;
export type State_T = {
    cartItems: ProductDataType[]; //Ids of products
    notifications: string[];
    notificationAdded: boolean;
};