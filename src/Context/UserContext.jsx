import { createContext, useState } from "react";
import { useXContext } from "./Context";

const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useXContext(UserContext);
}

export default UserContext;