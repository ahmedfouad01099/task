import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from "../Screens/Details/Details";
import Home from "../Screens/Home/Home";
import AddPost from "../Screens/AddPost/AddPost";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Add Post" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
