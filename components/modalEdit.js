import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

const ModalEdit = ({ visible, item, onClose, onEdit }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(item);
    }, [item]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Êtes-vous sûr de vouloir éditer cet objectif ?</Text>
                    <TextInput
                        style={styles.TextInputAjout}
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={onClose}
                    >
                        <Text style={styles.textStyle}>Annuler</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonDelete]}
                        onPress={() => onEdit(inputValue)}
                    >
                        <Text style={styles.textStyle}>Confirmez</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
        width: 100,
    },
    TextInputAjout: {
        height: 40,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonDelete: {
        backgroundColor: 'green',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalEdit;
