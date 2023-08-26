import React from 'react';
import { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import LoadoutWeaponContainer from '../components/LoadoutWeaponContainer';
import jsonData from '../../data/HuntJsonLight.json';
import Base from '../../data/Base'
const LoadoutBuilder = ({route}) => {

    const [firstWeaponSize, setFirstWeaponSize] = useState("")
    const [secondWeaponSize, setSecondWeaponSize] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [list, setList] = useState([]);
    const [loadout, setLoadout] = useState("")
    const [loadoutName, setLoadoutName] = useState("")
    const [firstWeaponName, setFirstWeaponName] = useState("Weapon name")
    const [secondWeaponName, setSecondWeaponName] = useState("Weapon name")
    const [weaponSize, setWeaponSize] = useState(0)
    
    //const [secondWeaponList, setSecondWeaponList] = useState([])
    const { id, name } = route.params;
    useEffect(()=>{
        setList(jsonData)
        setIsLoading(false)
        Base.getSpecificLoadout((id), loadout => {
            setLoadout(loadout)
            setLoadoutName(loadout.loadoutName)
        })
    },[])
    
    let firstWeaponList = useMemo(()=>{
        let filteredList = list 
        filteredList = filteredList.filter(l => l.category.startsWith(secondWeaponSize))
        return filteredList
    },[list])
    console.log("First list is"+firstWeaponList)
       
    
    let secondWeaponList = useMemo(()=>{
        let filteredList = list 
        filteredList = filteredList.filter(l => l.category.startsWith(firstWeaponSize))
        return filteredList
    },[list, firstWeaponSize])

    console.log("Second Weapon list="+secondWeaponList)
    if (isLoading) {
        // Mostra un indicatore di caricamento o uno stato di "dati in attesa" fino a quando list non è pronto
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    function onNameChange(text){
        setLoadoutName(text)
    }

    function updateLoadout(newName, id){
        Base.updateLoadout(newName, id)
    }

    function firstDicePressed(){
        var index = Math.floor(Math.random() * firstWeaponList.length-1)
        console.log(index+"/"+(firstWeaponList.length-1))
        setFirstWeaponName(firstWeaponList[index].name)
        setFirstWeaponSize(firstWeaponList[index].category)
    }
    console.log("first weapon size "+ firstWeaponSize)
    function secondDicePressed(){
        var index = Math.floor(Math.random() * secondWeaponList.length-1)
        console.log(index+"/"+(secondWeaponList.length-1))
        setSecondWeaponName(secondWeaponList[index].name)
        console.log(secondWeaponList[index].name)
    }
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flex:1, marginHorizontal:10}}>
                    <Text style={{flex:1, color:"#858585", fontSize:20}}>Loadout name</Text>
                    <TextInput onChangeText={onNameChange} style={{backgroundColor:"#858585", borderRadius:20, flex:1.5, fontSize:20, marginHorizontal:20, paddingHorizontal:10}}>{loadoutName}</TextInput>
                </View>
                <View style={{flex:7, backgroundColor:"#858585", margin:10, borderRadius:20}}>
                    <View style={{flex:1}}>
                    <View style={{ flex:1}}>
                <View style={{backgroundColor:"#858585", flex:1, margin:10, flexDirection:"row", borderRadius:10}}>
                    <View style={{ flex:7, borderWidth:2, borderRadius:10}}>
                        <Text style={{marginHorizontal:5}}>{firstWeaponName}</Text>
                        <TouchableOpacity style={styles.weaponImageContainer} onPress={() =>{updateLoadout(loadoutName, id)}}>
                            <Image style={styles.image} source={require('../../assets/weaponSelectorPlaceHolder.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity style={styles.diceContainer} onPress={firstDicePressed}>
                            <Image style={styles.image} source={require('../../assets/dice.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                    </View>
                    <View style={{flex:1}}>
                    <View style={{ flex:1}}>
                <View style={{backgroundColor:"#858585", flex:1, margin:10, flexDirection:"row", borderRadius:10}}>
                    <View style={{ flex:7, borderWidth:2, borderRadius:10}}>
                        <Text style={{marginHorizontal:5}}>{secondWeaponName}</Text>
                        <TouchableOpacity style={styles.weaponImageContainer}>
                            <Image style={styles.image} source={require('../../assets/weaponSelectorPlaceHolder.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity style={styles.diceContainer} onPress={secondDicePressed}>
                            <Image style={styles.image} source={require('../../assets/dice.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                    </View>
                    <View style={{flex:2}}></View>
                </View>
            </SafeAreaView>
        );
    }


export default LoadoutBuilder;

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
        width:250,
        height:85,
        alignSelf:"center",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
      },
});
