import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface Event {
    title: string;
    date: string;
    additionalInfo?: string;
}

interface EventsScreenProps {
    navigation: {
        goBack: () => void;
    };
}

const EventsScreen: React.FC<EventsScreenProps> = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isModalVisible, setModalVisible] = useState(false);
    const [newEvent, setNewEvent] = useState<Event>({
        title: '',
        additionalInfo: '',
        date: new Date().toLocaleDateString(),
    });

    const [events, setEvents] = useState<Event[]>([
        { title: 'Conselho de classe (Não haverá aula)', date: '19/09/2023' },
        { title: 'Reunião de Pais (Não haverá aula)', date: '21/09/2023' },
        { title: 'Passeio (Saída às 07:00h)', date: '30/09/2023' },
        { title: 'Feriado Nacional', date: '12/10/2023' },
        { title: 'Início das Provas', date: '04/11/2023' },
        { title: 'Término das Provas', date: '08/11/2023' },
        { title: 'Início das Férias', date: '02/12/2023' },
    ]);

    const showEventDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        setSelectedDate(new Date(Number(year), Number(month) - 1, Number(day)));
        setShowCalendar(true);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const saveEvent = () => {
        setEvents([...events, newEvent]);
        closeModal();
        setNewEvent({ title: '', additionalInfo: '', date: new Date().toLocaleDateString() }); 
    };

    const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
        setShowCalendar(false);
        if (date) {
            setNewEvent({ ...newEvent, date: date.toLocaleDateString() });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={30} color={colors.gradient1} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Eventos e Comunicados</Text>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color={colors.gradient1} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {events.map((event, index) => (
                    <TouchableOpacity key={index} onPress={() => showEventDate(event.date)}>
                        <LinearGradient
                            colors={[colors.gradient1, colors.gradient2]}
                            style={styles.card}
                        >
                            <View style={styles.eventRow}>
                                <Text style={styles.eventTitle}>{event.title}</Text>
                                <Text style={styles.eventDate}>{event.date}</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.addButton} onPress={openModal}>
                <Ionicons name="add-circle" size={70} color={colors.gradient1} />
            </TouchableOpacity>

            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Adicionar Novo Evento</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome do evento"
                            value={newEvent.title}
                            onChangeText={(text) => setNewEvent({ ...newEvent, title: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Informação adicional"
                            value={newEvent.additionalInfo}
                            onChangeText={(text) => setNewEvent({ ...newEvent, additionalInfo: text })}
                        />

                        <TouchableOpacity onPress={() => setShowCalendar(true)}>
                            <Text style={styles.dateText}>
                                Data: {newEvent.date || 'Selecione uma data'}
                            </Text>
                        </TouchableOpacity>

                        {showCalendar && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
                                onChange={handleDateChange}
                            />
                        )}

                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={saveEvent} style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        borderRadius: 25,
        padding: 20,
        marginBottom: 20,
    },
    eventRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventTitle: {
        color: colors.description,
        fontSize: 12,
        fontFamily: 'poppins-bold',
    },
    eventDate: {
        color: colors.secondary,
        fontSize: 12,
        fontFamily: 'poppins-regular',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'poppins-bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gradient1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        fontFamily: 'poppins-regular',
    },
    dateText: {
        fontSize: 14,
        color: colors.gradient2,
        marginBottom: 20,
        fontFamily: 'poppins-regular',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveButton: {
        backgroundColor: colors.gradient1,
        padding: 10,
        borderRadius: 10,
    },
    saveButtonText: {
        color: 'white',
        fontFamily: 'poppins-bold',
    },
    cancelButton: {
        backgroundColor: colors.gradient2,
        padding: 10,
        borderRadius: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontFamily: 'poppins-bold',
    },
});

export default EventsScreen;
