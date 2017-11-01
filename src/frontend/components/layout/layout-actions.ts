import { Action } from "frontend/infrastructure";
import { MAKE_ALERT } from "frontend/components/layout/layout-types";

export const makeAlert: (message: string) => Action<string> = (message: string) => {
    return {
        type: MAKE_ALERT,
        payload: message  
    };
};