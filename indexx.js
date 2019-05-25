import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Details from "./src/components/Details";

class indexx extends Component {
  render() {
    return (
      <View>
        <Text>
          <Details />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default indexx;
