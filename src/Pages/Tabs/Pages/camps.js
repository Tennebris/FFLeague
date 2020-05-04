import React, {useState} from 'react';
import {View,Text} from 'react-native';

import styles from './styles/camps.css';

export default function camps({navigation}){
	return(
		<View style={styles.container}>
			<View style={styles.card}>
				<Text>Nome: </Text>

				<Text>Descrição: </Text>

				<Text>Modo: </Text>
			</View>
			<View style={styles.card}>
				<Text>Nome: </Text>

				<Text>Descrição: </Text>

				<Text>Modo: </Text>
			</View>
			<View style={styles.card}>
				<Text>Nome: </Text>

				<Text>Descrição: </Text>

				<Text>Modo: </Text>
			</View>
			<View style={styles.card}>
				<Text>Nome: </Text>

				<Text>Descrição: </Text>

				<Text>Modo: </Text>
			</View>			
		</View>
	);
}