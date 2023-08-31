import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

export default function Main({ navigation }) {
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Main.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.bottomContent}>
        <Text style={styles.text}>Main Page</Text>
        <Button
          title="Touch to start"
          onPress={goToLoginPage}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText} // Style for the button text
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
  
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 60, // Increased space below the text and button
    paddingHorizontal: 20,
    backgroundColor: "white", // Background color for the bottom content
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: "black",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15, // Increased padding for the button
    borderRadius: 8,
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 16, // Adjust the button text font size
  },
});
