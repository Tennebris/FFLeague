import React from 'react';
import {createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';

// Pages
import {HomeScreen,ProfileScreen,AboutScreen} from './pages';

//config Drawer navigator
import SideBar from './config/sideBar';

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions:{
				title: 'Inicio'
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions:{
				title: 'Perfil'
			}
		},
		About: {
			screen: AboutScreen,
			navigationOptions:{
				title: 'Sobre'
			}
		},
	},
	{
		contentComponent: (props) => <SideBar {...props}></SideBar>,
		drawerWidth: Dimensions.get('window').width * 0.65,
	}
);

export default DrawerNavigator;