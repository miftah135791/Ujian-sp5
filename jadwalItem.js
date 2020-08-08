import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function JadwalItem({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        marginTop: -0,
        marginBottom: 10,
        padding: 16,
        backgroundColor: '#c5c7c7',
        borderColor: '#470e0a',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        fontSize: 15,
    },
});