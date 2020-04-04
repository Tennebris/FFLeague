import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    area:{
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        // paddingHorizontal: 25,
        justifyContent: 'center',
    },
    base:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        width: 30,
        backgroundColor: '#35aadd',
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    final:{
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10
    },
    body:{
        justifyContent: 'flex-start',
        marginHorizontal: 20
    },
    avatar:{
        width: 70,
        height: 70,
        backgroundColor: 'grey',
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        // borderWidth: 1.5
    },
    textUser:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        color: "grey"
    },
    msgPreview:{
        fontSize: 14,
        fontWeight: '500',
        color: '#777'
    }
});