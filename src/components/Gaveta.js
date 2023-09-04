import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Atividades from "../pages/Atividades";
import NovaAtividade from "../pages/NovaAtividade";
import SignUp from "../pages/SignUp";
import Perfil from "../pages/Perfil";
import GavetaStyle from "./GavetaStyle";
import { TaskProvider } from "../context/TaskContext";
import { color } from "@rneui/base";

const Drawer = createDrawerNavigator();

export default function Gaveta() {
  const iconColor = "#2196F3"; // Cor azul
  const selectedTextColor = "#fff";
  
  return (
    <TaskProvider>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props) => <GavetaStyle {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: { marginLeft: -25, color: iconColor }, // Defina a cor do texto para azul
          drawerActiveBackgroundColor: "rgba(33, 150, 243, 0.8)",
          drawerActiveTintColor: selectedTextColor, // Defina a cor do texto selecionado
          drawerInactiveTintColor: "rgba(33, 150, 243, 0.8)"
        }}
      >
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
                color={color}
                size={size}
              />
            )
          }}
        />
   
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown :true,
            title: "Home",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home" type="font-awesome" color="#2196F3" size={size} />
            ),
            drawerLabelStyle: { color: "#2196F3" }, // Defina a cor do texto para azul
          }}
        />
     
        <Drawer.Screen
          name="Atividades"
          options={{
            title: "Atividades",
            headerShown :true,
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="list" type="font-awesome" color="#2196F3" size={size} />
            ),
            drawerLabelStyle: { color: "#2196F3" }, // Defina a cor do texto para azul
          }}
        >
          {(props) => (
            <Atividades
              {...props}
              navigation={props.navigation}
              route={props.route}
            />
          )}
        </Drawer.Screen>
        
        <Drawer.Screen
          name="NovaAtividade"
          component={NovaAtividade}
          options={{
            headerShown :true,
            headerLargeTitleStyle : { color: '#fff' },
            title: "Nova Atividade",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="plus" type="font-awesome" color="#2196F3" size={size} />
            ),
            drawerLabelStyle: { color: "#2196F3" }, // Defina a cor do texto para azul
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
                color="#2196F3"
                size={size}
              />
            ),
            drawerLabelStyle: { color: "#2196F3" }, // Defina a cor do texto para azul
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: "Perfil",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="user" type="font-awesome" color="#2196F3" size={size} />
            ),
            drawerLabelStyle: { color: "#2196F3" }, // Defina a cor do texto para azul
          }}
        />
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{
            title: "Sair",
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name="sign-out"
                type="font-awesome"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </TaskProvider>
  );
}
