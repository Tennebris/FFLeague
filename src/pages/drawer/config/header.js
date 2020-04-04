import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, AsyncStorage, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CommonActions } from '@react-navigation/native';

export default function page ({navigation,isprofile,screen,ishome}) {
	const [isLoaded, setIsLoaded] = useState(true);

	const navigateToLogin = (route) => {
		const action = CommonActions.navigate({
			name: route
		});
		navigation.dispatch(action);
	}

	async function limpar(){
		try{
			setIsLoaded(false);

			await AsyncStorage.removeItem("@FFLeague:token");
			await AsyncStorage.removeItem("@FFLeague:user");
			navigateToLogin('Login');
			
			setIsLoaded(true);
		}catch(e){
			console.warn(e);
		}
	}

	function search(){
		console.warn('hahaahah');
	}

	return(
		<View style={{flex: 1, backgroundColor: 'transparent'}}>
			<View style={[styles.lateral,{backgroundColor: 'transparent',borderBottomWidth: 1,paddingBottom: 20, borderBottomColor: '#ddd'}]}>
				<TouchableOpacity
					onPress={navigation.openDrawer}
				>
					<Icon name='bars' size={25} style={{marginTop: 40,marginHorizontal: 30}} color='#35aa' />	
				</TouchableOpacity>
				{isprofile && 
					<TouchableOpacity
						onPress={limpar}
					>
						<Icon name='sign-out-alt' size={25} style={{marginTop: 40,marginHorizontal: 30}} color='#35aa'/>	
					</TouchableOpacity>}
				{ishome &&
					<TouchableOpacity
						onPress={search}
					>
						<Icon name='search' size={25} style={{marginTop: 40,marginHorizontal: 30}} color='#35aa'/>	
					</TouchableOpacity>}
				
			</View>
			<View style={{flex: 1,zIndex: 2,backgroundColor: 'transparent'}}>
				{
					isprofile ? 
					(isLoaded ?
						screen :
						<View style={{flex: 1,justifyContent: 'center'}}>
							<ActivityIndicator size='large' color='#000' />
						</View>
					):
					screen
				}
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	lateral:{
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
  });