import React from "react";
import { View, Text, StyleSheet } from "react-native";

  export default function SignUp(){
   
      return (
        <View style={styles.container}>
          <View style={styles.centeredItem}>
          <Text>hey!! tell me who are you</Text>
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