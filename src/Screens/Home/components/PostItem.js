import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TouchableCmp from "../../../Components/TouchableCmp";

function PostItem({ item, props }) {
  console.log("5- postItem", item);
  return (
    <TouchableCmp
      key={item.id}
      onPress={() => props.navigation.navigate("Details", { post: item })}
    >
      <View style={styles.container}>
        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.tinyLogo} source={{ uri: item.url }} />
        </View>
        <View style={{ width: "70%" }}>
          <Text style={{ color: "#000" }}>{`Post: ${item.id}`}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
