import { createContext } from "react";
import type { User } from "../types";

interface AuthContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
    setIsAuthorized: (arg: boolean) => void;
    isAuthorized: boolean;
    isAdmin?: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);



