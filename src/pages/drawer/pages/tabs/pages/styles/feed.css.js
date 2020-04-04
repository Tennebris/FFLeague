import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        // marginBottom: 50
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        // borderWidth:1
    },
    item:{
        width: '100%',
        paddingHorizontal: 10
    },
    nameUser:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    description:{

    },
    postItem:{
        borderRadius: 30,
        width: "100%",
        height: Dimensions.get('window').width * 0.89
    },
    body:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemRender:{
        width: '100%',
        backgroundColor: "#101010",
        marginVertical: 10,
        borderRadius: 10

    },
    avatar:{
        width: 50,
        height: 50,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000',
        padding:7.5
    },
    footer:{
        // marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    hor:{
        flexDirection: "row",
        alignItems: 'center',
    },
    textLike:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    textBnt:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#000',
        marginBottom: 10
    }
});

export default styles;