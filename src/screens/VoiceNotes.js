import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const VoiceNotes = () => {
    return (
        <View style={styles.container}>
            <Text>Voice Notes</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});


export default VoiceNotes;
