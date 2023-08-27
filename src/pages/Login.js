
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from '@rneui/themed';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const entrar = () => {
    navigation.navigate('Home');
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.heading}>
        Welcome back!
      </Text>

      <View style={styles.form}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={() => entrar()}
        />
         <Button
          title="Sign Up"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={styles.loginButton}
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
    backgroundColor: '#2196F3',
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
