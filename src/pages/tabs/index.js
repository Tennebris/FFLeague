import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

// Pages
import MenssagerScreen from './pages/menssager';
import FeedScreen from './pages/feed';
import CampsScreen from './pages/camps';
import SolicitScreen from './pages/solicit';
import ProfileScreen from './pages/profile';

const AppTabs = createBottomTabNavigator();

export default function RouterTabs({header}){
	return(
		<AppTabs.Navigator
			tabBarOptions={{
				showLabel:false,
				style:{
					height: 70,
					borderTopWidth: 0,
					backgroundColor: '#202020'
				},
			}}
		>
			<AppTabs.Screen 
				name="Feed" 
				component={FeedScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="home" size={25} color={focused ? '#35aaff' : '#fff'} />
					)
				}}
			/>
			<AppTabs.Screen
				name="Message" 
				component={MenssagerScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon1 name="message" size={25} color={focused ? '#35aaff' : '#fff'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Camps" 
				component={CampsScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="flag-checkered" size={25} color={focused ? '#35aaff' : '#fff'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Solictation" 
				component={SolicitScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="users" size={25} color={focused ? '#35aaff' : '#fff'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Profile" 
				component={ProfileScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="user-alt" size={25} color={focused ? '#35aaff' : '#fff'} />
					)
				}}
			/>
		</AppTabs.Navigator>
	);
}