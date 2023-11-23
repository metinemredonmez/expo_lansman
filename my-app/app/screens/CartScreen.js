// CartScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = () => {
    const cartItems = []; // Sepet öğeleri burada olacak, ancak şu anda boş bir dizi olarak bıraktım.

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Shopping Cart</Text>

            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty.</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)} TL</Text>
                        </View>
                    )}
                />
            )}

            {cartItems.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: {calculateTotalPrice()} TL</Text>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 8,
    },
    itemName: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalContainer: {
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#2ecc71',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    checkoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CartScreen;
