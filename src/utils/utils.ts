import { Action_T, Dispatch_T, State_T } from "../context/context-types";
import { checkLocalToken_ACT, removeLocalToken_ACT } from "../context/global-actions";
import { apiUrl } from "./globals";

//Posts to to given url, also checks for valid token too if invalid token logsout the user
export const postTo = async (
  url: string,
  data: unknown,
  attachToken = false,
  includeStatus = true,
  dispatchFunc?: Dispatch_T
) => {
  try {
    if(attachToken && typeof data == "object"){
      data = {
        ...data,
        token: localStorage.getItem('token'),
      }
    }

    const res = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(res.status && res.status === 401){
      if(dispatchFunc){
        dispatchFunc({type: removeLocalToken_ACT});
      }
      throw new Error("Unauthorized Token, User related data has been erased.");
    }

    const resStatus = res.status;
    const payload = await res.json();
    
    if (includeStatus) {
      payload.status = resStatus;
    }

    return payload;
  } catch (err) {
    console.log("Error@PostTo: " + err);
    return undefined;
  }
};

/*
const asyncDispatch = async (FunctoCall: Function, dispatchFunc: Dispatch_T, dispatchAction: Action_T) => {

}
*/

//DIS is for dispatch Method

export const checkLocalToken_DIS = async (dispatchFunc: Dispatch_T) => {
  const localToken = localStorage.getItem("token");
  const res = await postTo("/user/login", { token: localToken });

  if (res && res.status >= 200 && res.status < 300) {
    if (res.data) {
      dispatchFunc({
        type: checkLocalToken_ACT,
        payload: {
          token: localToken,
          isLoggedIn: true,
          userInfo: res.data,
        },
      });
    }
  }
};
