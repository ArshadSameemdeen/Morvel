import React, {Component} from 'react';
import {StyleSheet, TextInput, View,Text,ImageBackground, TouchableOpacity, AsyncStorage, TouchableHighlight,Image } from 'react-native';
import BackImage from '../assets/seats.jpg';
import { Actions } from 'react-native-router-flux';

export default class SignUp extends Component {


  constructor(props){
    super(props);
    this.state = {
      name: '', 
      email: '',
      Password: '',
      conpassword: '',
    };
  }

  
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       error: null, // added this
//     };
//   }
  
//   isValid() {
//     const { email, password } = this.state;
//     let valid = false;

//     if (email.length > 0 && password.length > 0) {
//       valid = true;
//     }

//     if (email.length === 0) {
//       this.setState({ error: 'You must enter an email address' });
//     } else if (password.length === 0) {
//       this.setState({ error: 'You must enter a password' });
//     }

//     return valid;
//   }

//   onCreateAccount() {
//     const { email, password } = this.state;

//     if (this.isValid()) {
//       // do stuff
//     }
//   }

  render() {
    return (
     <ImageBackground source={BackImage} style={styles.BackImage}>
      
     <View style={styles.container}>
     
     
       <Text style={styles.heading}>SignUp Here</Text>
       <Text style={styles.heading1}>Step 1</Text>
       
       <View style={styles.inputContainer}>
        <TextInput 
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        placeholder="Full Name" style={styles.input}/>
        <TextInput
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
         placeholder="E-mail ID" style={styles.input}/>
        <TextInput
        onChangeText={(Password) => this.setState({Password})}
        value={this.state.Password}
         placeholder="Password" style={styles.input}/>
        <TextInput
        onChangeText={(conpassword) => this.setState({conpassword})}
        value={this.state.conpassword}
         placeholder="Confirm Password" style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.Quiz}>
          <Text style={styles.buttonText} >Continue</Text>
        </TouchableOpacity>
        {/* <TouchableHighlight style={styles.button} onPress={this.Quiz}>
        <Image
        style={styles.Image}
        source={require('../assets/popcorn1.jpg')}
      />
        </TouchableHighlight> */}

        {/* <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
      <Image
        
        source={require('../assets/popcorn1.jpg')}
      />
    </TouchableHighlight> */}
        
      </View>
      </ImageBackground>
      
      

    );
  }

  Quiz = () => {
    
   
    
    if(this.state.name != '' && this.state.email != '' && this.state.Password != '' && this.state.conpassword != ''){

      if(this.state.Password != this.state.conpassword || this.state.Password =='' || this.state.conpassword ==''){
        alert("Please confirm the password correctly")
      }else{
     
      
    

    // fetch('http://192.168.8.100:3000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     Password: this.state.Password,
    //     // sample: 'works',
    //     conpassword: this.state.conpassword,
    //   }),
    // })

    // .then((response) => response.json())
    // .then((res) => {

      // alert(res.message);
      

      // if(res.success === true){
      //   AsyncStorage.setItem('signup', res.signup);
        Actions.movies({text1: this.state.name, text2: this.state.email, text3: this.state.Password});
      }
    //   }
    //   else{
    //     alert(res.message);
    //   }
    // })
    //  .done();
  }else{
    alert('All fields must be filleds');
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  BackImage:{
    width: "100%",
    flex:1,
   
  },
  // Image:{
  //   width: 50,
  //   height: 50
    
   
  // },
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
heading1:{
  color: "white",
  fontSize: 20,
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
  color: 'blue',
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


 