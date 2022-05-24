import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PostItem from "./components/PostItem";

function HomeView({ props, posts, loadingPosts }) {
  return (
    <View style={styles.container}>
      {loadingPosts ? (
        <ActivityIndicator size={"large"} color={"#000"} />
      ) : (
        <FlatList
          data={posts}
          renderItem={(item) => <PostItem {...{ item: item.item, props }} />}
        />
      )}
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
