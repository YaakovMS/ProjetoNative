import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Import StyleSheet
import Gaveta from "./Gaveta";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Gaveta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
