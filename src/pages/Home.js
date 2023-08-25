import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredItem}>
      <Text>Welcome Home </Text>
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
    // Estilos para o item centralizado
  },
});
