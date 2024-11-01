import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl, Image } from 'react-native';

export default function BebidasScreen() {
    const [DATA, setData] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/bebidas`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.capa}
                source={{ uri: 'https://www.museudagula.com.br/media/upload/ckeditor/2020/02/10/txt-quais-tipos-de-bebidas-que-combinadas-dao-certo.jpg' }}
            />
            <View style={styles.containerCabecalho}>
                <Text style={styles.cabecalho}>Listagem de Bebidas</Text>
            </View>
            <FlatList
                style={styles.containerLista}
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.textoLista}>{item.nome} - <Text style={styles.corTexto}>{item.cor}</Text></Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyMessage}>Nenhum dado encontrado.</Text>}
                keyExtractor={item => item.id.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828', // Cor de fundo mais suave
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    containerLista: {
        padding: 20,
        paddingBottom: 30,
    },
    containerCabecalho: {
        alignItems: 'center',
        marginBottom: 10,
    },
    cabecalho: {
        color: '#FFBE00',
        fontSize: 32, // Aumentar o tamanho da fonte
        fontWeight: 'bold',
        letterSpacing: 1, // Espaçamento entre letras
    },
    capa: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Espaço entre o nome e a cor
        backgroundColor: '#3A3A3A', // Cor de fundo dos itens
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    textoLista: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600', // Peso da fonte
        flex: 1,
    },
    corTexto: {
        fontWeight: '700',
        color: '#FFBE00', // Cor vibrante para a cor da bebida
        fontSize: 18,
    },
    emptyMessage: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 20,
        fontStyle: 'italic', // Texto em itálico para um estilo diferenciado
    },
});
