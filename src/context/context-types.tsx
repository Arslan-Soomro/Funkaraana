import defaultGlobalState from "./default-global-state";

export type Action_T = { type: string, payload?: any};
export type Dispatch_T = (action: Action_T) => void;
export type State_T = typeof defaultGlobalState;