import React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// pages switch navigator
import WelcomeScreen from "./pages/welcome";
import LoginScreen from "./pages/login";
import RegisterScreen from "./pages/register";

import TabsScreen from "./pages/tabs/index";


const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();



export default function Routes({route}){
	return(
		<NavigationContainer>

			<AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route ? route : 'Welcome'} >
				<AppStack.Screen name="Welcome" component={WelcomeScreen}/>
				<AppStack.Screen name="Login" component={LoginScreen} />
				<AppStack.Screen name="Register" component={RegisterScreen} />
				<AppStack.Screen name="Tabs" component={TabsScreen} />
			</AppStack.Navigator>

		</NavigationContainer>
	);
}