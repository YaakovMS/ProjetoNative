import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

export default function Main({ navigation }) {
  const goToNovaAtividade = () => {
    navigation.navigate('NovaAtividade');
  };
  
  const goToAtividades = () =>{
    navigation.navigate('Atividades')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/inicio.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.bottomContent}>
        <Button
          title="Adicionar Atividades"
          onPress={goToNovaAtividade}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
        <Button
          title="Minhas Atividades"
          onPress={goToAtividades}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
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
    paddingVertical: 20, // Ajustei o espaço abaixo do texto e do botão
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#2196F3",
    marginBottom: 20, // Espaçamento entre os botões
  },
  buttonText: {
    fontSize: 16,
  },
});
