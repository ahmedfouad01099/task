import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { onChangingPostInput } from "../../Redux/actions/home";
import AddingPostBtn from "./components/AddingPostBtn";
import AddingPostTxtInput from "./components/AddingPostTxtInput";

function AddPostView({ postForm, dispatch, props, loadingAddPost }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => props.navigation.goBack()}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Adding post</Text>
        <View />
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddingPostTxtInput
          label={"Title"}
          placeholder={"Enter post title"}
          keyboardType={"default"}
          onChangeText={(txt) => dispatch(onChangingPostInput(txt, "title"))}
          value={postForm.title.value}
          valid={postForm.title.valid}
          validationErr={postForm.title.validationError}
        />

        <AddingPostTxtInput
          label={"Desc"}
          placeholder={"Enter post desc"}
          keyboardType={"default"}
          onChangeText={(txt) => dispatch(onChangingPostInput(txt, "desc"))}
          value={postForm.desc.value}
          valid={true}
        />

        <AddingPostTxtInput
          label={"Image Url"}
          placeholder={"Enter post image url"}
          keyboardType={"default"}
          onChangeText={(txt) => dispatch(onChangingPostInput(txt, "url"))}
          value={postForm.url.value}
          valid={postForm.url.valid}
          validationErr={postForm.url.validationError}
        />
      </View>

      <AddingPostBtn {...{ postForm, dispatch, props, loadingAddPost }} />
    </View>
  );
}

export default AddPostView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
});
