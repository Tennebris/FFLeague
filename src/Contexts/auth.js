import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';

import {AsyncStorage, Alert} from 'react-native';

const AuthContext = createContext({logged: false});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(!!user);

    const login = async (email, password) => {
		const data = {
			email,
			password
		};
		
		try {
			const response = await api.post('/authenticate',data);

            setUser(response.data);
            setIsLogged(!!user);
			
			await AsyncStorage.setItem('@FFCL:user', JSON.stringify(user));
			
		}catch(e){
			Alert.alert(`${e.response.data.error}`);
		}
	}

    const changeContext = () => {
        setIsLogged(!isLogged);
    }

    useEffect(() => {
        async function getUser(){
            const AsyncUser = await AsyncStorage.getItem('@FFCL:user');
            setUser(AsyncUser)
        }
        getUser();
    },[])

    return(
        <AuthContext.Provider value={{logged: isLogged, login, changeContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;