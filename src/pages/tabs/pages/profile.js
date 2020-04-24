import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import styles from './styles/profile.css';

export default function profile({navigation,header}){
	const navigateTo = (route) => {
		const action = CommonActions.navigate({
			name: route
		});
		navigation.dispatch(action);
	}

	async function logout(){
		try{
			setIsLoaded(false);

			await AsyncStorage.removeItem("@FFLeague:user");
			navigateTo('Login');
			
			setIsLoaded(true);
		}catch(e){
			console.warn(e);
		}
	}

	return(
		<View style={styles.container}></View>
	);
}