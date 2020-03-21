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
		Menssager: {
			screen: MenssagerScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="comments" size={22} color={focused ? '#35aa' : '#ddd'} />
		        ),
		        title: 'Bate-papo'
		    }),
		},
		Feed:{
			screen: FeedScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="lock" size={22} color={focused ? '#35aa' : '#ddd'} />
		        ),
		    }),
		},
		Camps:{
			screen: CampsScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="lock" size={22} color={focused ? '#35aa' : '#ddd'} />
		        ),
		        title: 'Campeonatos'
		    }),
		},
		Solicit:{
			screen: SolicitScreen,
			navigationOptions: () => ({
		        tabBarIcon: ({ focused }) => (
		          <Icon name="lock" size={22} color={focused ? '#35aa' : '#ddd'} />
		        ),
				title: 'Solicitações'
		    }),
		},
	},{
		tabBarOptions:{
			activeTintColor: '#35aaff',
			style:{
				height: 80,
			},
			tabStyle:{
				padding: 15,
				paddingTop: 22
			},
			labelStyle:{
				fontSize: 12,
				margin: 5,
			},
			labelPosition: 'below-icon',
		}
	}
);

export default TabsNavigator;