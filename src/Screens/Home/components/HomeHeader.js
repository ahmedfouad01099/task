import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

function HomeHeader({ props }) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 10,
      }}
    >
      <View />
      <Text style={{ fontSize: 18 }}>All Posts</Text>
      <View>
        <MaterialIcons
          onPress={() => props.navigation.navigate("Add Post")}
          name="post-add"
          size={30}
          color="black"
        />
      </View>
    </View>
  );
}

export default HomeHeader;
