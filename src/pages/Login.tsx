import React from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

const GradientIcon = ({ name, size, IconComponent, gradientColors }) => {
    return (
        <LinearGradient colors={gradientColors} style={styles.iconGradient}>
            <IconComponent name={name} size={size} color="white" />
        </LinearGradient>
    );
};

const LoginScreen = () => {
    const navigation = useNavigation();
    const translateX = new Animated.Value(-500);

    React.useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 1500, 
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <ImageBackground
            source={require('../image/tela-fundo.jpg')}
            style={styles.background}
        >
            
            <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
                <Image
                    source={require('../image/logo-escola.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>Acompanhamento Escolar</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Student')}
                >
                    <LinearGradient
                        colors={[colors.secondary, colors.primary]}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Entrar como aluno/responsável</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <LinearGradient
                        colors={[colors.secondary, colors.primary]}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Entrar como professor</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Institution')}
                >
                    <LinearGradient
                        colors={[colors.secondary, colors.primary]}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Cadastrar Instituição</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        zIndex: 1,
    },
    iconContainer: {
        padding: 10,
    },
    iconGradient: {
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 35,
    },
    title: {
        fontSize: 24,
        color: colors.title,
        marginBottom: 75,
        textAlign: 'center',
        fontFamily: 'poppins-bold',
    },
    button: {
        width: 250,
        height: 80,
        marginBottom: 15,
    },
    buttonGradient: {
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gradient1,
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'poppins-regular',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    },
    footerIcon: {},
});

export default LoginScreen;