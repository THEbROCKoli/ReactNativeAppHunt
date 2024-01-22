import { useState, useMemo, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { getWeaponList } from "../apiCalls/weaponApis";

const CommunityLoadout = ({ route }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getWeaponList().then((response) => {
      setList(response);
      setIsLoading(false);
    });})
  const { loadoutName, firstWeapon, secondWeapon } = route.params;

  if (isLoading) {
    // Mostra un indicatore di caricamento o uno stato di "dati in attesa" fino a quando list non è pronto
    return (
      <View style={{ ...styles.container, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#393939" }}>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ color: "#858585", fontSize: 20 }}>Loadout name</Text>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Image
            source={require("../../assets/loadoutBuilder.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            style={{ ...styles.boxedText, flex: 1 }}
          >
            {loadoutName}
          </Text>
        </View>
      </View>
      <View style={styles.loadoutContainer}>
        <View style={styles.weaponContainer}>
          <Text style={styles.weaponName}>
            {firstWeapon != -1
              ? list[firstWeapon].name
              : "No weapon selected"}
          </Text>
          <Image
            style={styles.weaponImageContainer}
            source={
              firstWeapon != -1
                ? { uri: list[firstWeapon].image }
                : require("../../assets/placeholderAlt.png")
            }
          />
        </View>
        <View style={styles.weaponContainer}>
          <Text style={styles.weaponName}>
            {secondWeapon != -1
              ? list[secondWeapon].name
              : "No weapon selected"}
          </Text>
          <Image
            style={styles.weaponImageContainer}
            source={
              secondWeapon != -1
                ? { uri: list[secondWeapon].image }
                : require("../../assets/placeholderAlt.png")
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommunityLoadout;

const styles = StyleSheet.create({
    saveButtonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
  
      marginBottom: 20,
    },
    weaponName: {
      fontSize: 20,
      color: "#FFFFFF",
      marginStart: 10,
    },
    loadoutContainer: {
      flex: 6,
      backgroundColor: "#858585",
      borderRadius: 20,
      marginHorizontal: 10,
    },
    container: {
      backgroundColor: "#393939",
      flex: 1,
    },
    button: {
      height: 48,
      width: 48,
      resizeMode: "contain",
    },
    actionButtons: {
      height: 40,
      width: 40,
      resizeMode: "contain",
      alignSelf: "center",
    },
    image: {
      height: 48,
      width: 48,
      resizeMode: "contain",
      tintColor: "#D9D9D9",
    },
    infoPart: {
      flexDirection: "row",
      marginHorizontal: 5,
      marginVertical: 5,
    },
    diceContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      flex: 1,
      marginBottom: 10,
    },
    weaponContainer: {
      flex: 1,
      justifyContent: "center",
    },
    weaponImageContainer: {
      marginTop: 10,
      width: 384 * 0.75,
      height: 150 * 0.75,
      borderRadius: 20,
      alignSelf: "center",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    boxedText: {
      backgroundColor: "#858585",
      borderRadius: 20,
      fontSize: 20,
      padding: 10,
      color: "white",
    },
  });
  
