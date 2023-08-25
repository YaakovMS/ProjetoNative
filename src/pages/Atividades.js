import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function Atividades() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredItem}>
      <Text>Suas Atividades </Text>
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
