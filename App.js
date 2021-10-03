import Home from './components/screens/home';
import Services from './components/screens/services';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={Home} />
       <Drawer.Screen name="Services" component={Services} />
     </Drawer.Navigator>
  </NavigationContainer>
  );
  }