import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer
import Gaveta from "./src/components/Gaveta";

export default function App() {
  return (
    <NavigationContainer> 
      <View style={styles.container}>
        <Gaveta />
      </View>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
