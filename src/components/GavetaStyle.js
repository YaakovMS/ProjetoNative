import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useAuth } from "../context/AuthContext";

const GavetaStyle = (props) => {
  const { registeredUser, user } = useAuth();
  
  // Add a conditional check to prevent accessing properties of null
  const userName = registeredUser ? registeredUser.name : "";
  const userEmail = registeredUser ? registeredUser.email : "";
  
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "rgba(33, 150, 243, 0.8)" }}>
        <ImageBackground source={require('../../assets/menu.png')} style={{ padding: 20 }}>
          <Image source={require('../../assets/user.png')} style={{ height: 80, width: 80, borderRadius: 30, marginBottom: 10 }}></Image>
          <Text style={{ color: '#fff', fontSize: 20 }}>{userName}</Text>
          <Text style={{ color: '#fff', fontSize: 15 }}>{userEmail}</Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 10, borderTopColor: 'rgba(33, 150, 243, 0.8)', borderTopWidth: 1 }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} style={{ color: 'rgba(33, 150, 243, 0.8)' }} />
            <Text style={{ fontSize: 15, color: 'rgba(33, 150, 243, 0.8)' }}> Tell a friend </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GavetaStyle;
