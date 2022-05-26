import React from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TouchableCmp from "../../../Components/TouchableCmp";
import { onAddingPost } from "../../../Redux/actions/home";

function AddingPostBtn({ postForm, dispatch, props, loadingAddPost }) {
  const disableBtn = !(postForm.title.valid && postForm.url.valid);

  return (
    <TouchableCmp
      style={
        disableBtn
          ? { ...styles.btnContainer, backgroundColor: "#ccc" }
          : styles.btnContainer
      }
      disabled={disableBtn}
      onPress={() => dispatch(onAddingPost(postForm, props))}
    >
      <View
        style={
          Platform.OS === "android"
            ? disableBtn
              ? { ...styles.btnContainer, backgroundColor: "#ccc" }
              : styles.btnContainer
            : {}
        }
      >
        {loadingAddPost ? (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"small"} color={"#fff"} />
          </View>
        ) : (
          <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
        )}
      </View>
    </TouchableCmp>
  );
}

export default AddingPostBtn;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#000",
    width: "60%",
    padding: 10,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 10,
  },
});
