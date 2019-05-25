import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';


export default class FbsignOut extends Component {

  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  initUser(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        user.name = json.name
        user.id = json.id
        user.user_friends = json.friends
        user.email = json.email
        user.username = json.name
        user.loading = false
        user.loggedIn = true
        user.avatar = setAvatar(json.id)
      })
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK')
      })
  }

  render() {
    return (
      <View >
        <LoginButton style={styles.button}
        readPermissions={['public_profile']}
          
          onLogoutFinished={() => Actions.Login()}/>
          {console.log(this.state.accessToken)}
      </View>
    );
  }
};


const styles = StyleSheet.create({

button: {
  alignSelf: 'stretch',
  
  padding: 20,
  borderWidth: 1,
 width: 20,
 height:20
}
});