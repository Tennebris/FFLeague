import React, {useContext} from 'react';
import {View, Text, AsyncStorage, TouchableHighlight, FlatList, SafeAreaView} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AuthContext from '../../../Contexts/auth';

import styles from './styles/profile.css';

export default function profile({navigation,header}){

	const {changeContext} = useContext(AuthContext);

	const data = []

	const navigateTo = (route) => {
		const action = CommonActions.navigate({
			name: route
		});
		navigation.dispatch(action);
	}

	async function logout(){
		try{
			// setIsLoaded(false);

			await AsyncStorage.removeItem("@FFCL:user");
			changeContext();
			// setIsLoaded(true);
		}catch(e){
			console.warn(e);
		}
	}

	return(
		<View style={styles.container}>

			<View style={{paddingHorizontal: 20}}>
				<View style={styles.header}>
					<Text style={{fontSize:20,color:"#000",fontWeight: 'bold'}}>id:480041746</Text>
					<Icon1 name='qrcode' size={30}/>
				</View>
				<View style={styles.main}>
					<View style={styles.avatar}></View>

					<Text style={styles.userName}>DK GRINGO</Text>

					<View style={styles.viewFollow}>
						<View style={{alignItems: 'center'}}>
							<Text style={{fontWeight: 'bold', fontSize: 16}}>0</Text><Text>seguindo</Text>
						</View>
						<View style={{alignItems: 'center'}}>
							<Text style={{fontWeight: 'bold', fontSize: 16}}>0</Text><Text>seguidores</Text>
						</View>
						<View style={{alignItems: 'center'}}>
							<Text style={{fontWeight: 'bold', fontSize: 16}}>0</Text><Text>curtidas</Text>
						</View>
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<TouchableHighlight style={[styles.btnEdit,{width: '80%'}]}>
						<Text style={{fontWeight: 'bold'}}> <Icon name='pen' /> Editar Perfil</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btnEdit,{width: '16.5%'}]}
						onPress={logout}
					>
						<Text style={{fontWeight: 'bold'}}><Icon name='sign-out-alt' /> Sair</Text>
					</TouchableHighlight>
				</View>
			</View>
			<>

				{data.length > 0 ? 
				(<FlatList 
					data={data}
					style={{marginTop:20, flexbasis: 0}}
					horizontal={false}
					contentContainerStyle={{flexGrow: 1}}
					ListFooterComponent={() => (
						<View style={{marginBottom: 400}}></View>
					)}
					renderItem={({item}) => (
						<Icon name='user' size={225}/>
					)}
					numColumns={3}
					
				/>)
				:
				(<View style={styles.empty}>
					<Text style={{color :'grey',fontWeight: 'bold', fontSize: 20}}>Nenhuma postagem feita!</Text>
				</View>)}
			</>
		</View>
	);
}