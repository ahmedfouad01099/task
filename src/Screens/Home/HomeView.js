import React from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { onFetchingPosts } from "../../Redux/actions/home";
import PostItem from "./components/PostItem";

function HomeView({ props, posts, loadingPosts, error, dispatch }) {
  if (error) {
    return (
      <View style={styles.container}>
        {console.log("15-", error)}
        <Text style={{ marginVertical: 10 }}>{error}</Text>
        <Button onPress={() => dispatch(onFetchingPosts())} title="Try Again" />
      </View>
    );
  }

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
