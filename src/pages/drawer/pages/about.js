import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default function about({navigation}){
	return(
		<View style={{justifyContent: 'center',flex: 1,alignItems: 'center'}}>
			<Text>About</Text>
		</View>
	);
}