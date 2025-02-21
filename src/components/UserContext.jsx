import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const ContactListContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [contacts, setContacts] = useState([])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <ContactListContext.Provider value={[contacts, setContacts]}>
                {children}
            </ContactListContext.Provider>
        </UserContext.Provider>
    );
};

