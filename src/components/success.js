/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, TextInput, View,Text,ImageBackground, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import BackImage from '../assets/cinema.jpg'
import { Actions } from 'react-native-router-flux';

 export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '', 
      Password: ''};
  }

  componentDidMount(){
    this.loadInitialState().done();
  }

  loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user');
    if(value !== null){
      Actions.Home();
    }
  }

  Login(){
      Actions.Login();
  }

 

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Text style={styles.textbold}>You have Successfully created a MORVEL account.</Text>
          <Text>__________________________________</Text>
          <Text>Thank you for your registration! Your account is now ready to use.</Text>
          </View>
          <TouchableWithoutFeedback onPress={this.Login}>
              <Text style={styles.texcolor}>click her to continue....</Text>
              </TouchableWithoutFeedback>
      </View>
      

    );
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textbold:{
    fontWeight: 'bold',
    
  },
  texcolor:{
color: 'blue',
fontWeight: 'bold',
fontSize: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer:{
    margin: 50,
    backgroundColor: "greenyellow",
    borderWidth: 2,
    borderColor: 'green',
    padding: 20,
    width: '90%'
},
heading:{
  color: "white",
  fontSize: 40,
  fontWeight: "bold",
  fontStyle: "italic",
  textShadowColor: '#252525',
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 25,
  marginBottom: 20
},


  input:{
    fontSize:16,
    height: 40,
    padding:10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
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
 buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});


