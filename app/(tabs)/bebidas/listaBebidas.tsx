import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native';
import BebidaItem from '@/components/BebidasItem';
import RefreshButton from '@/components/RefreshButton';
import Header from '@/components/Header';

export default function BebidasScreen() {
    const [DATA, setData] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/bebidas`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    }

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/bebidas/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await handleRefresh();
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <View style={styles.container}>
            <Header
                url='https://www.museudagula.com.br/media/upload/ckeditor/2020/02/10/txt-quais-tipos-de-bebidas-que-combinadas-dao-certo.jpg'
                title="Listagem de bebidas"
            />
            <FlatList
                style={styles.containerLista}
                data={DATA}
                renderItem={({ item }) => (
                    <BebidaItem
                        id={item.id}
                        nome={item.nome}
                        cor={item.cor}
                        onDelete={handleDelete}
                    />
                )}
                ListEmptyComponent={<Text>Nenhum dado encontrado.</Text>}
                keyExtractor={item => item.id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
            />
            <RefreshButton onRefresh={handleRefresh} />
        </View>
    )
}

// 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',
        marginTop: 0, // Verifique a margem superior no container
    },
    containerLista: {
        padding: 20,
        paddingBottom: 30,
        marginBottom: 80, // Ajuste a margem inferior para evitar sobreposição
    },
});


