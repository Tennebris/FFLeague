import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationActions} from 'react-native';


export default function profile({navigation}){
	return(
		<View style={{justifyContent: 'center',flex: 1,alignItems: 'center'}}>
			<Text>Profile</Text>
		</View>
	);
}