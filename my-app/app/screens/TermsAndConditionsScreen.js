// PrivacyScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const termsAndConditionsText = `
Terms & Conditions
At lipsum.ai, accessible from lipsum.ai, one of our main priorities is the privacy of our visitors. This Terms & Conditions document contains types of information that is collected and recorded by lipsum.ai and how we use it.

If you have additional questions or require more information about our Terms & Conditions, do not hesitate to contact us.

This Terms & Conditions applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in lipsum.ai. This policy is not applicable to any information collected offline or via channels other than this website.

Consent
By using our website, you hereby consent to our Terms & Conditions and agree to its terms.

Information we collect
The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.

How we use your information
We use the information we collect in various ways, including to:

- Provide, operate, and maintain our website
- Improve, personalize, and expand our website
- Understand and analyze how you use our website
- Develop new products, services, features, and functionality
- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
- Send you emails
- Find and prevent fraud
`;

const TermsAndConditionsScreen = ({ navigation }) => {
    const [showFullText, setShowFullText] = useState(false);

    const handleReadMorePress = () => {
        setShowFullText(true);
    };

    const handleOkPress = () => {
        // Ok düğmesine basıldığında LoginScreen'e yönlendirme yapalım
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.innerContainer}>
                {/* Başlık */}
                <TouchableOpacity style={styles.header} onPress={handleOkPress}>
                    <Text style={styles.headerText}>Terms & Conditions</Text>
                </TouchableOpacity>

                {/* Gizlilik politikası metni */}
                <Text style={styles.privacyText}>
                    {showFullText ? termsAndConditionsText : termsAndConditionsText.slice(0, 200)} {/* İlk 200 karakteri göster */}
                </Text>

                {/* Read More düğmesi */}
                {!showFullText && (
                    <TouchableOpacity style={styles.readMoreButton} onPress={handleReadMorePress}>
                        <Text style={styles.readMoreButtonText}>Read More</Text>
                    </TouchableOpacity>
                )}

                {/* Ok button */}
                <TouchableOpacity style={styles.okButton} onPress={handleOkPress}>
                    <Text style={styles.okButtonText} onPress={handleOkPress}>OK</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Ekranın geri kalanında beyaz bir arka plan ekler
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    privacyText: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    readMoreButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 10,
    },
    readMoreButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    okButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    okButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default TermsAndConditionsScreen;
