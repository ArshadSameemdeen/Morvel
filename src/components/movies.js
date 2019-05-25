import React, {Component} from 'react';
import { TouchableHighlight, Image, View,Text,ScrollView, StyleSheet, ImageBackground, TouchableOpacity,AsyncStorage} from 'react-native';
import BackImage from '../assets/seats.jpg';
import CheckBox from 'react-native-check-box'
import { Actions } from 'react-native-router-flux';

export default class movies extends Component {

  constructor(props){
    super(props);
    this.state={
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false,
      isChecked6: false,
      isChecked7: false,
      isChecked8: false,
      isChecked9: false,
      isChecked10: false,
      movies: [],
      name: this.props.text1,
      email: this.props.text2,
      Password: this.props.text3
    };
  }

//   if(isChecked1 = true){
//     var joined = this.state.movies.concat('new value');
// this.setState({ movies: joined })
//   }

 
  
    render() {
      
      return (
        <ImageBackground source={BackImage} style={styles.BackImage}>
      
        <ScrollView  contentContainerStyle={styles.contentContainer}>
      
      
        <Text style={styles.heading}>SignUp Here</Text>
        <Text style={styles.heading1}>Step 3</Text>
        <Text style={styles.heading1}>Choose a movie you like</Text>

        <View style={styles.row}>
        <View style={styles.inputContainer}>
        <TouchableHighlight>
        <CheckBox
        value={"1"}
            style={{flex: 1, padding: 10, fontSize: 50}}
            onClick={()=>{
              this.setState({
                isChecked1:!this.state.isChecked1
              })
            }}
            isChecked={this.state.isChecked1}
            
        />
        </TouchableHighlight>
        <Image
        style={styles.button}
        source={require('../assets/end.jpg')}
      />
      </View>

      <View style={styles.inputContainer}>
        <CheckBox
        value={"2"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked2:!this.state.isChecked2
              })
            }}
            isChecked={this.state.isChecked2}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/cap.jpg')}
      />
      </View>
        </View>

        
        <View style={styles.row}>
        <View style={styles.inputContainer}>
        <CheckBox
        value={"3"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked3:!this.state.isChecked3
              })
            }}
            isChecked={this.state.isChecked3}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/mud.png')}
      />
      </View>

      <View style={styles.inputContainer}>
        <CheckBox
        value={"4"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked4:!this.state.isChecked4
              })
            }}
            isChecked={this.state.isChecked4}
           
        />
        <Image
        style={styles.button}
        source={require('../assets/us.png')}
      />
      </View>
        </View>

        
        <View style={styles.row}>
        <View style={styles.inputContainer}>
        <CheckBox
        value={"5"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked5:!this.state.isChecked5
              })
            }}
            isChecked={this.state.isChecked5}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/jaw.jpg')}
      />
      </View>

      <View style={styles.inputContainer}>
        <CheckBox
        value={"6"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked6:!this.state.isChecked6
              })
            }}
            isChecked={this.state.isChecked6}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/get.jpg')}
      />
      </View>
        </View>

        
        <View style={styles.row}>
        <View style={styles.inputContainer}>
        <CheckBox
        value={"7"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked7:!this.state.isChecked7
              })
            }}
            isChecked={this.state.isChecked7}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/spi.png')}
      />
      </View>

      <View style={styles.inputContainer}>
        <CheckBox
        value={"8"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked8:!this.state.isChecked8
              })
            }}
            isChecked={this.state.isChecked8}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/22.png')}
      />
      </View>
        </View>

        
        <View style={styles.row}>
        <View style={styles.inputContainer}>
        <CheckBox
        value={"9"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked9:!this.state.isChecked9
              })
            }}
            isChecked={this.state.isChecked9}
            
        />
        <Image
        style={styles.button}
        source={require('../assets/ring.jpg')}
      />
      </View>

      <View style={styles.inputContainer}>
        <CheckBox
        value={"10"}
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked10:!this.state.isChecked10
              })
            }}
            isChecked={this.state.isChecked10}
           
        />
        <Image
        style={styles.button}
        source={require('../assets/mat.jpg')}
      />
      </View>
        </View>
    <TouchableOpacity style={styles.button1} onPress={this.success}>
          <Text style={styles.buttonText} >Confirm</Text>
        </TouchableOpacity>
         
    </ScrollView >
       </ImageBackground>
       
       
 
     );
   }
   success=()=>{
    if(this.state.isChecked1 ==true){
      this.state.movies.push('Avengers: Endgame');
      
    
    }
    if(this.state.isChecked2 ==true){
      this.state.movies.push('Captain Marvel');
      
    
    }
    if(this.state.isChecked3 ==true){
      this.state.movies.push('Mudbound');
      
    
    }
    if(this.state.isChecked4 ==true){
      this.state.movies.push('Us');
      
    
    }
    if(this.state.isChecked5 ==true){
      this.state.movies.push('Jaw');
      
    
    }
    if(this.state.isChecked6 ==true){
      this.state.movies.push('Get Out');
      
    
    }
    if(this.state.isChecked7 ==true){
      this.state.movies.push('Spider-Man: Into the Spider-Verse');
      
    
    }
    if(this.state.isChecked8 ==true){
      this.state.movies.push('22 Jump Street');
      
    
    }
    if(this.state.isChecked9 ==true){
      this.state.movies.push('The Lord of the Rings: The Fellowship of the Ring');
      
    
    }
    if(this.state.isChecked10 ==true){
      this.state.movies.push('The Matrix');
      
    
    }

    
    

    fetch('http://192.168.8.100:3000/movies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movies: this.state.movies,
        username: this.state.name,
        password: this.state.Password
      }),
    })

    {/* .then((response) => response.json())
    .then((res) => {

      alert(res.message); */}

      {/* if(res.success === true){
        AsyncStorage.setItem('user', res.user); */}
        Actions.success();
      {/* }
      else{
        alert(res.message);
      }
    })
     .done(); */}
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
   row:{
    flexDirection: 'row',
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
  
   flex:1,
   width: 120,
   height: 200,
   color: 'blue',
   alignSelf: 'stretch',
   margin: 1,
   padding: 1,
   backgroundColor: 'blue',
   borderWidth: 1,
   borderColor: '#fff',
   backgroundColor: 'rgba(255,255,255,0.6)'
 },
 button1: {
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
        
  
