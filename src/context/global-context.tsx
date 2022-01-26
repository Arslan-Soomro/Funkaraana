import { createContext } from "react";
import { Action_T, State_T } from "./context-types";
import defaultGlobalState from "./default-global-state";

const GlobalContext = createContext<{state: State_T, action: Action_T}>({state: defaultGlobalState, action: {type: "Default"}});

export default GlobalContext;