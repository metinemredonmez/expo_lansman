import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , CardStyleInterpolators, TransitionPresets  } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import ForgotScreen from "../screens/ForgotScreen";
import ProductDetailScreen from '../screens/ProductDetailScreen';
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import MainTabNavigator from "./MainTabNavigator";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";
 import HomePageScreen from "../screens/HomePageScreen";




const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Terms" component={TermsAndConditionsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />

        <Stack.Screen
            name="Privacy"
            component={PrivacyScreen}
            options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, headerShown: false,
            }}
        />
        <Stack.Screen
            name="Forgot"
            component={ForgotScreen}
            options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, headerShown: false,
            }}
        />

    </Stack.Navigator>
);

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}
