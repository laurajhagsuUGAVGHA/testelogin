import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    if (email === 'usuario@teste.com' && password === '123456') {
      Alert.alert('Login realizado com sucesso!');
      // Aqui você pode redirecionar para outra tela
    } else {
      setErrorMessage('Email ou senha incorretos.');
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Por favor, insira o email para recuperar a senha.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Por favor, insira um email válido.');
      return;
    }

    Alert.alert('E-mail de recuperação enviado!', 'Verifique sua caixa de entrada.');
    // Aqui você pode fazer o redirecionamento para uma API de recuperação de senha
  };

  return (
    <View style={styles.container}>
      {/* Retângulo Colorido */}

      <View style={styles.topRectangle}>
        {/* Imagem no topo */}
        <Image
          source={{ uri: '' }} // Substitua com a URL da sua imagem
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.loginContainer}>


        <TextInput
          style={styles.input1}
          placeholder="Usuário"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <Button title="Entrar" onPress={handleLogin} style={styles.botao} />

        {/* Botão Esqueci Minha Senha */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',

  },
  topRectangle: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFCB67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  loginContainer: {
    width: '100%', // Ajuste a largura para 90% da tela
    height: '100%',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 40,
    borderColor: '#FFFF',
    borderWidth: 20, // Largura da borda aumentada
    backgroundColor: '#fff',
    marginTop: -40, // Move o contêiner de login para cima
    alignSelf: 'center', // Centraliza o contêiner
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 250,

  },
  input: {
    height: 65,
    width: 350,
    backgroundColor: '#E9E9E9',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 45,
    marginBottom: 10,
    paddingHorizontal: 10,
    top: -200,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.30, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra (iOS)
    elevation: 10, // Sombra no Android (substitui algumas propriedades de sombra)

  },
  input1: {
    height: 65,
    width: 350,
    backgroundColor: '#E9E9E9',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 45,
    marginBottom: 10,
    paddingHorizontal: 10,
    top: -220,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.30, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra (iOS)
    elevation: 10, // Sombra no Android (substitui algumas propriedades de sombra)

  },
  botao: {
    backgroundColor: '#FFCB67',
    border
  },
  error: {
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

});




export default LoginScreen;