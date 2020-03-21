import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class page extends React.Component {
	render(){
		return(
			<View style={{flex: 1}}>
				<TouchableOpacity
					onPress={this.props.navigation.openDrawer}
				>
					<Icon name='bars' size={30} style={{marginTop: 40,marginHorizontal: 30}}/>	
				</TouchableOpacity>
				<View style={{flex: 1}}>
					{this.props.screen}
				</View>
			</View>
		)
	}
}