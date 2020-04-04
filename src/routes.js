import React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Dimensions, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// pages switch navigator
import WelcomeScreen from "./pages/welcome";
import LoginScreen from "./pages/login";
import RegisterScreen from "./pages/register";

// Pages Drawer navigator
import {HomeScreen,ProfileScreen,AboutScreen} from './pages/drawer/pages';

//config Drawer navigator
import SideBar from './pages/drawer/config/sideBar';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

function DrawerScreen(){
	return(
		<AppDrawer.Navigator drawerContent={SideBar} drawerStyle={{
			width: '65%'
		}}>
			<AppDrawer.Screen 
				name="Home" 
				component={HomeScreen}
			/>
			<AppDrawer.Screen 
				name="Profile" 
				component={ProfileScreen}
			/>
			<AppDrawer.Screen 
				name="About" 
				component={AboutScreen}
			/>
		</AppDrawer.Navigator>
	);
}

export default function Routes({route}){
	return(
		<NavigationContainer>

			<AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route ? route : 'Welcome'} >
				<AppStack.Screen name="Welcome" component={WelcomeScreen}/>
				<AppStack.Screen name="Login" component={LoginScreen} />
				<AppStack.Screen name="Register" component={RegisterScreen} />
				<AppStack.Screen name="Drawer" component={DrawerScreen} />
			</AppStack.Navigator>

		</NavigationContainer>
	);
}