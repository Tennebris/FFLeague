import { StyleSheet, Dimensions } from "react-native";
import constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        paddingTop: constants.statusBarHeight - 10,
        // justifyContent: "center",
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    header:{
        // alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: 15,
        marginBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    userName:{
        color: "#444",
        fontWeight: 'bold',
        fontSize: 17,
    },
    album:{
        backgroundColor: 'red',
        flexDirection: 'row',
        marginTop: 25,
    },
    btnEdit:{
        alignItems: 'center',
        backgroundColor: '#aaa',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5
    },
    avatar:{
        backgroundColor: 'silver',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    viewFollow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 20,
    },
    main: {
        marginBottom: 5,
        alignItems: 'center'
    },
    empty:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    modal:{
        position: 'absolute',
        left: Dimensions.get('window').width / 2.4,
        top: Dimensions.get('window').height / 2,

        padding: 50,
        backgroundColor: 'red'
    }
});

export default styles;