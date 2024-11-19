import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

const Performance = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Avaliação de Desempenho</Text>
            </View>

            <View style={styles.filterContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar Matéria"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <BarChart
                data={{
                    labels: ["Item 1", "Item 2", "Item 3", "Item 4"],
                    datasets: [
                        {
                            data: [20, 45, 28, 80],
                            colors: [
                                (opacity = 1) => `rgba(63, 81, 181, ${opacity})`,
                                (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
                                (opacity = 1) => `rgba(3, 169, 244, ${opacity})`
                            ]
                        }
                    ],
                    legend: ["Série 1", "Série 2", "Série 3"]
                }}
                width={Dimensions.get("window").width - 40}
                height={220}
                yAxisLabel=""
                chartConfig={{
                    backgroundColor: colors.background,
                    backgroundGradientFrom: colors.gradient1,
                    backgroundGradientTo: colors.gradient2,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(800, 10, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={styles.chart}
            />

            <View style={styles.commentContainer}>
                <Image
                    source={require('../image/aluna.png')}
                    style={styles.teacherImage}
                />
                <View style={styles.commentsBox}>
                    <Text style={styles.commentsText}>
                        Espaço para o professor(a) adicionar comentários sobre o desempenho do aluno em relação à atividades, comportamento e provas.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'poppins-bold',
        color: colors.title,
        marginLeft: 10,
        textAlign: 'center',
        flex: 1,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.gradient1,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        backgroundColor: colors.gradient1,
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
    },
    chart: {
        borderRadius: 10,
        marginBottom: 150,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    teacherImage: {
        width: 100,
        height: 200,
        borderRadius: 40,
        marginRight: 16,
    },
    commentsBox: {
        flex: 1,
        backgroundColor: colors.gradient1,
        borderRadius: 10,
        padding: 10,
    },
    commentsText: {
        color: colors.background,
        fontSize: 16,
        fontFamily: 'poppins-regular',
    },
});

export default Performance;
