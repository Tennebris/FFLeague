import React, {useState} from 'react';
import {View,Text,FlatList,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/menssager.css';

import Header from './config/headerMessage';

export default function menssager({navigation}){
	return(
		<View style={styles.container}>
			<FlatList 
				data={[1,2,3,4,5,6,7,8,9,0,11,12,13,14,1,51,65,17]}
				style={{width: '100%',backgroundColor: '#fff'}}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<Header/>
				)}
				renderItem={() => (
					<TouchableHighlight style={styles.area}>
						<View style={styles.base}>
							<View style={styles.base}>
								<View style={styles.avatar}>
									<Icon name="use" size={60}/>
								</View>

								<View style={styles.body}>
									<Text style={styles.textUser}>Alysson</Text>
									<Text style={styles.msgPreview}>Oie.. Tudo  bem?</Text>
								</View>
							</View>

							<View style={styles.final}>
								<Text>13:20</Text>
								<View style={styles.icon}>
									<Text>4</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
				)}
			/>
		</View>
	);
}