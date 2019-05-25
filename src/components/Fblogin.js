import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

export default class Fblogin extends Component {

  constructor(props) {
    super(props);
    this.state = { accessToken: null, myName: '' };
  }

  initUser=(token)=> {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=EAAF75ZAWunY4BAG0xtEcqc1WGZAxyNgHbgNGZCGpNhzsrnc6rpI7ZATefnb3Q9SQQyB8QgE2nu9JVVALk1bX83gZCzCUtIdJ4m6eqQWM9g5re1ldAZBTPABQyZBZBs3ceH0bidZCK5TaGo14cRBYXTYB71QAlvtZCU8rFpSYur3ZAE6DrXtgQenDrDsfCJ2HGVYLhwJ7BLKYZBCHlAZDZD' + token)
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
        this.setState({
          myName: user.name});
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
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.setState({ accessToken: data.accessToken })
                  }
                )
                .catch(error => {
                      console.log(error)
                      initUser(accessToken)
                    })
                    Actions.home({text1: this.state.myName});
                    {/* Actions.home(); */}
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
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
 width: 340,
 height:20
}
});