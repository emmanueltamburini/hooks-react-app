import { useMemo, useState } from 'react';
import { User, UserContext } from "./UserContext";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const providerValue = useMemo(
        () => ({
            user,
            setUser
        }),
        [user],
    );

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}
