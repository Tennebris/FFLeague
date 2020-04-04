import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Pages
import MenssagerScreen from './pages/menssager';
import FeedScreen from './pages/feed';
import CampsScreen from './pages/camps';
import SolicitScreen from './pages/solicit';

const AppTabs = createBottomTabNavigator();

export default function RouterTabs(){
	return(
		<AppTabs.Navigator
			tabBarOptions={{
				showLabel:false,
				style:{
					height: 70,
					borderTopWidth: 0
				}
			}}
		>
			<AppTabs.Screen 
				name="Feed" 
				component={FeedScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="home" size={25} color={focused ? '#35aa' : '#999'} />
					)
				}}
			/>
			<AppTabs.Screen
				name="Message" 
				component={MenssagerScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="comments" size={25} color={focused ? '#35aa' : '#999'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Camps" 
				component={CampsScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="flag-checkered" size={25} color={focused ? '#35aa' : '#999'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Solict" 
				component={SolicitScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="users" size={25} color={focused ? '#35aa' : '#999'} />
					)
				}}
			/>
		</AppTabs.Navigator>
	);
}