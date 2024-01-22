import * as React from "react";
import { useEffect, useCallback, useMemo, useState } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoadoutBuilder from "./src/screens/LoadoutBuilder";
import WeaponList from "./src/screens/WeaponsList";
import WeaponDetails from "./src/screens/WeaponDetails";
import LoadoutList from "./src/screens/LoadoutList";
import { SafeAreaView } from "react-native-safe-area-context";
import CommunityLoadoutList from "./src/screens/CommunityLoadoutList";
import CommunityLoadout from "./src/screens/CommunityLoadout";
//import WeaponDetails from './src/screens/WeaponDetails';

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
/////////////////////////////////////////////
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
      options={({ route }) => ({
        title: route.params.name,
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#242424",
        },
      })}
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
      options={{
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#242424",
        },
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const communityStack = (
  <Stack.Navigator>
    <Stack.Screen
      name="CommunityLoadoutList"
      component={CommunityLoadoutList}
      options={{
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="CommunityLoadout"
      component={CommunityLoadout}
      options={{
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#242424",
        },
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);


export default App = () => {
  const [shownScreen, setShownScreen] = useState(
    <NavigationContainer>{weaponStack}</NavigationContainer>
  );
  const [weaponListFocus, setWeaponListFocus] = useState(true);
  const [loadoutFocus, setLoadoutFocus] = useState(false);
  const [hiddenTabBar, setHiddenTabBar] = useState(false);
  const [communityFocus, setCommunityFocus] = useState(false)

  const changeScreen = (screen) => {
    setShownScreen(screen);
  };

  const changeWeaponListFocus = () => {
    setWeaponListFocus(true);
    setLoadoutFocus(false);
    setCommunityFocus(false);
  };

  const changeLoadoutFocus = () => {
    setLoadoutFocus(true);
    setWeaponListFocus(false);
    setCommunityFocus(false);
  };

  const changeCommunityFocus = () => {
    setLoadoutFocus(false);
    setWeaponListFocus(false);
    setCommunityFocus(true);
  }

  

  const hideTabBar = () => {
    setHiddenTabBar(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#858585' }}>
      <View style={{ flex: 1 }}>{shownScreen}</View>
      <View
        style={
          !hiddenTabBar
            ? styles.tabBar
            : { ...styles.tabBar, display: 'none' }
        }
      >
        <Pressable
          onPress={() => {
            changeWeaponListFocus();
            changeScreen(
              <NavigationContainer>{weaponStack}</NavigationContainer>
            );
          }}
          style={styles.tabItem}
        >
          <Image
            source={require('./assets/weaponAnalyzer.png')}
            style={{
              resizeMode: 'contain',
              tintColor: weaponListFocus ? '#D9D9D9' : '#393939',
              height: 50,
            }}
          />
        </Pressable>
        <Pressable
          style={styles.tabItem}
          onPress={() => {
            //hideTabBar();
            changeLoadoutFocus();
            changeScreen(
              <NavigationContainer>{loadoutStack}</NavigationContainer>
            );
          }}
        >
          <Image
            source={require('./assets/loadoutBuilder.png')}
            resizeMode="contain"
            style={{
              height: 50,
              resizeMode: 'contain',
              tintColor: loadoutFocus ? '#D9D9D9' : '#393939',
            }}
          />
        </Pressable>

        <Pressable
          style={styles.tabItem}
          onPress={() => {
            //hideTabBar();
            changeCommunityFocus();
            changeScreen(
              <NavigationContainer>{communityStack}</NavigationContainer>
            )
          }}
        >
          <Image
            source={require('./assets/loadoutList.png')}
            resizeMode="contain"
            style={{
              height: 50,
              resizeMode: 'contain',
              tintColor: communityFocus ? '#D9D9D9' : '#393939',
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#868686',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


