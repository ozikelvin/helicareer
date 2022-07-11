/* eslint-disable prettier/prettier */
// import "react-native-gesture-handler";
/* eslint-disable prettier/prettier */
import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/Home";

const App = () => {
  return (

        <SafeAreaView style={styles.Container}>
            <Home />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
