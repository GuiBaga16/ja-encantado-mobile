import { View, StyleSheet, Image, Text } from 'react-native';

type HeaderProps = {
    url: string,
    title: string,
}

const Header: React.FC<HeaderProps> = ({ url, title }) => {
    return (
        <View>
            <Image
                style={styles.capa}
                source={{ uri: url }}
            />
            <View style={styles.containerCabecalho}>
                <Text style={styles.cabecalho}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    capa: {
        width: '100%',
        height: 250,
        marginBottom: 15,
    },
    containerCabecalho: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Leve overlay escuro para destacar o título
    },
    cabecalho: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.7)', // Sombra para contraste
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
        paddingHorizontal: 20, // Margem interna para evitar corte de texto
    },
});

export default Header;