import { StyleSheet, Dimensions } from "react-native";
import constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        paddingTop: constants.statusBarHeight + 20,
        flex: 1,
    },
    list: {
        paddingHorizontal: 10
    },
    card:{
        height: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        padding: 30
    },
    cardText: {
        fontSize: 20,
        color: '#555',
        fontWeight: '500',
        marginVertical: 15
    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
});

export default styles;