import React, { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {

    }
    const user = {
        name: 'ok'
    }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;