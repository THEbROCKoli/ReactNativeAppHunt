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
} from "react-native";
import AmmoSelector from "../components/AmmoSelector";
import WeaponSizeSelector from "../components/WeaponSizeSelector";
import ListItem from "../components/ListItem";
import { useNavigation } from "@react-navigation/native";
import { getWeaponList } from "../apiCalls/weaponApis";

const WeaponList = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  //let jsonData = require("../../data/HuntJsonLight.json");
  let regexBuildArray = [];
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };
  useEffect(() => {
    //setList(jsonData);
    getWeaponList().then((response) => setList(response));
  }, []);
  const onPressSearch = () => {
    setSearch(inputText);
  };
  const [longAmmoPress, setLongAmmoPress] = useState(false);
  const [mediumAmmoPress, setMediumAmmoPress] = useState(false);
  const [compactAmmoPress, setCompactAmmoPress] = useState(false);
  const [shotgunAmmoPress, setShotgunAmmoPress] = useState(false);
  const [specialAmmoPress, setSpecialAmmoPress] = useState(false);
  const [weaponSizeSelected, setWeaponSizeSelected] = useState(0);

  function onDataFromWeaponSelector(data) {
    setWeaponSizeSelected(data);
  }

  function onDataFromAmmoSelector(data, type) {
    switch (type) {
      case "long":
        setLongAmmoPress(data);
        break;
      case "medium":
        setMediumAmmoPress(data);
        break;
      case "compact":
        setCompactAmmoPress(data);
        break;
      case "shotgun":
        setShotgunAmmoPress(data);
        break;
      case "special":
        setSpecialAmmoPress(data);
        break;
      default:
        break;
    }
  }
  let listFiltered;
  listFiltered = useMemo(() => {
    let filteringList = list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (weaponSizeSelected) {
      case 0:
        filteringList = filteringList.filter((l) => l.category.startsWith(""));
        break;
      case 1:
        filteringList = filteringList.filter((l) =>
          l.category.startsWith("small")
        );
        break;
      case 2:
        filteringList = filteringList.filter((l) =>
          l.category.startsWith("medium")
        );
        break;
      case 3:
        filteringList = filteringList.filter((l) =>
          l.category.startsWith("large")
        );
      default:
        break;
    }

    if (longAmmoPress) {
      regexBuildArray.push("long");
    } else {
      regexBuildArray = regexBuildArray.filter((item) => item !== "long");
    }

    if (mediumAmmoPress) {
      regexBuildArray.push("medium");
    } else {
      regexBuildArray = regexBuildArray.filter((item) => item !== "medium");
    }

    if (compactAmmoPress) {
      regexBuildArray.push("compact");
    } else {
      regexBuildArray = regexBuildArray.filter((item) => item !== "compact");
    }

    if (shotgunAmmoPress) {
      regexBuildArray.push("shotgun");
    } else {
      regexBuildArray = regexBuildArray.filter((item) => item !== "shotgun");
    }

    if (specialAmmoPress) {
      regexBuildArray.push("special");
    } else {
      regexBuildArray = regexBuildArray.filter((item) => item !== "special");
    }

    let regexBuild = regexBuildArray.join("|");
    let regex = new RegExp(`^(${regexBuild})`);
    filteringList = filteringList.filter((l) => regex.test(l.ammo));
    return filteringList;
  }, [
    list,
    search,
    compactAmmoPress,
    longAmmoPress,
    mediumAmmoPress,
    shotgunAmmoPress,
    specialAmmoPress,
    weaponSizeSelected,
  ]);

  const renderItem = ({ item }) => {
    return <ListItem item={item} navigation={navigation}></ListItem>;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.safeArea}>
        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="search"
              style={styles.textInput}
              onChangeText={handleInputChange}
            ></TextInput>
            <TouchableOpacity onPress={onPressSearch}>
              <Image
                style={styles.searchImage}
                source={require("../../assets/search_icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <WeaponSizeSelector
            onDataReceived={onDataFromWeaponSelector}
          ></WeaponSizeSelector>
          <View />
          <AmmoSelector
            ammoIcon={require("../../assets/LongAmmo.png")}
            onDataReceived={onDataFromAmmoSelector}
            ammoType={"long"}
            imageSize={36}
          ></AmmoSelector>
          <AmmoSelector
            ammoIcon={require("../../assets/MediumAmmo.png")}
            onDataReceived={onDataFromAmmoSelector}
            ammoType={"medium"}
            imageSize={36}
          ></AmmoSelector>
          <AmmoSelector
            ammoIcon={require("../../assets/CompactAmmo.png")}
            onDataReceived={onDataFromAmmoSelector}
            ammoType={"compact"}
            imageSize={25}
          ></AmmoSelector>
          <AmmoSelector
            ammoIcon={require("../../assets/ShotgunAmmo.png")}
            onDataReceived={onDataFromAmmoSelector}
            ammoType={"shotgun"}
            imageSize={30}
          ></AmmoSelector>
          <AmmoSelector
            ammoIcon={require("../../assets/SpecialAmmo.png")}
            onDataReceived={onDataFromAmmoSelector}
            ammoType={"special"}
            imageSize={40}
          ></AmmoSelector>
        </View>
        <View style={styles.flatListContainer}>
          <View style={{ flex: 0.03 }}></View>
          <FlatList
            windowSize={10}
            style={styles.flatList}
            data={listFiltered}
            renderItem={renderItem}
          />
          <View style={{ flex: 0.03 }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WeaponList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#393939",
  },
  flatList: {
    borderRadius: 22,
    backgroundColor: "#858585",
    flex: 1,
    paddingVertical: 10,
  },
  flatListContainer: {
    flex: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  filterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#858585",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  textInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  ammoContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ammoIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  searchImage: {
    resizeMode: "contain",
    width: 40,
    height: 40,
    alignSelf: "center",
    marginEnd: 10,
  },
  sizeBox: {
    backgroundColor: "#d9d9d9",
    width: 25,
    height: 25,
    borderRadius: 2,
    borderWidth: 1,
  },
  sizeContainer: {
    backgroundColor: "#d9d9d9",
    width: 90,
    height: 40,
    borderRadius: 5,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
