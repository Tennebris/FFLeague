import { StyleSheet, Dimensions } from "react-native";
import constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        // justifyContent: "center",
        paddingTop: constants.statusBarHeight + 15,
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    post:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;