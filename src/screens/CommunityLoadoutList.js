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
import { getSharedLoadouts } from "../apiCalls/shareApi";

const CommunityLoadoutList = ({navigation}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        //setList(jsonData);
        getSharedLoadouts().then((response) => setList(response));
      }, []);
    
    const renderItem = ({ item }) => {
       return( <View style={styles.flatListItem}>
        
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.flatListItemText}>{item.loadout_name}</Text>
          </View>
          <TouchableOpacity
          style={{  backgroundColor:"white", alignItems:"center" , borderRadius:20}}
          onPress={() => {
            navigation.navigate("CommunityLoadout", { loadoutName: item.loadout_name, firstWeapon: item.first_weapon_id, secondWeapon: item.second_weapon_id })
           /* return navigation.navigate("LoadoutBuilder", {
              id: item.id,
            });*/
          }}
        >
            <Text style={{fontSize:20, paddingHorizontal:20, paddingVertical:10}}>Show</Text>
        </TouchableOpacity>
        
      </View>)
      };
    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:"#393939"}}>
            <FlatList
            windowSize={10}
            style={styles.flatList}
            data={list}
            renderItem={renderItem}
          />
        </SafeAreaView>)
}

export default CommunityLoadoutList;

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#393939",
    },
    flatListItem:{
        flexDirection:"row",
        paddingHorizontal:20,
        paddingVertical:10
    },
    flatListItemText:{
        fontSize:20,
        color:"white"
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
  