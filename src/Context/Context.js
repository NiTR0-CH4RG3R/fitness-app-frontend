import { useContext } from "react";

export function useXContext(context) {
    const contextObj = useContext(context);
    if (contextObj === undefined) {
        throw new Error(`use${context.displayName} must be used within a ${context.displayName}Provider`);
    }
    return contextObj;
}