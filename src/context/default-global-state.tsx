import { State_T } from "./context-types";

const defaultGlobalState: State_T = {
    cartItems: [],
    notifications: [],
    notificationAdded: false,
    token: null,
    isLoggedIn: false,
    userInfo: null
}

export default defaultGlobalState;

