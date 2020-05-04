import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text} from 'react-native';

// import { Container } from './styles';

export default class src extends Component {
	render() {
		return (
			<View style={[styles.base,{opacity: this.props.opacity}]}>
				<Text style={{color: '#fff'}}>{this.props.state}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    base: {
        position: 'absolute',
        backgroundColor: 'rgba(50,50,50,0.2)',
        padding: 10,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        top: "87.7%",
        left: Dimensions.get('window').width/2.6,
        borderRadius: 5
    }
})
