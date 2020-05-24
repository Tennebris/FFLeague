import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';

import {AsyncStorage, Alert} from 'react-native';

const AuthContext = createContext({logged: false});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
		const data = {
			email,
			password
		};
		
		try {
			const response = await api.post('/authenticate',data);

            setUser(response.data);
			
			await AsyncStorage.setItem('@FFCL:user', JSON.stringify(user));
		}catch(e){ 
			Alert.alert(`${e.response.data.error}`);
		}
	}

    const changeContext = () => {
        setUser(null);
    }

    useEffect(() => {
        async function getUser(){
            const AsyncUser = await AsyncStorage.getItem('@FFCL:user');

            setUser(AsyncUser);
        }
        getUser();
    },[])

    return(
        <AuthContext.Provider value={{logged: !!user, login, changeContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;