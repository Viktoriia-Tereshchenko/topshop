export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}

export const roles = {
    CUSTOMER: "customer",
    ADMIN: "admin"
} as const;