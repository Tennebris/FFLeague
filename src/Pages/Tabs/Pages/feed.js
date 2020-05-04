import React, { useContext } from 'react';
import {View,FlatList,Text,Image,TouchableOpacity,TouchableHighlight,Dimensions} from 'react-native';
import api from '../../../services/api';
import AuthContext from '../../../Contexts/auth';

import styles from './styles/feed.css';

export default function feed({navigation}){
	const {name} = useContext(AuthContext);

	return(
		<View style={styles.container}>
			<View style={styles.post}>
				<Text>{name}</Text>
				<Image source={require('../../../assets/img/073.jpg')} style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width}} />
			</View>
		</View>
	);
}