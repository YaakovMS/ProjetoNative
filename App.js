import React from "react";
import { StyleSheet, View } from "react-native";
import Layout from "./src/components/Layout";

export default function App() {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});