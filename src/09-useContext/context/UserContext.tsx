import { createContext } from "react";

export interface User {id: number, name: string, email: string}

export interface ContextProps {
    user?: User,
    setUser?: React.Dispatch<React.SetStateAction<User | undefined>>
}

export const UserContext = createContext<ContextProps>({});