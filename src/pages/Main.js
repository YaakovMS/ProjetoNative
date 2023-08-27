import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

export default function Main({ navigation }) {
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredItem}>
        <Text style={styles.text}>Main Page</Text>
        <Button
          title="Touch to start"
          onPress={goToLoginPage}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredItem: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
