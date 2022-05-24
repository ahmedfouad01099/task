import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PostItem from "./components/PostItem";

function HomeView({ props, posts }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={(item) => <PostItem {...{ item: item.item, props }} />}
      />
    </View>
  );
}

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
