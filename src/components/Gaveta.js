import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Atividades from "../pages/Atividades";
import NovaAtividade from "../pages/NovaAtividade";
import SignUp from "../pages/SignUp";

const Drawer = createDrawerNavigator();

export default function Gaveta() {
  const iconColor = "#2196F3"; // Cor azul

  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={Main}
        color= '#2196F3'
        title='Peril'
        options={{ headerShown: false, title: "User" }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              type="font-awesome"
              color= '#2196F3'
              size={size}
            />
          ),
          drawerLabelStyle: { color: "#2196F3" } // Defina a cor do texto para azul
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: "Login",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="sign-in"
              type="font-awesome"
              color= '#2196F3'
              size={size}
            />
          ),
          drawerLabelStyle: { color: "#2196F3" } // Defina a cor do texto para azul
        }}
      />
      <Drawer.Screen
        name="Atividades"
        component={Atividades}
        options={{
          title: "Atividades",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="list"
              type="font-awesome"
              color= '#2196F3'
              size={size}
            />
          ),
          drawerLabelStyle: { color: "#2196F3" } // Defina a cor do texto para azul
        }}
      />
      <Drawer.Screen
        name="Add Atividades"
        component={NovaAtividade}
        options={{
          title: "Nova Atividade",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="plus"
              type="font-awesome"
              color= '#2196F3'
              size={size}
            />
          ),
          drawerLabelStyle: { color: "#2196F3" } // Defina a cor do texto para azul
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          title: "Sign Up",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="user-plus"
              type="font-awesome"
              color= '#2196F3'
              size={size}
            />
          ),
          drawerLabelStyle: { color: "#2196F3" } // Defina a cor do texto para azul
        }}
      />
    </Drawer.Navigator>
  );
}
