import React, {useEffect, useState} from 'react';
import {View,FlatList,Text,Image,TouchableOpacity,TouchableHighlight,Dimensions} from 'react-native';
import api from '../../../../../services/api';

// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import imagefonte from '../../../../../assets/img/073.jpg';

import StatusView from "./config/status";

import styles from './styles/feed.css';

export default function feed({navigation}){
	const [feeds, setFeeds] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [like, setLike] = useState(0);
	const [type, setType] = useState('-empty');
	const [count, setCount] = useState(0);
	const [refreshing, setRefreshing] = useState(false);

	async function loadFeed(){
		try {
			setIsLoaded(false);
			const response = await api.get('/feed');
			setFeeds([...feeds, ...response.data]);
			setIsLoaded(true);
		} catch (error) {
			console.warn(error);
		}
	}

	async function refresh(){
		setRefreshing(true);
		await loadFeed();
		setRefreshing(false);
	}

	useEffect(() => {
		try {
			loadFeed();
		} catch (error) {
			console.warn(error);
			
		}
	},[]);

	return(
		<View style={styles.container}>
			{isLoaded ?
			<FlatList
				data={feeds}
				style={styles.item}
				showsVerticalScrollIndicator={false}
				keyExtractor={post => String(post.id)}

				onRefresh={refresh}
				refreshing={refreshing}

				ListHeaderComponent={(<StatusView/>)}

				renderItem={({item}) => (
					<View style={styles.itemRender}>
						<View style={styles.header}>
							<View style={styles.hor}>
								<View style={styles.avatar}>
									<Icon name='md-mal' size={40}/>
								</View>
								<Text style={styles.nameUser}>{item.author}</Text>
							</View>
							<TouchableOpacity
								style={[styles.hor,{alignItems: 'center',padding: 10}]}
							>
								<Text style={styles.textBnt}>.</Text>
								<Text style={styles.textBnt}>.</Text>
								<Text style={styles.textBnt}>.</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.body}>
							<TouchableHighlight
								style={{width: '100%',height: Dimensions.get('window').width * 0.89}}
								onPress={() => {
									setCount(count+1);
									if(count === 1)
										setType('');
								}}
							>
								<Image
									source={imagefonte}
									style={styles.postItem}
								/>
							</TouchableHighlight>
						</View>
						<View style={styles.footer}>
							<View>
								<Text 
									style={[styles.textLike,{marginBottom: 10,fontWeight: '600'}]}>
										{item.description}
								</Text>	
								<View style={[styles.hor]}>
									<TouchableOpacity
										style={[{padding: 7}]}
										onPress={() => {
											setLike(like+1);
										}}
									>
										<Icon name={`md-heart${type}`} color='#000' size={30} />
									</TouchableOpacity>

									<Text style={styles.textLike}>{like} likes</Text>
								</View>
							</View>

							<View style={[styles.hor,{marginTop: '2%'}]}>
								<TouchableOpacity
									style={{ padding: 7}}
								>
									<Icon name='md-arrow-forward' size={30} color='#000'/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			/>
			: <Text>Carreando..</Text>
			}
		</View>
	);
}