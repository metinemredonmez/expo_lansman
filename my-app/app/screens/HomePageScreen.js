// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.settingsText}>Home Page Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    settingsText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomePageScreen;
