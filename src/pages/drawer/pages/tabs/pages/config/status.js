import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function status() {
  return (
    <View style={styles.container}>
        <FlatList
            data={[1,2,3,4,5,6,7,8,9,0,1]}
            horizontal={true}
            decelerationRate={0.01}
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.itemStatus}>
                    <Icon name='md-male' size={50} />
                </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginVertical: 10
    },
    itemStatus:{
        padding: 10,
        borderWidth: 3,
        marginHorizontal: 5,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    }
});
