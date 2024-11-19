import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Animated, Easing } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

type RootStackParamList = {
    PendingTasks: undefined;
    Events: undefined;
    Bulletin: undefined; 
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PendingTasks'>;

const MainScreen: React.FC = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const sidebarAnimation = useRef(new Animated.Value(-250)).current;
    const opacityAnimation = useRef(new Animated.Value(0)).current;

    const toggleSidebar = () => {
        if (sidebarVisible) {
            Animated.parallel([
                Animated.timing(sidebarAnimation, {
                    toValue: -250,
                    duration: 600,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: true,
                })
            ]).start(() => setSidebarVisible(false));
        } else {
            setSidebarVisible(true);
            Animated.parallel([
                Animated.timing(sidebarAnimation, {
                    toValue: 0,
                    duration: 600,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                })
            ]).start();
        }
    };

    const Tarefas = require('../image/tarefas-pendentes.png');
    const Boletim = require('../image/notas.png');
    const Eventos = require('../image/eventos.png');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconContainer} onPress={toggleSidebar}>
                    <FontAwesome name="bars" size={30} color={colors.gradient1} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={30} color={colors.gradient1} />
                </TouchableOpacity>
            </View>

            {sidebarVisible && (
                <Sidebar
                    sidebarAnimation={sidebarAnimation}
                    opacityAnimation={opacityAnimation}
                    toggleSidebar={toggleSidebar}
                />
            )}

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.cardContainer}>
                    <Card
                        title="Tarefas Pendentes"
                        imageSource={Tarefas}
                        onPress={() => navigation.navigate('PendingTasks')}
                    />
                    <Card
                        title="Boletim"
                        imageSource={Boletim}
                        onPress={() => navigation.navigate('Bulletin')}
                    />
                    <Card
                        title="Eventos e Comunicados"
                        imageSource={Eventos}
                        onPress={() => navigation.navigate('Events')}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    iconContainer: {
        padding: 10,
    },
    scrollContent: {
        paddingTop: 90,
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});

export default MainScreen;