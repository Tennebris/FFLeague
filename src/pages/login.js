import React, {useState,useEffect} from 'react';
import {View, TextInput, Alert, TouchableOpacity, TouchableHighlight, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './styles/login.css';
import api from '../services/api'

export default function login({navigation}){
	Icon.loadFont();

	const [input, setInput] = useState();
	
	const [ispass, setIsPass] = useState(true);
	const [iconpass, setIconPass] = useState('eye');

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const [isLogged, setIsLogged] = useState(false);

	const [loading, setLoading] = useState(false);

	const login = async () => {
		const data = {
			email,
			password
		};
		
		try {
			setLoading(true);
			setIsLogged(false);
			const response = await api.post('/auth/authenticate',data);

			const { user, token } = response.data; 
			
			await AsyncStorage.multiSet([
				['@FFLeague:token', token],
				['@FFLeague:user', JSON.stringify(user)],
			]);
			
			setIsLogged(true);
			setLoading(false);
		}catch(e){
			setLoading(false);
			Alert.alert(`${e.response.data.error}`);
		}
	}
	useEffect(() => {
		if(isLogged){
			navigation.navigate('Drawer');
		}
	},[isLogged]);

	return(
		<LinearGradient 
		style={styles.container}
		colors={['#121212','#121212']}
		>
			{loading && 
				<View style={styles.loading}>
					<ActivityIndicator size="large" color="white"/>
					<Text
						style={{fontSize: 17,color:'white'}}
					>Carrengando...</Text>
				</View>
			}

			{/* View LOGO */}
			<View style={[styles.base,{flex: 1,marginTop:80}]}>
				<Icon name="windows" style={styles.logoMain} size={250} color="#FFF" />
			</View>

			{/* View CARDS INPUTS */}
			<View style={[styles.card,styles.base,{flex: 1,marginVertical: 100}]}>
				<View style={[styles.containerInput,{borderTopLeftRadius: 10,borderTopRightRadius: 10,borderBottomWidth: 2,borderBottomColor: '#ddd'}]}>
					<Icon name="email-outline" size={35} color="#000" />
					<TextInput 
						placeholder='Email'
						placeholderTextColor='#a0a0a0'
						style={styles.input}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						onChangeText={text => setEmail(text)}
						onSubmitEditing={() => {input.focus();}}
					/>
				</View>

				<View style={[styles.containerInput,{borderBottomLeftRadius: 10,borderBottomRightRadius: 10}]}>
					<Icon name="lock" size={35} color="#000" />
					<TextInput 
						placeholder='Senha'
						ref={(campo) => setInput(campo)}
						placeholderTextColor='#a0a0a0'
						secureTextEntry={ispass}
						style={[styles.input,{width: '63.8%'}]}
						onChangeText={text => setPassword(text)}
						returnKeyType={'next'}
					/>
					<TouchableOpacity
						onPress={() => {
							if (ispass) {
								setIsPass(false);
								setIconPass('eye-off');
							}else{
								setIsPass(true);
								setIconPass('eye');
							}
						}}
					>
						<Icon name={iconpass} size={32} color="#000" />
					</TouchableOpacity>
				</View>
				<View style={styles.lateral}>
					<TouchableHighlight
						style={styles.submit}
						onPress={() => {navigation.navigate('Register')}}
					>
						<Text style={styles.submitText}>Register</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.submit}
						onPress={login}
					>
						<Text style={styles.submitText}>Login</Text>
					</TouchableHighlight>

				</View>
			</View>

			{/* View REDES SOCIAIS */}
			<View style={styles.base}>
				<View style={styles.lateral}>
					<View style={styles.linha}></View>
					<Text style={{color: 'rgba(255,255,255,0.4)',fontWeight:'bold'}}>Ou</Text>
					<View style={styles.linha}></View>
				</View>
				<View style={styles.sociais}>
					<Icon name="facebook" style={styles.icons} size={45} color="#35aaff" />
					<Icon name="google" style={styles.icons} size={45} color="#35aaff" />
				</View>
			</View>
		</LinearGradient>
	);
}