import React, {useEffect, useState} from 'react';
import {View,FlatList,Text,Image,TouchableOpacity,TouchableHighlight,Dimensions} from 'react-native';
import api from '../../../services/api';

import styles from './styles/feed.css';

export default function feed({navigation}){
	return(
		<View style={styles.container}></View>
	);
}