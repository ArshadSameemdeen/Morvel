/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, TextInput, View,Text,ImageBackground, TouchableOpacity, AsyncStorage,TouchableWithoutFeedback} from 'react-native';
import BackImage from '../assets/cinema.jpg';
import { Actions } from 'react-native-router-flux';
import FBLogin from './Fblogin';

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
      Actions.list();
    }
  }

  SignUp(){
      Actions.SignUp();
  }

 

  render() {
    return (
      <ImageBackground source={BackImage} style={styles.BackImage}>
      
     <View style={styles.container}>
     
     
       <Text style={styles.heading}>- MORVEL -</Text>
       
       <View style={styles.inputContainer}>
        <TextInput
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        style={styles.input}
        placeholder="E-mail ID"
        />

        <TextInput secureTextEntry={true}
        onChangeText={(Password) => this.setState({Password})}
        value={this.state.Password} 
        style={styles.input} 
        placeholder="Password"  
        />

        </View>
        <TouchableOpacity style={styles.button} onPress={this.Home}>
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
        <FBLogin />

        <TouchableWithoutFeedback  onPress={this.SignUp}>
          <Text style={styles.texcolor} >Sign Up</Text>
        </TouchableWithoutFeedback>


        
      </View>
      </ImageBackground>
      
      

    );
  }

  Home = () => {

    if(this.state.username != '' && this.state.Password != ''){

    fetch('http://192.168.8.100:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        // sample: 'works',
        Password: this.state.Password,
      }),
    })
    
    Actions.home();

    // .then((response) => response.json())
    // .then((res) => {

      // alert(res.message);

    //   if(res.success === true){
    //     AsyncStorage.setItem('user', res.user);
    //     Actions.home();
    //     alert(res.message);
    //   }
    //   else{
    //     alert("wrong");
    //   }
    // })
    //  .done();
    
  }else{
    alert("Please enter the required field to proceed");
  }
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  texcolor:{
    marginTop: 10,
    color: '#33FFF4',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
      },
  BackImage:{
    width: "100%",
    flex:1,
   
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
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)'
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


