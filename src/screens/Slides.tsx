import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import colors from '../styles/colors';

const slides = [
    { id: '1', tema: 'História: Feudalismo', descricao: 'Conceitos básicos e fundamentos', url: 'https://nastramasdeclio.com.br/wp-content/uploads/2020/04/FEUDALISMO-SLIDES.pdf' },
    { id: '2', tema: 'Geografia: Globalização', descricao: 'Pilha, fila e árvore', url: 'https://example.com/slide2.pdf' },
    { id: '3', tema: 'História: 2º Guerra Mundial', descricao: 'Bubble sort, merge sort e quick sort', url: 'https://example.com/slide3.pdf' },
    { id: '4', tema: 'História: 1º Guerra Mundial', descricao: 'Componentes, estado e props', url: 'https://example.com/slide4.pdf' },
    { id: '5', tema: 'Biologia: ISTs', descricao: 'SQL, NoSQL e operações CRUD', url: 'https://example.com/slide5.pdf' },
    { id: '6', tema: 'Biologia: Genética e fator RH', descricao: 'SQL, NoSQL e operações CRUD', url: 'https://example.com/slide6.pdf' },
];

const Slides: React.FC = () => {
    const [isSharing, setIsSharing] = useState(false);  // Controla o estado de compartilhamento

    const handleDownload = async (url: string, tema: string) => {
        if (isSharing) {
            Alert.alert("Aguarde", "Já existe um processo de compartilhamento em andamento.");
            return;  
        }

        setIsSharing(true);
        try {
            const fileUri = `${FileSystem.documentDirectory}${tema}.pdf`;

            // Faz o download do arquivo
            const { uri } = await FileSystem.downloadAsync(url, fileUri);
            console.log('Arquivo baixado para:', uri);

            // Verifica se a função de compartilhamento está disponível
            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri); 
            } else {
                Alert.alert("Download Concluído", `O slide "${tema}" foi baixado na pasta do aplicativo.`);
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível baixar ou compartilhar o slide. Tente novamente.");
        } finally {
            setIsSharing(false);  // Libera o controle de compartilhamento
        }
    };

    const renderSlide = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleDownload(item.url, item.tema)}>
            <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.cardGradient}>
                <MaterialCommunityIcons name="microsoft-powerpoint" size={24} color="orange" style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.tema}>{item.tema}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Slides Disponíveis</Text>
            <FlatList
                data={slides}
                renderItem={renderSlide}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.footer}>
                <MaterialCommunityIcons name="download-circle" size={24} color={colors.primary} style={styles.footerIcon} />
                <Text style={styles.footerText}>Clique no card para baixar o Slide</Text>
            </View>
        </View>
    );
};

export default Slides;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        color: colors.title,
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 80, 
    },
    card: {
        width: '100%',
        height: 80,
        marginBottom: 15,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 3,
    },
    cardGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
    },
    icon: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    tema: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        color: colors.background, 
    },
    descricao: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: 'poppins-regular',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.background,
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.gray,
    },
    footerIcon: {
        marginRight: 10,
    },
    footerText: {
        fontSize: 14,
        color: colors.title2,
        fontFamily: 'poppins-regular',
    },
});
