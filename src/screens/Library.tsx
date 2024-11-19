import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const BibliotecaVirtual: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Biblioteca Virtual</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Busque por algum livro" />
                <Ionicons name="search" size={20} color="blue" style={styles.searchIcon} />
            </View>

            <Text style={styles.sectionTitle}>Livros Disponíveis</Text>
            <View style={styles.booksContainer}>
                {[...Array(5)].map((_, index) => (
                    <View key={index} style={styles.bookPlaceholder} />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Slides')}>
                <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>Slides</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Videos')}>
                <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>Video Aulas</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Image source={require('../image/biblioteca.png')} style={styles.illustration} />
        </ScrollView>
    );
};

export default BibliotecaVirtual;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        marginBottom: 16,
    },
    backIcon: {
        position: 'absolute',
        left: 0,
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        color: colors.title,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray,
        borderRadius: 25,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        padding: 8,
        fontFamily: 'poppins-light',
    },
    searchIcon: {
        marginLeft: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'poppins-regular',
        marginBottom: 8,
    },
    booksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    bookPlaceholder: {
        width: 70,
        height: 90,
        backgroundColor: colors.primary,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    button: {
        width: 250,
        height: 80,
        borderRadius: 8,
        paddingVertical: 12,
        marginBottom: 20,
    },
    buttonGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'poppins-bold',
    },
    illustration: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        paddingTop: 300,
    },
});
