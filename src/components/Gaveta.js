import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home"; // Certifique-se de ajustar o caminho com base na sua estrutura de arquivos
import Login from "../pages/Login";
import Atividades from "../pages/Atividades";

const Drawer = createDrawerNavigator();

export default function Gaveta() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Atividades" component={Atividades} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
