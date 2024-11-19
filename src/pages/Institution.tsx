import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';

const GradientTextInput = ({ style, ...props }) => {
    return (
        <View style={styles.inputContainer}>
            <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.inputGradient}
            >
                <TextInput
                    {...props}
                    style={[styles.input, style]}
                />
            </LinearGradient>
        </View>
    );
};

const InstitutionScreen = () => {
    const translateX = useRef(new Animated.Value(-500)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 1500, 
            useNativeDriver: true,
        }).start();
    }, [translateX]);

    const animatedStyle = {
        transform: [{
            translateX,
        }],
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.header, animatedStyle]}>
                <Text style={styles.headerText}>Cadastrar Instituição</Text>
                <View style={styles.headerLine} />
            </Animated.View>
            <ScrollView contentContainerStyle={styles.form}>
                <Animated.View style={animatedStyle}>
                    <GradientTextInput
                        placeholder="Nome da Instituição"
                        placeholderTextColor={colors.description} style={undefined}/>
                    <GradientTextInput
                        placeholder="E-mail"
                        placeholderTextColor={colors.description}
                        keyboardType="email-address" style={undefined}/>
                    <GradientTextInput
                        placeholder="CNPJ"
                        placeholderTextColor={colors.description}
                        keyboardType="numeric" style={undefined}/>
                    <GradientTextInput
                        placeholder="Nome do Reitor"
                        placeholderTextColor={colors.description} style={undefined}/>
                    <GradientTextInput
                        placeholder="Endereço"
                        placeholderTextColor={colors.description} style={undefined}/>
                    <GradientTextInput
                        placeholder="CEP"
                        placeholderTextColor={colors.description}
                        keyboardType="numeric" style={undefined}/>
                    <TouchableOpacity style={styles.button}>
                        <LinearGradient
                            colors={[colors.secondary, colors.primary]}
                            style={styles.buttonGradient}
                        >
                            <Text style={styles.buttonText}>Cadastrar Instituição</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingTop: 60,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: colors.title,
        fontFamily: 'poppins-bold',
    },
    headerLine: {
        marginTop: 10,
        width: '50%',
        height: 2,
        backgroundColor: 'black',
    },
    form: {
        padding: 20,
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: 40,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    inputGradient: {
        borderRadius: 5,
    },
    input: {
        height: 50,
        color: '#fff',
        fontFamily: 'poppins-light',
        paddingHorizontal: 10,
        textAlignVertical: 'center',
        fontSize: 16,
    },
    buttonGradient: {
        padding: 20,
        margin: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gradient1,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'poppins-bold',
    },
});

export default InstitutionScreen;