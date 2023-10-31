import * as React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoadoutBuilder from './src/screens/LoadoutBuilder';
import WeaponList from './src/screens/WeaponsList';
import WeaponDetails from './src/screens/WeaponDetails';
import LoadoutList from './src/screens/LoadoutList';
//import WeaponDetails from './src/screens/WeaponDetails';
//aaaaa

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const WeaponAnalyzerStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="WeaponList" component={WeaponList} options={{ 
      title:"Weapon analyzer", 
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#242424"
      }}}/>
      <Stack.Screen name="WeaponDetails" component={WeaponDetails} options={({ route }) => ({
          title: route.params.name,
          headerTintColor:"#FFF",
          headerStyle: {
            backgroundColor: '#242424',
          },
        })} />
    </Stack.Navigator>
  );

  const LoadoutStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="LoadoutList" component={LoadoutList} options={{ 
      title:"Loadouts", 
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#242424"
      }}}/>
      <Stack.Screen name="LoadoutBuilder" component={LoadoutBuilder} options={{ 
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#242424"
      }}}/>
    </Stack.Navigator>
  );

return (
  <NavigationContainer>
    <Tab.Navigator  
    screenOptions={{
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:"black",
      tabBarStyle:{backgroundColor:"#858585"}}}>
      <Tab.Screen name="Weapon Analyzer" component={WeaponAnalyzerStack} options={{headerShown:false, 
      tabBarIcon: ({ focused, color }) => (
        // metti navigator.goback
        <Image
          source={focused ? require('./assets/weaponAnalyzerFocused.png') : require('./assets/weaponAnalyzer.png')}
          style={{ tintColor: color, width: 60, height: 30 }}
        />
      )}}/>
      <Tab.Screen name="Loadouts" component={LoadoutStack} options={{headerShown:false,
        tabBarIcon: ({ focused, color }) => (
        <Image
          source={focused ? require('./assets/loadoutBuilderFocused.png') : require('./assets/loadoutBuilder.png')}
          style={{ tintColor: color, width: 30, height: 30 }}
        />)}}/>
    </Tab.Navigator>
  </NavigationContainer>
);}


export default App;