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
  ActivityIndicator,
} from "react-native";
import Base from "../../data/Base";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
//const db = openDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);
const LoadoutList = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadoutName = "New loadout";

  useEffect(() => {
    Base.createLoadoutTable();
    Base.getLoadouts((loadouts) => {
      setList(loadouts);
    });
  }, []);

  const refresh = () => {
    Base.getLoadouts((loadouts) => {
      setList(loadouts);
    });
  };

  const createNewLoadout = () => {
    Base.newLoadout();
    Base.getLoadouts((loadouts) => {
      setList(loadouts);
    });
  };

  const deleteLoadout = (id) => {
    Base.deleteLoadout(id);
    Base.getLoadouts((loadouts) => {
      setList(loadouts);
    });
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const thisUserLoadouts = list;
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatListItem}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            return navigation.navigate("LoadoutBuilder", {
              id: item.id,
              onGoBack: () => {
                refresh();
              },
            });
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.flatListItemText}>{item.loadoutName}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteLoadout(item.id);
          }}
          style={styles.imageContainer}
        >
          <Image
            style={{ flex: 1, resizeMode: "contain" }}
            source={require("../../assets/trashcan.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    //createTables();
    //getLoadouts();
  }, []);

  //console.log(list.mockUserLoadouts)
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flatListContainer}>
        <View style={{ flex: 0.003 }} />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 80, height: 60 }}
            source={require("../../assets/loadoutList.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
              alignSelf: "center",
            }}
          >
            Your saved loadouts
          </Text>
        </View>
        <FlatList
          windowSize={10}
          style={styles.flatList}
          data={thisUserLoadouts}
          renderItem={renderItem}
        />
        <View style={{ flex: 0.03 }} />
      </View>
      <View style={{ flex: 2, backgroundColor: "#363636" }}>
        <TouchableOpacity
          onPress={createNewLoadout}
          style={styles.newLoadoutButton}
        >
          <View style={styles.imageContainer}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={require("../../assets/newLoadoutIcon.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={{ alignSelf: "center", color: "white", fontSize: 18 }}>
            New Loadout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoadoutList;

const styles = StyleSheet.create({
  newLoadoutButton: {
    borderRadius: 20,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#858585",
    alignSelf: "center",
    marginBottom: 10,
    justifyContent: "center",
  },

  flatListItem: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#85858500",
    alignContent: "center",
  },
  flatListItemText: { fontSize: 20, color: "white", paddingHorizontal: 10 },
  safeArea: {
    flex: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignSelf: "center",

    alignItems: "center",
    overflow: "hidden",
    marginEnd: 5,
  },
  flatList: {
    borderRadius: 22,
    backgroundColor: "#858585",
    flex: 1,
  },
  flatListContainer: {
    flex: 15,
    flexDirection: "column",
    backgroundColor: "#363636",
  },
  container: {
    flex: 1,
    backgroundColor: "#858585",
    alignItems: "center",
    justifyContent: "center",
  },
});
