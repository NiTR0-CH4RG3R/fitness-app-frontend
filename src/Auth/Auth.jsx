import { createContext, useState } from "react";
import { useXContext } from "../Context/Context";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useXContext(AuthContext);
}

export default AuthContext;