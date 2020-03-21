import React from 'react';
import {View, Text, ScrollView, StyleSheet,ImageBackground,Image } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export default SliderBar = (props) => (
	<ScrollView>
  		<ImageBackground
  			source={require('./../../../../assets/img/073.jpg')}
  			style={{width: undefined,height: 200}}
  		>
  			<Text>hkdwqkhdkqwh</Text>
  		</ImageBackground>
  		<View>
  			<DrawerItems {...props}/>
  		</View>
  	</ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
