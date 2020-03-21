import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './styles/register.css';

import background from '../../assets/img/062.jpg';

Icon.loadFont();

export default function login({navigation}){
	const [input1, setInput1] = useState();
	const [input2, setInput2] = useState();
	
	const [ispass, setIsPass] = useState(true);
	const [iconpass, setIconPass] = useState('eye');


	return(
		<LinearGradient 
			style={styles.container}
			colors={['#35aaff','#000']}
		>
			{/* View LOGO */}
			<View style={[styles.base,{flex: 1}]}>
				<Icon name="social-facebook" style={styles.logoMain} size={250} color="#FFF" />
			</View>
			{/* View CARDS INPUTS */}
			<View style={[styles.card,styles.base,{flex: 1,marginVertical: 180}]}>
				
				<View style={[styles.containerInput,{borderTopLeftRadius: 20,borderTopRightRadius: 20,borderBottomWidth: 2,borderBottomColor: '#ddd'}]}>
					<Icon name="email-outline" size={35} color="#000" />
					<TextInput 
						placeholder='Email'
						placeholderTextColor='#a0a0a0'
						style={styles.input}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						onSubmitEditing={() => {input1.focus();}}
					/>
				</View>

				<View style={[styles.containerInput,{borderBottomWidth: 2,borderBottomColor: '#ddd'}]}>
					<Icon name="account" size={35} color="#000" />
					<TextInput 
						placeholder='ID User'
						ref={(campo) => setInput1(campo)}
						placeholderTextColor='#a0a0a0'
						style={styles.input}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						onSubmitEditing={() => {input2.focus();}}
					/>
				</View>
				
				<View style={[styles.containerInput,{borderBottomLeftRadius: 20,borderBottomRightRadius: 20}]}>
					<Icon name="lock" size={35} color="#000" />
					<TextInput 
						placeholder='Senha'
						ref={(campo) => setInput2(campo)}
						placeholderTextColor='#a0a0a0'
						secureTextEntry={ispass}
						style={[styles.input,{width: '63.8%'}]}
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

				<TouchableHighlight
					style={styles.submit}
				>
					<Text style={styles.submitText}>Register</Text>
				</TouchableHighlight>
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