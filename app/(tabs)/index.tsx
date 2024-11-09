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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay mais escuro para melhor contraste
  },
  containerCabecalho: {
    alignItems: 'center',
    marginVertical: 60,
  },
  cabecalho: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 1.8,
    lineHeight: 44,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  btnListagem: {
    backgroundColor: '#9B59B6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 220,
    borderRadius: 12,
    marginVertical: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#9B59B6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  btnCadastro: {
    backgroundColor: '#E74C3C',
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 220,
    borderRadius: 12,
    marginVertical: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  btnEditar: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 220,
    borderRadius: 12,
    marginVertical: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#3498DB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

