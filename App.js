import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer
import Gaveta from "./src/components/Gaveta";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer> 
      <View style={styles.container}>
        <Gaveta />
      </View>
    </NavigationContainer> 
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
