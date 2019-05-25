import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

import SideMenu from "react-native-side-menu";
import List from "./PopularList";
import Slide from "./Slider";
import Header from "./Header";
import Menu from "./Menu";
import PopularList from "./PopularList";
import CFmovies from "./CFmovies";
import Movienov from "./Movienovel";
import Cfnov from "./CFnovels";


export class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          usernamer: this.props.text1
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      updateMenu(isOpen) {
        this.setState({ isOpen });
      }

      Home = () =>{
        alert(this.state.usernamer)
      }

  render() {
    return (
       <View style={[{ flex: 1 }, styles.container]}>
      
      <SideMenu
        menu={<Menu />}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenu(isOpen)}
      >
      
        <Header toggle={this.toggle.bind(this)} />
        <ScrollView>
        <Slide />
        <PopularList />
        <CFmovies />
        <Cfnov/>
        <Movienov/>
        </ScrollView>

      
      </SideMenu>
      
    </View> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black"
    },
    button: {
  alignSelf: 'stretch',
  margin: 20,
  padding: 20,
  backgroundColor: 'blue',
  borderWidth: 1,
  borderColor: '#fff',
  backgroundColor: 'rgba(255,255,255,0.6)'
},
  });

export default MainMenu
