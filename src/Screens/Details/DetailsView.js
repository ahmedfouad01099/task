import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import formatAMPM from "../../utils/utility";

function DetailsView({ props, post }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        style={{ width: "100%", marginLeft: 50, marginBottom: 20 }}
        onPress={() => props.navigation.goBack()}
      />
      <Image
        source={{ uri: post.url }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{post.title}</Text>
        <Text style={{ fontSize: 18 }}>{post.desc}</Text>
        <Text style={{ fontSize: 15, marginTop: 5 }}>
          {`Created At: ${formatAMPM(new Date(post.createdAt))}`}
        </Text>
      </View>
    </View>
  );
}

export default DetailsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
});
