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
				title: 'Inicio',
				drawerIcon: ({tintColor}) => <Icon name='home' size={16} />
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions:{
				title: 'Perfil',
				drawerIcon: ({tintColor}) => <Icon name='user' size={16} />
			}
		},
		About: {
			screen: AboutScreen,
			navigationOptions:{
				title: 'Suporte',
				drawerIcon: ({tintColor}) => <Icon name='exclamation-circle' size={16} />
			}
		},
	},
	{
		contentComponent: (props) => <SideBar {...props} />,
		drawerWidth: Dimensions.get('window').width * 0.75,
	}
);

export default DrawerNavigator;