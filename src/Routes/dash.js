import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Pages
import MessageScreen from '../Pages/Tabs/Pages/message';
import FeedScreen from '../Pages/Tabs/Pages/feed';
import CampsScreen from '../Pages/Tabs/Pages/camps';
import SearchScreen from '../Pages/Tabs/Pages/search';
import ProfileScreen from '../Pages/Tabs/Pages/profile';

const AppTabs = createBottomTabNavigator();

export default function RouterTabs(){
	return(
		<AppTabs.Navigator
			tabBarOptions={{
				showLabel:false,
				style:{
					height: 70,
					borderTopWidth: 0,
					elevation: 0,
					backgroundColor: '#f0f0f0'
				},
			}}

			initialRouteName={'feed'}
		>
			<AppTabs.Screen 
				name="Feed" 
				component={FeedScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="home" size={25} color={focused ? '#35aaff' : '#666'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Search" 
				component={SearchScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="search" size={25} color={focused ? '#35aaff' : '#666'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Camps" 
				component={CampsScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="flag-checkered" size={25} color={focused ? '#35aaff' : '#666'} />
						)
					}}
			/>
			<AppTabs.Screen
				name="Message" 
				component={MessageScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon1 name="message" size={25} color={focused ? '#35aaff' : '#666'} />
					)
				}}
			/>
			<AppTabs.Screen 
				name="Profile" 
				component={ProfileScreen}
				options={{
					tabBarIcon:({focused}) => (
						<Icon name="user-alt" size={25} color={focused ? '#35aaff' : '#666'} />
					)
				}}
			/>
		</AppTabs.Navigator>
	);
}