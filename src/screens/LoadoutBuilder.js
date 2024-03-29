import React from "react";
import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import LoadoutWeaponContainer from "../components/LoadoutWeaponContainer";
import jsonData from "../../data/HuntJsonLight.json";
import Base from "../../data/Base";
import { getWeaponList } from "../apiCalls/weaponApis";
import { shareLoadout } from "../apiCalls/shareApi";

const LoadoutBuilder = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [loadout, setLoadout] = useState("");
  const [loadoutName, setLoadoutName] = useState("");
  const [firstWeaponId, setFirstWeaponId] = useState(-1);
  const [secondWeaponId, setSecondWeaponId] = useState(-1);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const showModal = () => {
    setModalVisible(true);
    setTimeout(hideModal, 1000);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const { id, name } = route.params;

  useEffect(() => {
    getWeaponList().then((response) => {
      setList(response);
      setIsLoading(false);
    });
    Base.getSpecificLoadout(id, (loadout) => {
      setLoadout(loadout);
      setFirstWeaponId(loadout.firstWeapon);
      setSecondWeaponId(loadout.secondWeapon);
      setLoadoutName(loadout.loadoutName);
    });
  }, []);

  if (isLoading) {
    // Mostra un indicatore di caricamento o uno stato di "dati in attesa" fino a quando list non è pronto
    return (
      <View style={{ ...styles.container, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  function onNameChange(text) {
    setLoadoutName(text);
  }

  function updateLoadout(newName, firstWeapon, secondWeapon, id) {
    Base.updateLoadout(newName, firstWeapon, secondWeapon, id);
  }

  function firstDicePressed() {
    let index;
    let size;
    if (list[secondWeaponId] != undefined) {
      if (list[secondWeaponId].category == "large") {
        do {
          index = Math.floor(Math.random() * (list.length - 1));
          size = list[index].category;
        } while (size != "small");
      } else if (list[secondWeaponId].category == "medium") {
        do {
          index = Math.floor(Math.random() * (list.length - 1));
          size = list[index].category;
        } while (size == "large");
      } else {
        index = Math.floor(Math.random() * (list.length - 1));
      }
    } else {
      index = Math.floor(Math.random() * (list.length - 1));
    }
    setFirstWeaponId(list[index].id - 1);
  }
  function secondDicePressed() {
    let index;
    let size;
    if (list[firstWeaponId] != undefined) {
      if (list[firstWeaponId].category == "large") {
        do {
          index = Math.floor(Math.random() * (list.length - 1));
          size = list[index].category;
        } while (size != "small");
      } else if (list[firstWeaponId].category == "medium") {
        do {
          index = Math.floor(Math.random() * (list.length - 1));
          size = list[index].category;
        } while (size == "large");
      } else {
        index = Math.floor(Math.random() * (list.length - 1));
      }
    } else {
      index = Math.floor(Math.random() * (list.length - 1));
    }
    setSecondWeaponId(list[index].id - 1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <View style={{ alignSelf: "center", opacity:0.5, backgroundColor: "#FFFFFF" , padding:20, borderRadius:20}}>
            <Text style={{ opacity:1, fontSize: 30 ,textAlign:"center"}}>Il loadout è stato condiviso</Text>
          </View>
        </View>
      </Modal>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ color: "#858585", fontSize: 20 }}>Loadout name</Text>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Image
            source={require("../../assets/loadoutBuilder.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <TextInput
            onChangeText={onNameChange}
            style={{ ...styles.boxedText, flex: 1 }}
          >
            {loadoutName}
          </TextInput>
        </View>
      </View>
      <View style={styles.loadoutContainer}>
        <View style={styles.weaponContainer}>
          <Text style={styles.weaponName}>
            {firstWeaponId != -1
              ? list[firstWeaponId].name
              : "No weapon selected"}
          </Text>
          <Image
            style={styles.weaponImageContainer}
            source={
              firstWeaponId != -1
                ? { uri: list[firstWeaponId].image }
                : require("../../assets/weaponSelectorPlaceHolder.png")
            }
          />
          <View style={styles.diceContainer}>
            <TouchableWithoutFeedback onPress={firstDicePressed}>
              <Image
                source={require("../../assets/dice.png")}
                style={styles.button}
              />
            </TouchableWithoutFeedback>
            <Image
              source={require("../../assets/trashcan.png")}
              style={styles.button}
            />
          </View>
        </View>
        <View style={styles.weaponContainer}>
          <Text style={styles.weaponName}>
            {secondWeaponId != -1
              ? list[secondWeaponId].name
              : "No weapon selected"}
          </Text>
          <Image
            style={styles.weaponImageContainer}
            source={
              secondWeaponId != -1
                ? { uri: list[secondWeaponId].image }
                : require("../../assets/weaponSelectorPlaceHolder.png")
            }
          />
          <View style={styles.diceContainer}>
            <TouchableWithoutFeedback onPress={secondDicePressed}>
              <Image
                source={require("../../assets/dice.png")}
                style={styles.button}
              />
            </TouchableWithoutFeedback>
            <Image
              source={require("../../assets/trashcan.png")}
              style={styles.button}
            />
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity
          style={{ ...styles.boxedText, borderRadius: 10, padding: 5 }}
          onPress={() => {
            updateLoadout(loadoutName, firstWeaponId, secondWeaponId, id);

            navigation.navigate("LoadoutList", {
              maybeRefresh: true,
            });
          }}
        >
          <Image
            source={require("../../assets/save.png")}
            style={styles.actionButtons}
          />
          <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
            save changes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.boxedText, borderRadius: 10, padding: 5 }}
          onPress={() => {
            shareLoadout(loadoutName, firstWeaponId, secondWeaponId).then(
              (message) => {
                setModalText(message);
                console.log("Message from shareLoadout:", message);
              }
            );
            showModal();
          }}
        >
          <Image
            source={require("../../assets/share.png")}
            style={styles.actionButtons}
          />
          <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
            share loadout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoadoutBuilder;

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
