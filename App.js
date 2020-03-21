import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './routes';


export default function App() {
	YellowBox.ignoreWarnings(['Warning: ...']);
	return (
		<Routes/>
	);
}
