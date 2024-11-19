import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Animated, TextInput, KeyboardTypeOptions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface GradientTextInputProps {
    placeholder: string;
    placeholderTextColor: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
}

interface GradientIconProps {
    name: string; 
    size: number;
    IconComponent: typeof Ionicons | typeof FontAwesome;
    gradientColors: string[];
}

const GradientTextInput: React.FC<GradientTextInputProps> = ({ placeholder, placeholderTextColor, keyboardType, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.inputGradient}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                />
            </LinearGradient>
        </View>
    );
};


const GradientIcon: React.FC<GradientIconProps> = ({ name, size, IconComponent, gradientColors }) => {
    return (
        <LinearGradient colors={gradientColors} style={styles.iconGradient}>
            <IconComponent name={name as any} size={size} color="#fff" />
        </LinearGradient>
    );
};

const StudentScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const translateX = new Animated.Value(-500);

    useEffect(() => {
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

                <GradientTextInput
                    placeholder="E-mail"
                    placeholderTextColor={colors.description}
                    keyboardType="email-address"
                />
                <GradientTextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.description}
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Main')}
                >
                    <LinearGradient
                        colors={[colors.secondary, colors.primary]}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Acessar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.footer, { transform: [{ translateX }] }]}>
                <TouchableOpacity style={styles.footerIcon}>
                    <GradientIcon
                        name="arrow-back"
                        size={35}
                        IconComponent={Ionicons}
                        gradientColors={[colors.gradient1, colors.gradient2]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <GradientIcon
                        name="lock-closed"
                        size={35}
                        IconComponent={Ionicons}
                        gradientColors={[colors.gradient1, colors.gradient2]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <GradientIcon
                        name="log-out"
                        size={35}
                        IconComponent={Ionicons}
                        gradientColors={[colors.gradient1, colors.gradient2]}
                    />
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
    inputContainer: {
        marginBottom: 20,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    inputGradient: {
        borderRadius: 5,
    },
    input: {
        width: 300,
        height: 50,
        color: '#fff',
        fontFamily: 'poppins-regular',
        paddingHorizontal: 10,
        textAlignVertical: 'center',
        fontSize: 18,
    },
    button: {
        width: 200,
        height: 60,
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
        fontFamily: 'poppins-light',
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
    footerIcon: {
        padding: 10,
    },
});

export default StudentScreen;
