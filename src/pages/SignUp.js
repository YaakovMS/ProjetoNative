import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from '@rneui/themed';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Aqui você pode adicionar a lógica para lidar com o cadastro do usuário
    console.log('Conta Nova')
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={[styles.heading, { color: '#2196F3' }]}>
        Create an Account
      </Text>

      <View style={styles.form}>
        <Input
          placeholder="Name"
          leftIcon={{
            type: 'font-awesome',
            name: 'user',
            color: '#2196F3',
          }}
          onChangeText={setName}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            color: '#2196F3',
          }}
          onChangeText={setEmail}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Password"
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: '#2196F3',
          }}
          onChangeText={setPassword}
          secureTextEntry
          inputStyle={styles.input}
        />
        <Input
          placeholder="Confirm Password"
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: '#2196F3',
          }}
          onChangeText={setConfirmPassword}
          secureTextEntry
          inputStyle={styles.input}
        />
        <Button
          title="Create Account"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={styles.signupButton}
          titleStyle={styles.signupButtonText}
          containerStyle={styles.signupButtonContainer}
          onPress={handleSignUp}
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
    color: '#2196F3', // Adicione esta linha para definir a cor do texto do input
  },
  signupButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  signupButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
});
