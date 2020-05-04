import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages Stack navigator
import WelcomeScreen from "../Pages/Stack/Pages/welcome";
import LoginScreen from "../Pages/Stack/Pages/login";
import RegisterScreen from "../Pages/Stack/Pages/register";

const AppStack = createStackNavigator();

export default function Initial({route}){
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route ? route : 'Welcome'} >
            <AppStack.Screen name="Welcome" component={WelcomeScreen}/>
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen name="Register" component={RegisterScreen} />
        </AppStack.Navigator>
    );
} 