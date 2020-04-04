import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function headerMessage() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Message</Text>
        <Text style={styles.subTitle}>Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        backgroundColor: '#f1f1f1'
    },
    title:{
        fontSize: 32,
        color: '#005'
    },
    subTitle:{
        fontSize: 18,
        color: '#666'
    }
});