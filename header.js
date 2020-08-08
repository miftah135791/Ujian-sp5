import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Header(){
        return(
    <View style={styles.header}>
        <Text style={styles.title}>MENU MAKANAN</Text>
        
    </View>
        )
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#c93258',
        borderTopEndRadius: 25,
        borderTopLeftRadius: 35
    },
    title: {
        fontFamily: 'vincHand',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        
    }
});