import { createContext, useState } from "react";
import { useXContext } from "./Context";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [roles, setRoles] = useState([]);

    const userContextValue = {
        id, setId,
        name, setName,
        email, setEmail,
        token, setToken,
        roles, setRoles
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useXContext(UserContext);
}

export default UserContext;