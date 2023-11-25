import { createContext, useContext, useState } from "react";

const ShortListedInstitutionContext = createContext();

export const ShortListedInstitutionProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const value={ data, setData };
    return (
        <ShortListedInstitutionContext.Provider value={value}>
            {children}
        </ShortListedInstitutionContext.Provider>
    );
};

export const useShortlistedInstitutionContext = () => useContext(ShortListedInstitutionContext)

