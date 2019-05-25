import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";
import { Actions } from "react-native-router-flux";

class CFnovels extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
   
   componentDidMount(){
   fetch("https://morvel--server.herokuapp.com/getcfnovels/20")
   .then(response => response.json())
  
   .then((responseJson)=> {
     this.setState({
      loading: false,
      dataSource: responseJson.cfnovelarray
     })
   })
   .catch(error=>console.log(error)) //to catch the errors if any
   } 

   
   render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const image = 'http://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    const num = 0;
    if(this.state.loading){
     return( 
       <View style={styles.loader}> 
         <ActivityIndicator size="large" color="#0c9"/>
       </View>
   )}
   
   return(
    <View style={{flex: 1}}>
    <Text style={styles.text}>Recommended Novels for you</Text>
      <FlatList
        horizontal
        data={this.state.dataSource}
        //renderItem={({item}) => <Image style={{ width: 120, height: 180 }} source={{ uri: imgURL + item.poster_path }}/>}
        renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={ () => Actions.MovieDetails({id: item.id})}>
                  <View>
                  <Image style={{ width: 120, height: 180 }} source={{ uri: item }}/>
                  </View>
                </TouchableWithoutFeedback>
               )} 
        keyExtractor={({id}, index) => id}
      />
    </View>
  );
   }
 }
   
   const styles = StyleSheet.create({
    text: {
      color: "white"
  },
     container: {
       flex: 1,
       backgroundColor: "#fff"
      },
     loader:{
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#fff"
      },
     list:{
       paddingVertical: 4,
       margin: 5,
       backgroundColor: "#fff"
      }
   });

export default CFnovels;
