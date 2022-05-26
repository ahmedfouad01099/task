import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function AddingPostTxtInput({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  value,
  valid,
  validationErr,
}) {
  return (
    <View style={{ width: "90%", marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`${label}*`}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        style={
          valid ? styles.textinput : { ...styles.textinput, borderColor: "red" }
        }
        onChangeText={onChangeText}
        // contextMenuHidden={false}
      />
      {!valid ? <Text style={{ color: "red" }}>{validationErr}</Text> : null}
    </View>
  );
}

export default AddingPostTxtInput;

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    paddingVertical: 15,
    borderRadius: 20,
    fontSize: 16,
  },
});
