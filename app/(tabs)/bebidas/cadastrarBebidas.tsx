import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function CadastraBebidas() {
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('');

    const handleSubmit = async () => {
        try {
            await fetch(`${process.env.EXPO_PUBLIC_API_URL}/bebidas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "nome": nome,
                    "cor": cor
                })
            });

            setNome('');
            setCor('');
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
                placeholder='Digite o nome da bebida'
                placeholderTextColor={'#428df5'}
            />

            <TextInput
                style={styles.input}
                value={cor}
                onChangeText={setCor}
                inputMode='text'
                placeholder='Digite a cor da bebida'
                placeholderTextColor={'#428df5'}
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
        backgroundColor: '#1A1A1A', // Fundo mais escuro para um efeito de contraste
        justifyContent: 'center', 
        padding: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)', // Fundo semi-transparente com efeito glassmorphism
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderRadius: 12, 
        padding: 15, 
        fontSize: 16,
        marginBottom: 15,
        color: '#FFF', // Texto branco para contraste com o fundo
        shadowColor: '#FFF', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BDF3', 
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: '70%',
        borderRadius: 25,
        shadowColor: '#00BDF3', // Sombra suave com tom do gradiente
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
        transform: [{ scale: 1 }], // Para animação de clique
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
