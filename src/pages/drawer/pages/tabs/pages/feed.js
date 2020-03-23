import React, {useState} from 'react';
import {View,FlatList} from 'react-native';

export default function feed({navigation}){
	return(
		<View style={{justifyContent: 'center',flex: 1,alignItems: 'center'}}>
			<FlatList/>
		</View>
	);
}