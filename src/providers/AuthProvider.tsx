import { useEffect, useState, type ReactNode } from "react";
import { roles, type User } from "../types";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(
        Boolean(localStorage.getItem("isAuthorized"))
    );

    async function fetchUser(access_token: string) {
        try {
            console.log('Fetching user profile with token:', access_token);
            const res = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {Authorization: `Bearer ${access_token}`},
            });
            
            console.log('Profile response status:', res.status);
            
            if (res.ok) {
                const obj = await res.json();
                console.log('User profile data:', obj);
                setUser(obj);
            } else {
                console.error('Failed to fetch user profile');
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthorized");
        localStorage.removeItem("isAdmin");
        setUser(undefined);
        setIsAuthorized(false);
    };

    useEffect(()=>{
        console.log('AuthProvider: isAuthorized changed to:', isAuthorized);
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