import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { useAuth } from "../path/to/AuthContext";
import Main from "../pages/Main"; // Import the Main component
import Home from "../pages/Home";

const Stack = createStackNavigator();

const AuthStack = () => {
  const { registeredUser } = useAuth();

  return (
    <Stack.Navigator>
      {registeredUser ? (
        <>
          {/* Navigate to Home if user is authenticated */}
          <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          {/* Main is the initial route */}
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
