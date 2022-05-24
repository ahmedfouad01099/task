import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation/Navigation";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle={"dark-content"}
          animated={true}
        />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}
