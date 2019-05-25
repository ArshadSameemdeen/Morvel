import React, {Component} from 'react';
import { ScrollView , TouchableHighlight, View,Text, StyleSheet, ImageBackground,  Image, TouchableOpacity} from 'react-native';
import BackImage from '../assets/seats.jpg';
import { Actions } from 'react-native-router-flux';
export default class Quiz extends Component {

  constructor(){
    super();
    this.state={
      checked: false
    }
  }

  CheckBoxOperation(){
    this.setState({
      checked: !this.state.checked
    })
  }

  movies(){
        Actions.movies();
    }
  
    render() {
      return (
         <ImageBackground source={BackImage} style={styles.BackImage}>
      
      <ScrollView  contentContainerStyle={styles.contentContainer}>
      
      
        <Text style={styles.heading}>SignUp Here</Text>
        <Text style={styles.heading1}>Step 2</Text>
        <Text style={styles.heading1}>Choose Your favorite Genre</Text>
        
        {/* <View style={styles.inputContainer}>
         <TextInput placeholder="Full Name" style={styles.input}/>
         <TextInput placeholder="E-mail ID" style={styles.input}/>
         <TextInput placeholder="Password" style={styles.input}/>
         <TextInput placeholder="Confirm Password" style={styles.input}/>
         <TextInput placeholder="" style={styles.input}/>
         <TextInput placeholder="" style={styles.input}/>
         </View> */}
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Action</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Comedy</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Mystery</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Horror</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Adventure</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.movies}>
           <Text style={styles.buttonText} >Romance</Text>
         </TouchableOpacity>
 
         
       </ScrollView >
       </ImageBackground>
       
       
 
     );
   }
 }
 
 const styles = StyleSheet.create({
  contentContainer: {
     
     justifyContent: 'center',
     alignItems: 'center',
     
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
 Image: {
  width: 50,
  height: 50
},
  buttonText: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 16,
   }
 });
        
  
