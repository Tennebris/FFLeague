import 'react-native-gesture-handler';

import React,{ useEffect, useState } from 'react';
import {YellowBox,StatusBar, AsyncStorage, View, Text, Animated} from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";

import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './Contexts/auth';
import Routes from './Routes/index';
import Span from "./Span";

export default function App() {
	const netinfo = useNetInfo();
	const SpanAnimaded = Animated.createAnimatedComponent(Span);

	const [op, setOp] = useState(0);

	const [router, setRouter] = useState();
	const [loaded, setLoaded] = useState(false);
	const [connection, setConnection] = useState();


	useEffect(() => {
		let isCancelled = false;
		async function getroute(){
			try {
				if(!isCancelled){
					setLoaded(false);
					const userAsync = await AsyncStorage.getItem('@FFLeague:user');
					const routerAsync = await AsyncStorage.getItem('@FFLeague:route');
					!!userAsync ? setRouter("Tabs") : setRouter(routerAsync);
					setLoaded(true);
				}
					YellowBox.ignoreWarnings([
						'DrawerLayoutAndroid drawerPosition',
						'componentWillReceiveProps has been renamed',
						'VirtualizedList: missing keys for items'
					]);
				} catch (error) {
					console.warn(error)
				}
		}
		getroute();
		return () => {
			isCancelled = true;
		}
	},[]);

	useEffect(() => {
		if(netinfo.isConnected){
			setConnection('Connected!');
		}else{
			setConnection('Disconnected!');
		}
	},[netinfo]);
	useEffect(() => {
		setTimeout(() => {
			const opacity = new Animated.Value(1);
			Animated.timing( opacity, {
				toValue: 0,
				duration: 1000,
				useNaviteDriver: true,
			}).start();
			setOp(opacity);
		}, 1);
	},[netinfo]);

	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar barStyle='dark-content' hidden={true}/>
				{ loaded && <Routes route={router}/> }
				<SpanAnimaded state={connection} opacity={op}/>
			</AuthProvider>
		</NavigationContainer>
	);
}
