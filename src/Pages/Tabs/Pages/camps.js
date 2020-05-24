import React, {useState} from 'react';
import {View,Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles/camps.css';

export default function camps({navigation}){
	return(
		<View style={styles.container}>
			<View style={styles.list}>
				<View style={styles.card}>
					<Text style={styles.cardText}>Nome: </Text>

					<Text style={styles.cardText}>Descrição: </Text>

					<Text style={styles.cardText}>Modo: </Text>

					<View style={styles.btn}>
						<Text style={{fontSize: 16,fontWeight: 'bold'}}>Ver mais detalhes</Text>
						<Text>
							<Icon name='arrow-right' color={'black'} size={20}/>
						</Text>
					</View>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardText}>Nome: </Text>

					<Text style={styles.cardText}>Descrição: </Text>

					<Text style={styles.cardText}>Modo: </Text>

					<View style={styles.btn}>
						<Text style={{fontSize: 16,fontWeight: 'bold'}}>Ver mais detalhes</Text>
						<Text>
							<Icon name='arrow-right' color={'black'} size={20}/>
						</Text>
					</View>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardText}>Nome: </Text>

					<Text style={styles.cardText}>Descrição: </Text>

					<Text style={styles.cardText}>Modo: </Text>

					<View style={styles.btn}>
						<Text style={{fontSize: 16,fontWeight: 'bold'}}>Ver mais detalhes</Text>
						<Text>
							<Icon name='arrow-right' color={'black'} size={20}/>
						</Text>
					</View>
				</View>
			</View>		
		</View>
	);
}