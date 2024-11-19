import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Card from '../components/Card';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

const BulletinTable: React.FC = () => {
    // Estado para gerenciar as notas
    const [subjects, setSubjects] = useState<{ subject: string; grades: string[] }[]>([
        { subject: 'Matemática', grades: ['8.5', '9.0', '7.5', '10.0'] },
        { subject: 'Português', grades: ['9.0', '8.0', '9.5', '9.0'] },
        { subject: 'Geografia', grades: ['9.0', '9.5', '10.0', '9.5'] },
        { subject: 'História', grades: ['9.0', '8.5', '9.0', '9.5'] },
        { subject: 'Ed. Física', grades: ['9.0', '9.0', '10.0', '9.0'] },
    ]);

    const [newSubject, setNewSubject] = useState('');
    const [newGrade, setNewGrade] = useState('');
    const navigation = useNavigation(); 

    const addSubject = () => {
        if (newSubject.trim() === '' || newGrade.trim() === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos...');
            return;
        }

        // Adiciona nova disciplina com grades vazias 
        setSubjects([...subjects, { subject: newSubject, grades: [newGrade] }]);
        setNewSubject('');
        setNewGrade('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome
                    name="arrow-left"
                    size={30}
                    color={colors.gradient1}
                    style={styles.icon}
                    onPress={() => navigation.goBack()} 
                />
                <Text style={styles.headerText}>Boletim do Aluno</Text>
                <Ionicons name="notifications-outline" size={30} color={colors.gradient1} style={styles.icon} />
            </View>

            <View style={styles.cardContainer}>
                <Card
                    title="Aluno: Fernanda"
                    imageSource={require('../image/aluna.png')}
                    onPress={() => console.log('Acessar boletim')}
                />
                <Text style={styles.shiftText}>Turno: Manhã</Text>
            </View>

            <ScrollView style={styles.tableContainer}>
                <ScrollView horizontal>
                    <View>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Disciplinas</Text>
                            <Text style={styles.tableCell}>1º Bimestre</Text>
                            <Text style={styles.tableCell}>2º Bimestre</Text>
                            <Text style={styles.tableCell}>3º Bimestre</Text>
                            <Text style={styles.tableCell}>4º Bimestre</Text>
                        </View>
                        {subjects.map((item, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={styles.tableCell}>{item.subject}</Text>
                                {item.grades.map((grade, gradeIndex) => (
                                    <Text key={gradeIndex} style={styles.tableCell}>{grade}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Disciplina"
                    value={newSubject}
                    onChangeText={setNewSubject}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nota"
                    keyboardType="numeric"
                    value={newGrade}
                    onChangeText={setNewGrade}
                />
                <TouchableOpacity style={styles.addButton} onPress={addSubject}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.downloadButton, { marginTop: 20 }]}>
                <Text style={styles.downloadButtonText}>Faça o Download do Boletim</Text>
            </TouchableOpacity>
            <Ionicons name="cloud-download" size={40} color={colors.gradient1} style={styles.downloadIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 40,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    cardContainer: {
        marginBottom: 20,
        position: 'relative',
    },
    shiftText: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        color: colors.background,
        position: 'absolute',
        top: 25,
        right: 20,
    },
    tableContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gradient1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    tableHeader: {
        fontSize: 20,
        fontFamily: 'poppins-bold',
        color: colors.gradient1,
        marginBottom: 10,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.gradient1,
    },
    tableCell: {
        fontSize: 12,
        fontFamily: 'poppins-bold',
        color: colors.title,
        flex: 1,
        textAlign: 'center',
        minWidth: 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gradient1,
        borderRadius: 25,
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    addButton: {
        backgroundColor: colors.gradient1,
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontFamily: 'poppins-bold',
    },
    downloadButton: {
        backgroundColor: colors.gradient1,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
    },
    downloadButtonText: {
        color: colors.background,
        fontFamily: 'poppins-bold',
    },
    downloadIcon: {
        alignSelf: 'center',
        marginTop: 10,
    },
    icon: {
        marginHorizontal: 60,
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        color: colors.title,
    },
});

export default BulletinTable;
