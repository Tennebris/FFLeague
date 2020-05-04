import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#181818',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	input:{
		marginVertical: 30,
		width: '70%',
		padding: 25,
		fontSize: 18,
		paddingHorizontal: 20,
	},
	card:{
		width: '100%',
		height: 500,
		backgroundColor: 'transparent',
		borderRadius: 20,
		marginBottom: 100
	},
	base:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	combo:{
		flexDirection: 'row',
		backgroundColor: 'rgba(255,255,255,0.5)',
		height: 55,
		width: '75%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginTop: 100
	},
	baseSlide:{
		width: '47.5%',
		marginHorizontal:6,
		height: '85%',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sociais:{
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: 300,
		marginBottom: 100
	},
	icons:{
		backgroundColor: '#fff',
		borderRadius: 100,
		marginHorizontal: 30,
		padding: 12,
		marginBottom: 60
	},
	containerInput:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: '#fff',
		paddingHorizontal: 40
	},
	logoMain:{
		marginTop: 250
	},
	submit:{
		backgroundColor: '#35aaff',
		width: '38.2%',
		height: 55,
		bottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginHorizontal:10
	},
	linha:{
		backgroundColor: '#ddd',
		width: '30%',
		height: 1,
		marginHorizontal: 10
	},
	lateral:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30
	},
	submitText:{
		fontSize: 22,
		color: '#fff',
		fontWeight:'bold',
		top: -2
	},
	rela:{
		position: 'absolute',
	}
});

export default styles;