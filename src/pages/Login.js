import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text } from "react-native-elements";
import { Button } from "@rneui/themed";

export default function Login() {
  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const entrar = () =>{
    console.log('entrou')
    console.log(email)
    console.log(password)
  }

  return (
    <View>
      <Text h3>Tell me who are you</Text>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="Password"
        keyboardType="email-address"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
    <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#2196F3',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => entrar() }
            />
    </View>
  );
}
