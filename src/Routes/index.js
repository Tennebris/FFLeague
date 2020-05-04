import React, {useContext} from 'react';

import AuthContext from '../Contexts/auth';

import Dash from './dash';
import Auth from './initial';

export default function Routes({route}){
	const {logged} = useContext(AuthContext);
	return logged || route=='tabs' ? <Dash/> : <Auth route={route} />;
}