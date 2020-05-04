import { StyleSheet, Dimensions } from "react-native";
import constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        paddingTop: constants.statusBarHeight + 20,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        paddingHorizontal: 4,
        flexWrap: 'wrap'
    }, card:{
        backgroundColor: '#e1e1e1',
        width: (Dimensions.get('window').width) - 8,
        margin: 2,
        borderRadius: 8,
        height: Dimensions.get('window').width/2.060,
    }
});

export default styles;