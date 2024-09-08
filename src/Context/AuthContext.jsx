import { createContext, useEffect, useState } from "react"


export const authcontext = createContext();





const AuthContext = ({ children }) => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        if(localStorage.getItem("tkn") !== null){
           
            setToken(localStorage.getItem("tkn"));
        }
    })
    return (

        <authcontext.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </authcontext.Provider>

    );
};

export default AuthContext
