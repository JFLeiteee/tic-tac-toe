import { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [userChoice, setUserChoice] = useState()
    const [nextPage, setNextPage] = useState(1)

    return(
        <Context.Provider
            value={{
                userChoice,
                setUserChoice,
                nextPage,
                setNextPage
            }}
        >
            {children}
        </Context.Provider>
    )
}