// RegisterScreen.js
// app/screens/Auth/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import * as AuthService from '../services/AccountService';

export default function RegisterScreen({ navigation }) {
    const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [userName, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const userData = {
                name,
                surname,
                userName,
                emailAddress,
                password,
                captchaResponse: '',
                isSeller: false,
            };

            const registerResult = await AuthService.registerUser(userData);

            if (registerResult) {
                console.log('Başarılı kayıt, login ekranına yönlendiriliyor.');
                navigation.navigate('Login', { email: emailAddress });
            } else {
                console.log('Kayıt başarısız.');
            }
        } catch (error) {
            console.error('Kayıt sırasında bir hata oluştu:', error.message);
        }
    };

    const handleTermsPress = () => {
        navigation.navigate('Terms');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                <Text>Logo</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text>Ad</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Adınızı girin"
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text>Soyad</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Soyadınızı girin"
                    onChangeText={(text) => setSurname(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text>E-posta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-posta adresinizi girin"
                    onChangeText={(text) => setEmailAddress(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text>Parola</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Parolanızı girin"
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={isAgreedToTerms}
                    onPress={() => setIsAgreedToTerms(!isAgreedToTerms)}
                    checkedColor="#2ecc71"
                    containerStyle={isAgreedToTerms ? styles.checkedCheckbox : styles.uncheckedCheckbox}
                />
                <Text>Üyelik sözleşmesini okudum ve kabul ediyorum.</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={isSubscribed}
                    onPress={() => setIsSubscribed(!isSubscribed)}
                    checkedColor="#2ecc71"
                    containerStyle={isSubscribed ? styles.checkedCheckbox : styles.uncheckedCheckbox}
                />
                <Text style={styles.checkboxText}>
                    Fırsat ve kampanyalardan e-posta ile haberdar olmak istiyorum.
                </Text>
            </View>

            <TouchableOpacity onPress={handleTermsPress}>
                <Text style={styles.termsButton}>Terms & Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    termsButton: {
        marginTop: 10,
        marginBottom: 20,
        color: '#3498db',
        textDecorationLine: 'underline',
        alignSelf: 'center',

    },
    checkboxText: {
        flex: 1,
        marginLeft: 5, // İstediğiniz kadar ayarlayabilirsiniz
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 5,
        borderRadius: 8, // Yeni eklenen stil
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Boşluk ekledim
    },
    checkedCheckbox: {
        borderWidth: 1,
        borderColor: '#2ecc71', // Seçili durumda çerçeve rengi
        borderRadius: 5,
        marginLeft: 5, // Boşluk ekledim
    },
    uncheckedCheckbox: {
        borderWidth: 1,
        borderColor: '#ccc', // Seçili olmayan durumda çerçeve rengi
        borderRadius: 5,
        marginLeft: 5, // Boşluk ekledim
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 15, // Yüksekliği artırmak için paddingVertical kullanın
        paddingHorizontal: 80, // Genişliği artırmak için paddingHorizontal kullanın
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        alignItems: 'center', // Ortaya hizalama,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
    },
});
