import { StyleSheet, Dimensions } from "react-native";
import constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        // justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop: constants.statusBarHeight + 25,
        backgroundColor: "#f0f0f0",
    },
    search:{
        width: '90%',
        height: 45,
        paddingHorizontal: 10
    }
});

export default styles;