import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

const PendingTasks = ({ navigation }) => {
    const [completedTasks, setCompletedTasks] = useState({});
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animação que se desloca da posição inicial para 100 e volta para 0
        Animated.loop(
            Animated.sequence([
                Animated.timing(scrollX, {
                    toValue: 100,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(scrollX, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, []);

    const tasks = [
        {
            subject: 'Matemática',
            tasks: [
                { description: 'Trabalho (3 pontos)', dueDate: 'Prazo: 02/09' },
                { description: 'Atividades de casa', dueDate: 'Prazo: 02/09' },
            ],
        },
        {
            subject: 'Geografia',
            tasks: [
                { description: 'Trabalho (3 pontos)', dueDate: 'Prazo: 09/09' },
                { description: 'Atividades de casa', dueDate: 'Prazo: 02/09' },
                { description: 'Apresentação do trabalho', dueDate: 'Prazo: 02/09' },
            ],
        },
        {
            subject: 'História',
            tasks: [
                { description: 'Trabalho (3 pontos)', dueDate: 'Prazo: 02/09' },
                { description: 'Atividades de casa', dueDate: 'Prazo: 02/09' },
            ],
        },
        {
            subject: 'Português',
            tasks: [
                { description: 'Trabalho (3 pontos)', dueDate: 'Prazo: 02/09' },
                { description: 'Atividades de casa', dueDate: 'Prazo: 02/09' },
            ],
        },
        {
            subject: 'Química',
            tasks: [
                { description: 'Trabalho (3 pontos)', dueDate: 'Prazo: 02/09' },
                { description: 'Atividades de casa', dueDate: 'Prazo: 02/09' },
            ],
        },
    ];

    // Função para alternar o estado de uma tarefa
    const toggleTaskCompletion = (subject: string, index: number) => {
        setCompletedTasks(prevState => ({
            ...prevState,
            [subject + index]: !prevState[subject + index] // Alterna o estado de completado
        }));
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={30} color={colors.gradient1} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tarefas Pendentes</Text>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color={colors.gradient1} />
                </TouchableOpacity>
            </View>

            {/* Lista de tarefas */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {tasks.map((task, taskIndex) => (
                    <LinearGradient
                        key={taskIndex}
                        colors={[colors.gradient1, colors.gradient2]}
                        style={styles.card}
                    >
                        <Text style={styles.subjectText}>Matéria: {task.subject}</Text>
                        {task.tasks.map((taskDetail, index) => (
                            <View key={index} style={styles.taskRow}>
                                <TouchableOpacity 
                                    style={styles.checkButton} 
                                    onPress={() => toggleTaskCompletion(task.subject, index)}
                                >
                                    {completedTasks[task.subject + index] ? (
                                        <AntDesign name="checkcircle" size={26} color="#32CD32" />
                                    ) : (
                                        <AntDesign name="checkcircleo" size={26} color={colors.secondary} />
                                    )}
                                </TouchableOpacity>
                                <Text 
                                    style={[
                                        styles.taskText, 
                                        completedTasks[task.subject + index] && styles.completedTaskText
                                    ]}
                                >
                                    {'\u2022'} {taskDetail.description} - {taskDetail.dueDate}
                                </Text>
                            </View>
                        ))}
                    </LinearGradient>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 25,
    },
    headerTitle: {
        fontSize: 24,
        color: colors.title,
        fontFamily: 'poppins-bold',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    subjectText: {
        color: colors.description,
        fontSize: 18,
        fontFamily: 'poppins-bold',
        marginBottom: 10,
    },
    taskRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkButton: {
        marginRight: 10,
    },
    taskText: {
        color: colors.description,
        fontSize: 14,
        fontFamily: 'poppins-light',
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: colors.description,
    },
});

export default PendingTasks;