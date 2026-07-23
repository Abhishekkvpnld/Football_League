import { createContext, useContext } from "react";


const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {

    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role:"admin",
    };

    return (
        <UserContext.Provider value={{ user }} >
            {children}
        </UserContext.Provider >
    );
};
