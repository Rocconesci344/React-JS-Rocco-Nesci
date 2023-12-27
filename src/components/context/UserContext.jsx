import { createContext, useState } from "react";



export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        User: 'User',
        token: 'abc123'
    })

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}