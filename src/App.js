import React,{ useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import {YellowBox,StatusBar, AsyncStorage, View} from 'react-native';
import Routes from './routes';


export default function App() {
	const [router, setRouter] = useState();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		let isCancelled = false;
		async function getroute(){
			try {
				if(!isCancelled){
					setLoaded(false);
					// await AsyncStorage.clear();
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

	return (
		<>
			<StatusBar barStyle='light-content' hidden={true}/>
			{ loaded && <Routes route={router}/> }
		</>
	);
}
