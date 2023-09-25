import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pretraga from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator({
  MySearch:Pretraga,
  ShowResult:ResultShowScreen,
},{
  initialRouteName: 'MySearch',
  defaultNavigationOptions:{
  title:'Business Search'
  }
})
export default createAppContainer(navigator);