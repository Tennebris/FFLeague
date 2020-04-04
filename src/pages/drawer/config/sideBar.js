import React from 'react';
import {View, Text, ScrollView,ImageBackground } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

export default SliderBar = (props) => {
	return(
		<ScrollView>
			<ImageBackground
				source={require('../../../assets/img/073.jpg')}
				style={{width: undefined,height: 200}}
				blurRadius={5}
			>	
			</ImageBackground>
			
			<View>
				<DrawerItemList {...props}/>
			</View>

		</ScrollView>
	);
};
