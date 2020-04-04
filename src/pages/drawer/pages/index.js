import React from 'react';
import Header from '../config/header';

import Home from './tabs/index';
import Profile from './profile';
import About from './about';

export const HomeScreen = ({navigation}) => <Header navigation={navigation} screen={<Home/>} ishome={true}/>
export const ProfileScreen = ({navigation}) => <Header navigation={navigation} screen={<Profile/>} isprofile={true} />
export const AboutScreen = ({navigation}) => <Header navigation={navigation} screen={<About/>} isprofile={false}/>