import {createStackNavigator} from 'react-navigation';

import WelcomeScreen from "./src/pages/welcome";
import LoginScreen from "./src/pages/login";
import RegisterScreen from "./src/pages/register";
import DrawerScreen from "./src/pages/drawer/index";

export default createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions:{
            header: null
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions:{
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            header: null
        }
    },
    Drawer: {
        screen: DrawerScreen,
        navigationOptions:{
            header: null
        }
    },
});