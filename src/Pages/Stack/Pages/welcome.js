import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage, Alert} from 'react-native';
import * as Font from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo1 from '../../../assets/img/033.jpg';
import logo2 from '../../../assets/img/045.jpg';
import logo3 from '../../../assets/img/052.jpg';
import logo4 from '../../../assets/img/055.jpg';
import logo5 from '../../../assets/img/062.jpg';
import logo6 from '../../../assets/img/073.jpg';

import styles from './styles/welcome.css';

export default function welcome({navigation}){

	const [isLoader,setIsLoader] = useState(false);

	useEffect(() => {
		let isCanceled = false;
		async function setroute(){
			try {
				if(!isCanceled)
					await AsyncStorage.setItem('@FFLeague:route','Login');
			} catch (error) {
				console.warn(error);
			}
		}
		setroute();
		return () => {
			isCanceled = true;
		}
	},[])

	useEffect(() => {
		async function load(){
			try{
				await Font.loadAsync({
					'fontGarena': require('../../../assets/fonts/garena.otf'),
				});
				setIsLoader(true);
			}catch(e){
				console.warn(e);
			}
		}
		load();
	},[]);

	return(
		<LinearGradient 
			style={styles.conteiner}
			colors={['#121212','#121212']}
		>
			<View style={[styles.base,{flex:4}]}>
				<Image
					source={logo1}
					style={[styles.logoBase,{top: -120,right: 120}]}
				/>
				<Image
					source={logo2}
					style={[styles.logoBase,{left: 80,top: -80}]}
				/>
				<Image
					source={logo3}
					style={[styles.logoBase,{bottom: 100,right: 55,width: 180,height: 180}]}
				/>
				<Image
					source={logo5}
					style={[styles.logoBase,{width: 230,height: 230,top: 150,right: -60}]}
				/>
				<Image
					source={logo4}
					style={[styles.logoBase,{right: 100,bottom: 280}]}
				/>
				<Image
					source={logo6}
					style={[styles.logoBase,{left: -50,bottom: 100,width: 500,height: 500}]}
				/>
			</View>
			<View style={[styles.base]}>
				<View style={[styles.base,{marginTop: 50,marginVertical: 100}]}>
					{isLoader ? (<Text style={[styles.title,{fontFamily: 'fontGarena'}]}>FF   League</Text>) : null}
					<Text style={styles.subTitle}>Faça campeonatos e converse com seus colegas de</Text>
					<Text style={styles.subTitle}>guilda com o app</Text>
					<Text style={{fontSize: 20,fontWeight:'bold',marginVertical: 20,color: '#ddd'}}>FF league</Text>
				</View>
			</View>
			<View style={[styles.base,styles.horizontal,{flex: 0,marginVertical: 20}]}>
				<TouchableOpacity 
					style={styles.btn}
					onPress={() =>{
						navigation.navigate('Login');
					}}
				>
					<Text style={{fontSize: 19,fontWeight:'bold',color: '#fff'}}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>{
						navigation.navigate('Register');
					}}
				>
					<Text style={{fontSize: 19,fontWeight:'bold',color: '#fff'}}>Register</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
}
