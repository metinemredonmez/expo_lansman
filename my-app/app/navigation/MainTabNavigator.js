import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProductsScreen from '../screens/ProductsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import HomePageScreen from "../screens/HomePageScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: 70,
                },
                labelStyle: {
                    marginBottom: 5,
                },
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
