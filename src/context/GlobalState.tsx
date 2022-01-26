import React, { FC, useReducer } from "react";
import { Dispatch_T, State_T } from "./context-types";
import defaultGlobalState from "./default-global-state";
import GlobalContext from "./global-context";
import globalReducer from "./global-reducer";

const GlobalState: FC = ({ children }) => {

    const [state, dispatch] = useReducer<any>(globalReducer, defaultGlobalState);

    return(
        <GlobalContext.Provider value={[state as State_T, dispatch as Dispatch_T]}>{children}</GlobalContext.Provider>
    )

};

export default GlobalState;