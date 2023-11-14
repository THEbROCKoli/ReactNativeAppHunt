import * as React from "react";
import { useEffect, useCallback, useState } from "react";
import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoadoutBuilder from "./src/screens/LoadoutBuilder";
import WeaponList from "./src/screens/WeaponsList";
import WeaponDetails from "./src/screens/WeaponDetails";
import LoadoutList from "./src/screens/LoadoutList";
import { SafeAreaView } from "react-native-safe-area-context";
//import WeaponDetails from './src/screens/WeaponDetails';
//aaaaa

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const nav = useNavigation();
/*
const App = () => {
  function printLallo() {
    console.log("lallo");
    StackActions.popToTop;
  }
  const WeaponAnalyzerStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="WeaponList"
        component={WeaponList}
        options={{
          title: "Weapon analyzer",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#242424",
          },
        }}
      />
      <Stack.Screen
        name="WeaponDetails"
        component={WeaponDetails}
        options={({ route }) => ({
          title: route.params.name,
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#242424",
          },
        })}
      />
    </Stack.Navigator>
  );

  const LoadoutStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadoutList"
        component={LoadoutList}
        options={{
          title: "Loadouts",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#242424",
          },
        }}
      />
      <Stack.Screen
        name="LoadoutBuilder"
        component={LoadoutBuilder}
        options={{
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#242424",
          },
        }}
      />
    </Stack.Navigator>
  );

  /////////////////////////////////////////////////////
  /*return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="initialRoute"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#858585" },
        }}
      >
        <Tab.Screen
          name="Weapon Analyzer"
          component={WeaponAnalyzerStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              // metti navigator.goback

              <Image
                source={
                  focused
                    ? require("./assets/weaponAnalyzerFocused.png")
                    : require("./assets/weaponAnalyzer.png")
                }
                style={{ tintColor: color, width: 60, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Loadouts"
          component={LoadoutStack}
          options={{
            tabBarButton: ({ onPress, focused, color }) => (
              <Pressable
                onPress={console.log("loggo il nuovo button")}
              ></Pressable>
            ),
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );*/
//////////////////////////////////////////////////////////////////
/*
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="initialRoute"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#858585" },
        }}
      >
        <Tab.Screen
          name="Weapon Analyzer"
          component={WeaponAnalyzerStack}
          options={{
            tabBarButton: ({ nav, focused, color }) => (
              <Pressable
                style={{ flex: 1 }}
                onPress={() => nav.dispatch(StackActions.popToTop())}
              >
                <Image
                  source={
                    focused
                      ? require("./assets/weaponAnalyzerFocused.png")
                      : require("./assets/weaponAnalyzer.png")
                  }
                  style={{ tintColor: color, width: 60, height: 30 }}
                />
              </Pressable>
            ),
            headerShown: false,

            ///////////////////////////////////////////
            /*tabBarIcon: ({ focused, color }) => (
              // metti navigator.goback

              <Image
                source={
                  focused
                    ? require("./assets/weaponAnalyzerFocused.png")
                    : require("./assets/weaponAnalyzer.png")
                }
                style={{ tintColor: color, width: 60, height: 30 }}
              />
            ),*/
/////////////////////////////////////////////
/*
          }}
        />
        <Tab.Screen
          name="Loadouts"
          component={LoadoutStack}
          options={{
            tabBarButton: ({ onPress, focused, color }) => (
              <Pressable
                style={{ flex: 1 }}
                onPress={console.log("lollo il nuovo button")}
              >
                <Image
                  source={
                    focused
                      ? require("./assets/loadoutBuilderFocused.png")
                      : require("./assets/loadoutBuilder.png")
                  }
                  style={{ tintColor: color, width: 30, height: 30 }}
                />
              </Pressable>
            ),
            headerShown: false,
            ////////////////////////////////////////////
            /*tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require("./assets/loadoutBuilderFocused.png")
                    : require("./assets/loadoutBuilder.png")
                }
                style={{ tintColor: color, width: 30, height: 30 }}
              />
            ),*/

/////////////////////////////////////////////
/* 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;*/

const weaponStack = (
  <Stack.Navigator>
    <Stack.Screen
      name="LoadoutList"
      component={WeaponList}
      options={{
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="WeaponDetails"
      component={WeaponDetails}
      options={{
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#000000",
        },
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);
const loadoutStack = (
  <Stack.Navigator>
    <Stack.Screen
      name="LoadoutList"
      component={LoadoutList}
      options={{
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="LoadoutBuilder"
      component={LoadoutBuilder}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default class App extends React.Component {
  state = {
    shownScreen: <NavigationContainer>{weaponStack}</NavigationContainer>,
    weaponListFocus: true,
    loadoutFocus: false,
    hideTabBar: false,
  };
  changeScreen = (screen) => {
    this.setState({
      shownScreen: screen,
    });
  };

  changeWeaponListFocus = () => {
    this.setState({
      weaponListFocus: true,
      loadoutFocus: false,
    });
  };

  changeLoadoutFocus = () => {
    this.setState({
      loadoutFocus: true,
      weaponListFocus: false,
    });
  };
  letsHideTabBar = () => {
    this.setState({
      hideTabBar: true,
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#858585" }}>
        <View style={{ flex: 1 }}>{this.state.shownScreen}</View>
        <View
          style={
            !this.state.hideTabBar
              ? styles.tabBar
              : { ...styles.tabBar, display: "none" }
          }
        >
          <Pressable
            onPress={() => {
              this.changeWeaponListFocus();
              this.changeScreen(
                <NavigationContainer>{weaponStack}</NavigationContainer>
              );
            }}
            style={styles.tabItem}
          >
            <Image
              source={require("./assets/weaponAnalyzer.png")}
              style={{
                width: 60,
                height: 30,
                tintColor: this.state.weaponListFocus ? "#D9D9D9" : "#393939",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.tabItem}
            onPress={() => {
              //this.letsHideTabBar();
              this.changeLoadoutFocus();
              this.changeScreen(
                <NavigationContainer>{loadoutStack}</NavigationContainer>
              );
            }}
          >
            <Image
              source={require("./assets/loadoutBuilder.png")}
              style={{
                width: 50,
                height: 60,
                tintColor: this.state.loadoutFocus ? "#D9D9D9" : "#393939",
              }}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#868686",
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
