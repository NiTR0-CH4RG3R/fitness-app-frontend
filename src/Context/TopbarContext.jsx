import { createContext, useState } from "react";
import { useXContext } from "./Context";

const TopbarContext = createContext({});

export function TopbarContextProvider({ children }) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const topbarContextValue = {
        title, setTitle,
        subtitle, setSubtitle
    };

    return (
        <TopbarContext.Provider value={topbarContextValue}>
            {children}
        </TopbarContext.Provider>
    );
}

export function useTopbarContext() {
    return useXContext(TopbarContext);
}

export default TopbarContext;