import { FC, useState, PropsWithChildren } from "react"
import { Context, contextDefaultValues } from "./Context"

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, updateIsLoggedIn] = useState<Boolean>(contextDefaultValues.isLoggedIn);

    const setIsLoggedIn = (newBool: Boolean) => updateIsLoggedIn(newBool)


    return (
        <Context.Provider value={{
            isLoggedIn,
            updateIsLoggedIn
        }}>
            {children}
        </Context.Provider>


    )
}

export default ContextProvider;