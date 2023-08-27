import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Icon } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { useAuth } from "../context/AuthContext";

export default function Login({ navigation }) {
  const { registeredUser } = useAuth(); // Use the context hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroEmail, setErroEmail] = useState(null);
  const [erroPassword, setErroPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Basic email validation

  const entrar = () => {
    let erro = false;

    if (!email) {
      setErroEmail("Preencha o campo de email");
      erro = true;
    } else if (!emailRegex.test(email)) {
      setErroEmail("Digite um email válido");
      erro = true;
    } else {
      setErroEmail(null);
    }

    if (!password) {
      setErroPassword("Preencha o campo de senha");
      erro = true;
    } else if (password.length < 6) {
      setErroPassword("A senha deve ter pelo menos 6 caracteres");
      erro = true;
    } else {
      setErroPassword(null);
    }

    if (!erro) {
      // Simulate login using registeredUser data
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        console.log('Logado');
        console.log('Email usado:', email);
        console.log('Senha usado:', password);
        navigation.navigate('Home');
      } else {
        setLoginError("Credenciais inválidas"); // Invalid login credentials
      }
    }
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
  };

  const blueColor = '#2196F3'; // Cor azul

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={[styles.heading, { color: blueColor }]}>
        Bem-vindo de volta!
      </Text>

      <View style={styles.form}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          leftIcon={
            <Icon
              type="font-awesome"
              name="envelope"
              color={blueColor} // Cor azul
            />
          }
          onChangeText={(value) => setEmail(value)}
          inputStyle={[styles.input, { color: blueColor }]} // Cor azul
          errorMessage={erroEmail}
        />
        <Input
          placeholder="Senha"
          leftIcon={
            <Icon
              type="font-awesome"
              name="lock"
              color={blueColor} // Cor azul
            />
          }
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          inputStyle={[styles.input, { color: blueColor }]} // Cor azul
          errorMessage={erroPassword}
        />

        {/* Display login error message */}
        {loginError && <Text style={styles.errorMessage}>{loginError}</Text>}

        <Button
          title="Entrar"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={[styles.loginButton, { backgroundColor: blueColor }]} // Cor azul
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={() => entrar()}
        />
        <Button
          title="Criar Conta"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={[styles.loginButton, { backgroundColor: blueColor }]} // Cor azul
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={() => SignUp()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  heading: {
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    marginBottom: 15,
  },
  loginButton: {
    borderRadius: 5,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
