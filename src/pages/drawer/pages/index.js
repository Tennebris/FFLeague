import React from 'react';
import Header from '../config/header';

import {View, Text} from 'react-native';

import Home from './tabs/index';
import Profile from './profile';
import About from './about';

export const HomeScreen = ({navigation}) => <Header navigation={navigation} screen={<Home/>} />
export const ProfileScreen = ({navigation}) => <Header navigation={navigation} screen={<Profile/>} />
export const AboutScreen = ({navigation}) => <Header navigation={navigation} screen={<About/>} />