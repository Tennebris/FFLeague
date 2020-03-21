import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	conteiner:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	base:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'red'
	},
	horizontal:{
		flexDirection: 'row'
	},
	btn:{
		backgroundColor: '#35aaff',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		width: '40%',
		marginHorizontal: 15,
		borderRadius: 10,
		// marginTop: 100
	},
	title:{
		fontSize: 69,
		fontWeight:'bold',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		paddingHorizontal: 35,
		fontWeight: '900',
		marginBottom: 10
	},
	logoMain:{
		marginTop: 100,
		paddingTop: 150
	},
	logoBase:{
		borderRadius: 500,
		position: 'absolute',
		width: 300,
		height: 300,
		borderWidth: 10,
		borderColor: '#ddd'
	},
	subTitle:{
		fontSize: 17,
		color: '#fff',
	}
});

export default styles;