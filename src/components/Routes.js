import React, {Component} from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import MainMenu from './MainMenu';
import MovieDetails from './MovieDetails';
import Login from './Login';
import SignUp from './SignUp';
import Quiz from './Quiz';
import movies from './movies';
import success from './success';




export default class Routes extends Component{
   render(){
       return(
           <Router>
                <Stack key = "root" hideNavBar={true}>
                    <Scene key="Login" component={Login} title="Login"  />
                    <Scene key = "home" component = {MainMenu} title="home" initial={true} />
                    <Scene key = "MovieDetails" component = {MovieDetails} title="MovieDetails"/>
                    {/* <Scene key = "MovieDetails" component = {MovieDetails} title="movies"/> */}
                    <Scene key="movies" component={movies} title="movies" />
                    <Scene key="success" component={success} title="success" />
                    <Scene key="SignUp" component={SignUp} title="SignUp" />
                    <Scene key="Quiz" component={Quiz} title="Quiz" />
                </Stack>
            </Router>
)
}

}
