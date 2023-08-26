import React from 'react';
import { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, StyleSheet, View, ScrollView, ActivityIndicator, TouchableWithoutFeedback, TextInput, TouchableOpacity } from "react-native";

const LoadoutWeaponContainer = ({onDataReceived, list}) => {
    
    const [weaponName, setWeaponName] = useState("Weapon Name")
    const [weaponSize, setWeaponSize] = useState(0)
    const [newList, setNewList]= useState([])
    
    //let newerList = list.filter(item => item.category.startsWith(""))
    function dicePressed(){
        var index = Math.floor(Math.random() * 104)
        console.log(index)
        
        setWeaponName(list[index].name)
        
    }

    
    
    //console.log("new"+newerList[1].category)
    //console.log(weaponName + " " + weaponSize)
    onDataReceived(weaponSize)
    
        return (
            <View style={{ flex:1}}>
                <View style={{backgroundColor:"#858585", flex:1, margin:10, flexDirection:"row", borderRadius:10}}>
                    <View style={{ flex:7, borderWidth:2, borderRadius:10}}>
                        <Text style={{marginHorizontal:5}}>{weaponName}</Text>
                        <TouchableOpacity style={styles.weaponImageContainer}>
                            <Image style={styles.image} source={require('../../assets/weaponSelectorPlaceHolder.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity style={styles.diceContainer} onPress={dicePressed}>
                            <Image style={styles.image} source={require('../../assets/dice.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>  
        );
    }


export default LoadoutWeaponContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#393939",
        flex: 1,
        
    },
    image: {
        width: 100,
        height: 100,
    },
    infoPart:{ 
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 5 
    },
    diceContainer:{
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
      },  
      image:{
        flex: 1,
        resizeMode: 'contain', 
      },
      weaponImageContainer:{
        width:240,
        height:93.75,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
      },
});


