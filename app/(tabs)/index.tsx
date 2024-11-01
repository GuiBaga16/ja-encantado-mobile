import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Pro-wallpaper-1.jpeg')}
      />

      <View style={styles.overlay} />
      <View style={styles.containerCabecalho}>
        <Text style={styles.cabecalho}>Bem-vindo ao app de Bebidas</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnListagem}>
          <Text style={styles.buttonText}>Listagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEditar}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3c',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajuste a opacidade do overlay conforme necessário
  },
  containerCabecalho: {
    alignItems: 'center',
    marginVertical: 50,
  },
  cabecalho: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra no texto para destacar
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1.5, // Espaciamento entre letras para melhor leitura
    lineHeight: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 103,
  },
  btnListagem: {
    backgroundColor: '#6A33AA',
    padding: 12,
    width: 200,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  btnCadastro: {
    backgroundColor: '#6A33AA',
    padding: 12,
    width: 200,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  btnEditar: {
    backgroundColor: '#6A33AA',
    padding: 12,
    width: 200,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
