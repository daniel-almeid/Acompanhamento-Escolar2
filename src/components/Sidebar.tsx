import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';

interface SidebarProps {
    sidebarAnimation: Animated.Value;
    opacityAnimation: Animated.Value;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarAnimation, opacityAnimation, toggleSidebar }) => {
    const navigation = useNavigation();

    return (
        <Animated.View
            style={[
                styles.sidebar,
                {
                    transform: [{ translateX: sidebarAnimation }],
                    opacity: opacityAnimation,
                },
            ]}
        >
            <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.sidebarGradient}
            >
                <TouchableOpacity 
                    style={styles.sidebarItem} 
                    onPress={() => {
                        toggleSidebar();
                        navigation.navigate('Performance');
                    }}
                >
                    <Text style={styles.sidebarText}>Avaliação de Desempenho</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.sidebarItem} 
                    onPress={() => {
                        toggleSidebar();
                        navigation.navigate('Library'); 
                    }}
                >
                    <Text style={styles.sidebarText}>Biblioteca Virtual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                    <Text style={styles.sidebarText}>Grade de Horários</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                    <Text style={styles.sidebarText}>Histórico de Presença</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                    <Text style={styles.sidebarText}>Lista de Tarefas</Text>
                </TouchableOpacity>
            </LinearGradient>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 100,
        left: -20,
        width: 300,
        height: '100%',
        padding: 20,
        zIndex: 2,
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    sidebarGradient: {
        flex: 1,
        borderRadius: 10,
    },
    sidebarItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    sidebarText: {
        fontSize: 14,
        color: colors.description,
        fontFamily: 'poppins-bold',
        paddingLeft: 10,
    },
});

export default Sidebar;
