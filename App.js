import React,{ useEffect } from 'react';
import {YellowBox} from 'react-native';
import Routes from './routes';


export default function App() {
	useEffect(() => {
		YellowBox.ignoreWarnings([ 'DrawerLayoutAndroid drawerPosition','componentWillReceiveProps has been renamed']);
	},[])
	return (
		<Routes/>
	);
}
