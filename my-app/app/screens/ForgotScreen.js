// ForgotScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    const handleSend = () => {
        // Burada şifre sıfırlama işlemleri gerçekleştirilebilir.
        console.log('Send button pressed with email:', email);
    };

    const handleGoBack = () => {
        navigation.goBack(); // Geri tuşu için kullanılır.
    };

    return (
        <View style={styles.container}>


            <Image
                source={require('../../assets/logo.png')}// Logo resminin yolu
                style={styles.logo}
            />
            <Text style={styles.title}>E-posta Adresini Gir Ve Şifreni Sıfırla</Text>

            {/* E-posta Girişi */}
            <TextInput
                style={styles.input}
                placeholder="E-posta adresinizi giriniz"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            {/* Gönder Butonu */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: email ? '#2ecc71' : '#ddd' }]}
                onPress={handleSend}
                disabled={!email}
            >
                <Text style={styles.buttonText}>Gönder</Text>
            </TouchableOpacity>

            {/* Gizlilik Şartları */}
            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => setIsPrivacyChecked(!isPrivacyChecked)}
                >
                    {isPrivacyChecked && <View style={styles.checkedBox} />}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    Gizlilik şartlarını kabul ediyorum.
                </Text>
            </View>
            {/* Geri Tuşu */}
            <TouchableOpacity onPress={handleGoBack}>
                <Text style={{ color: 'green', marginTop: 30 }}>back to Login</Text>
            </TouchableOpacity>


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
    title: {
        fontSize: 13,
        fontWeight: 'normal',
        marginBottom: 20,
        color:"black"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 15,
        borderRadius: 8,
        width: '100%',
    },
    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        color:'red',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    logo: {
        width: 200, // İstenilen genişlik
        height: 200, // İstenilen yükseklik
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#2ecc71',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 10,
        height: 10,
        backgroundColor: '#2ecc71',
    },
    checkboxText: {
        flex: 1,
        marginLeft: 5,
    },
});

export default ForgotScreen;
