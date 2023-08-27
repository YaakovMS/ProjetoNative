import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text, Icon } from 'react-native-elements';
import { Button } from '@rneui/themed';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const entrar = () => {
    navigation.navigate('Home');
    console.log('Logado');
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
  };

  const blueColor = '#2196F3'; // Cor azul

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={[styles.heading, { color: blueColor }]}>
        Welcome back!
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
        />
        <Input
          placeholder="Password"
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
        />
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={[styles.loginButton, { backgroundColor: blueColor }]} // Cor azul
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={() => entrar()}
        />
        <Button
          title="Sign Up"
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
});
