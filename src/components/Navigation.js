import { createStackNavigator, createAppNavigator } from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const Navigation = createAppNavigator(MainNavigator);

export default Navigation;
