import React, {useState} from 'react';
import {View,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles/search.css';

export default function solicit({navigation}){
	return(
		<View style={styles.container}>
			<View style={{width:'90%',justifyContent: 'center',alignItems: 'center' ,flexDirection: 'row',backgroundColor: '#ddd',paddingHorizontal: 10, borderRadius: 10}}>
				<Icon name='search-web' size={25}/>
				<TextInput style={styles.search} placeHolder={'temp'}/>
				<Icon name='window-close' size={25}/>
			</View>


		</View>
	);
}