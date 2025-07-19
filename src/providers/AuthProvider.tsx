import { useEffect, useState, type ReactNode } from "react";
import { roles, type User } from "../types";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(
        Boolean(localStorage.getItem("isAuthorized"))
    );

    async function fetchUser(access_token: string) {
        const res = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: {Authorization: `Bearer ${access_token}`},
        });
        const obj = await res.json();
        setUser(obj);
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthorized");
        localStorage.removeItem("isAdmin");
        setUser(undefined);
        setIsAuthorized(false);
    };

    useEffect(()=>{
        if(isAuthorized) {
            fetchUser(localStorage.getItem("accessToken") || "");
        } else {
            setUser(undefined);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("isAuthorized");
            localStorage.removeItem("isAdmin");
        }
    },[isAuthorized]);

    useEffect(() => {
        if(user) {
            localStorage.setItem("isAdmin", user.role === roles.ADMIN ? "1" : "");
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{user, setUser, isAuthorized, setIsAuthorized, logout}}>
        {children}
        </AuthContext.Provider>
    )
}