import { createContext } from "react";
import { Action_T, Dispatch_T, State_T } from "./context-types";
import defaultGlobalState from "./default-global-state";

const GlobalContext = createContext<[State_T, Dispatch_T]>([defaultGlobalState, () => {}]);

export default GlobalContext;