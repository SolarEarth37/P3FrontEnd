import { createContext } from "react";

interface ContextState {
    isLoggedIn: Boolean,
    updateIsLoggedIn: (newBool: Boolean) => void,
}

export const contextDefaultValues = {
    isLoggedIn: false,
    updateIsLoggedIn: () => { },
}


export const Context = createContext<ContextState>(contextDefaultValues);