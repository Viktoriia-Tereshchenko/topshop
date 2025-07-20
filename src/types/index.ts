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
  ADMIN: "admin",
} as const;

export interface ProductForCard {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}
