import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";

const show_first = [
  {
    key: 1,
    name: "One",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },

  {
    key: 2,
    name: "Two",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/177/444251.jpg"
  },
  {
    key: 3,
    name: "Three",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/177/442821.jpg"
  },
  {
    key: 4,
    name: "Four",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg"
  },
  {
    key: 5,
    name: "Five",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/179/448825.jpg"
  },
  {
    key: 6,
    name: "Six",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 7,
    name: "Seven",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 8,
    name: "Eight",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  }
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: ""
    };
  }
  filter(text) {
    const newData = show_first.filter(function(item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      text: text
    });
  }
  deleteData() {
    this.setState({ text: "", data: "" });
  }
  _renderItem(item) {
    return (
      <Image key={item.key} style={styles.image} source={{ uri: item.image }} />
    );
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Icon
            name="search"
            color="grey"
            size={18}
            style={styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            onChangeText={text => this.filter(text)}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="grey"
            keyboardAppearance="dark"
            autoFocus={true}
          />
          {this.state.text ? (
            <TouchableWithoutFeedback onPress={() => this.deleteData()}>
              <Icon
                name="times-circle"
                color="grey"
                size={18}
                style={styles.iconInputClose}
              />
            </TouchableWithoutFeedback>
          ) : null}
          <TouchableWithoutFeedback
            style={styles.cancelButton}
            onPress={() => goBack()}
          >
            <View style={styles.containerButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <FlatList
            style={{ marginHorizontal: 5 }}
            data={this.state.data}
            numColumns={3}
            columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
            renderItem={({ item }) => this._renderItem(item)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: width,
    height: 200
  },
  header: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#3a3a3a",
    paddingBottom: 5,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  },
  searchIcon: {
    position: "absolute",
    top: 18,
    left: 15,
    zIndex: 1,
    backgroundColor: "transparent"
  },
  iconInputClose: {
    position: "absolute",
    top: 17,
    right: 94,
    backgroundColor: "transparent",
    zIndex: 1
  },
  input: {
    width: width - width / 4,
    height: 40,
    backgroundColor: "#323232",
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3,
    color: "grey"
  },
  cancelButtonText: {
    color: "white"
  },
  image: {
    marginRight: 5,
    width: 115,
    height: 170
  }
});

export default Search;
