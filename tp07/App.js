import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image
        source={{ uri: 'https://seeklogo.com/images/C/club-atletico-velez-sarsfield-logo-8C71C89DC7-seeklogo.com.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>¿Olvidaste la clave?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Crear Cuenta</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#8a2be2',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: '80%',
    height: 120,
    marginVertical: 30,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#8a2be2',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8a2be2',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#333',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
