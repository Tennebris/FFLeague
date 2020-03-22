import React from 'react';
import {createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';

// Pages
import MenssagerScreen from './pages/menssager';
import FeedScreen from './pages/feed';
import CampsScreen from './pages/camps';
import SolicitScreen from './pages/solicit';

const TabsNavigator = createBottomTabNavigator(
	{
		Feed:{
			screen: FeedScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="home" size={22} color={focused ? '#35aa' : '#2079'} />
		        ),
		    }),
		},
		Menssager: {
			screen: MenssagerScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="comments" size={22} color={focused ? '#35aa' : '#2079'} />
		        ),
		        title: 'Bate-papo'
		    }),
		},
		Camps:{
			screen: CampsScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="flag-checkered" size={22} color={focused ? '#35aa' : '#2079'} />
		        ),
		        title: 'Campeonatos'
		    }),
		},
		Solicit:{
			screen: SolicitScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="users" size={22} color={focused ? '#35aa' : '#2079'} />
		        ),
				title: 'Solicitações'
		    }),
		},
	},{
		tabBarOptions:{
			activeTintColor: '#0199',
			style:{
				height: 80,
				backgroundColor: 'rgba(0,0,0,0)',
				borderTopWidth: 0,
			},
			tabStyle:{
				padding: 15,
				paddingTop: 22,
			},
			labelStyle:{
				fontSize: 12,
				margin: 5,
			},
		}
	}
);

export default TabsNavigator;