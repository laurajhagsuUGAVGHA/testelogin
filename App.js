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
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
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

        <Button title="Entrar" onPress={handleLogin} />

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
    height: 150,
    backgroundColor: '#4A90E2', // Cor de fundo do retângulo
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Ajuste a imagem para caber dentro do espaço
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;