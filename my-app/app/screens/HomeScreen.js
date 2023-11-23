import React from 'react';
import MainTabNavigator from '../navigation/MainTabNavigator'; // MainTabNavigator'ı import et
import { View, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Alt sekmeleri gösteren MainTabNavigator'ı çağır */}
            <MainTabNavigator />
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
});

export default HomeScreen;
