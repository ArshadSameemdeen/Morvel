import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import App from "./App";
import Search from "./src/components/Search";
const { width, height } = Dimensions.get("window");

class IndexApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="App" component={App} title="App" initial />

          <Scene
            key="Search"
            View
            style={[styles.container]}
            component={Search}
            title="Search"
          />
        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: width,
    height: 200
  }
});

export default IndexApp;
