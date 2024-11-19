import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';

const Card: React.FC<{ 
    title: string; 
    imageSource: any; 
    onPress: () => void;
 }> = ({ title, imageSource, onPress }) => {
    return (
        <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Image source={imageSource} style={styles.cardImage} />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 220,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        position: 'absolute',
        top: 15,
        left: 15,
        color: colors.background,
    },
    cardImage: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        width: 160,
        height: 160,
        resizeMode: 'contain',
    },
    button: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: colors.gradient1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: colors.background,
        fontFamily: 'poppins-regular',
    },
});

export default Card;
