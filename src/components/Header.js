import React, { Component } from "react";
import FbsignOut from './FBsignOut';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";

import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.props.toggle()}>
          <Icon name="bars" color="white" size={25} />
        </TouchableWithoutFeedback>

        <FbsignOut />

        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Icon
          name="search"
          color="white"
          size={25}
          onPress={() => Actions.Search()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingHorizontal: 15
  },
  logo: {
    width: 200,
    height: 40
  }
});

export default Header;
