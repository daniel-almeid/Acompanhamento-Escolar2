import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';

export default function Videos() {
    const handleWatchPress = (videoId: string) => {
        Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.mainTitle}>Vídeo Aulas</Text>

            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Filtrar por Matéria" />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.videoContainer}>
                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    style={styles.videoCard}
                >
                    <View style={styles.videoHeader}>
                        <Text style={styles.subject}>História - 2ª Guerra Mundial</Text>
                        <TouchableOpacity
                            style={styles.watchButton}
                            onPress={() => handleWatchPress("Vq9oIj2ecU8")}
                        >
                            <Text style={styles.watchButtonText}>Assistir</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: 'https://img.youtube.com/vi/Vq9oIj2ecU8/0.jpg' }}
                        style={styles.videoThumbnail}
                    />
                </LinearGradient>

                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    style={styles.videoCard}
                >
                    <View style={styles.videoHeader}>
                        <Text style={styles.subject}>Geografia - Globalização</Text>
                        <TouchableOpacity
                            style={styles.watchButton}
                            onPress={() => handleWatchPress("QGvwWyP1S4o")}
                        >
                            <Text style={styles.watchButtonText}>Assistir</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: 'https://img.youtube.com/vi/QGvwWyP1S4o/0.jpg' }}
                        style={styles.videoThumbnail}
                    />
                </LinearGradient>

                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    style={styles.videoCard}
                >
                    <View style={styles.videoHeader}>
                        <Text style={styles.subject}>Biologia - Genética</Text>
                        <TouchableOpacity
                            style={styles.watchButton}
                            onPress={() => handleWatchPress("YjwYJHqxwFY")}
                        >
                            <Text style={styles.watchButtonText}>Assistir</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: 'https://img.youtube.com/vi/YjwYJHqxwFY/0.jpg' }}
                        style={styles.videoThumbnail}
                    />
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 10,
        backgroundColor: colors.background,
    },
    mainTitle: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        marginBottom: 16,
        paddingTop: 60,
        color: colors.title,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 35,
        marginRight: 8,
        fontFamily: 'poppins-regular',
    },
    searchButton: {
        backgroundColor: colors.primary,
        padding: 8,
        borderRadius: 25,
    },
    videoContainer: {
        marginTop: 16,
    },
    videoCard: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    videoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        
    },
    subject: {
        fontSize: 16,
        fontFamily: 'poppins-light',
        color: colors.background,
    },
    watchButton: {
        backgroundColor: colors.gradient2,
        padding: 8,
        borderRadius: 4,
    },
    watchButtonText: {
        color: colors.background,
        fontFamily: 'poppins-light',
    },
    videoThumbnail: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    buttonGradient: {
        borderRadius: 8,
        padding: 12,
    },
});
