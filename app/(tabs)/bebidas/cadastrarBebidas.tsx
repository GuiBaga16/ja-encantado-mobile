import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function CadastraBebidas() {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = async () => {
        try {
            await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pessoas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "nome": nome,
                    "dataNascimento": dataNascimento
                })
            });
            setNome('');
            setDataNascimento('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                inputMode='text'
                placeholder='Digite o nome da pessoa'
                placeholderTextColor={'#A1C8E1'}
            />
            <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
                inputMode='text'
                placeholder='Digite a data de nascimento da pessoa'
                placeholderTextColor={'#A1C8E1'}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}>
                    <Text style={styles.text}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C', 
        justifyContent: 'center', 
        padding: 20,
    },
    input: {
        backgroundColor: '#FFF',
        borderColor: '#428df5', 
        borderWidth: 1.5,
        borderRadius: 10, 
        padding: 15, 
        fontSize: 16,
        marginBottom: 15,
        elevation: 1, 
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1E90FF', 
        padding: 12,
        width: '60%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});
