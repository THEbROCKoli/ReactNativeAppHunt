import React from 'react';
import { useState, useMemo } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import DamageOverDistance from './DamageOverDistance';


const WeaponDamageDetail = ({icon,  content, ammoType, damageModifiers}) =>{
    const [wasAHeadShot, setWasAHeadShot] = useState(false)
    const [hitZoneImage, setHitZoneImage] = useState (require('../../assets/torso.png'))
    const [hitZone, setHitZone] = useState("")
    let shownDamageArray
    //const [damageModifiers, setDamageModifiers] = useState([]);
    const distanceArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350]
    const torsoDamageOverDistanceArray = []
    const headShotMultiplier = damageModifiers.hitZone.head[ammoType]
    const headDamageOverDistanceArray = []
    const dod = damageModifiers.damageOverDistance[ammoType]
    dod.forEach(element =>{
        torsoDamageOverDistanceArray.push(parseInt(element*content))
    })
    torsoDamageOverDistanceArray.forEach(element => {
        if (ammoType.includes("bow")) {
            headDamageOverDistanceArray.push(150)
        } else {
            headDamageOverDistanceArray.push(element*headShotMultiplier)                    
        }
    });

   shownDamageArray = useMemo(()=>{
        if (wasAHeadShot) {
            setHitZoneImage(require('../../assets/headshot.png'))
            setHitZone("Head-shot")
            return headDamageOverDistanceArray
        } else {
            setHitZoneImage(require('../../assets/torso.png'))
            setHitZone("Torso")
            return torsoDamageOverDistanceArray
        }
    }, [wasAHeadShot])

    function ChangeHitZone(){
        if (!wasAHeadShot) {
            setWasAHeadShot(true)
        }
        else{
            setWasAHeadShot(false)
        }  
    }
    
    return(
        <View style={styles.container}>
            <View style={{flex:1, flexDirection:"row"}}>
                <Image style={styles.image} source={icon}/>
                <Text style={styles.content}>Damage</Text> 
                <View style={{flex:1}}></View>
                <Text style={styles.damage}>{content}</Text> 
            </View>
            <View style={styles.graphContainer}>
                <TouchableOpacity onPress={ChangeHitZone} style={styles.touchable}>
                    <Image style={styles.image} source={hitZoneImage} />
                    <Text style={{textAlign:"center", alignSelf:"center"}}>{hitZone}</Text>      
                </TouchableOpacity>
                <DamageOverDistance distanceArray={distanceArray} shownDamageArray={shownDamageArray}/>
            </View>
        </View>
    )

}

export default WeaponDamageDetail
const styles = StyleSheet.create({
    container:{ 
        flexDirection: "column", 
        height: 150, 
        backgroundColor: "#858585", 
        borderRadius: 10, 
        marginHorizontal: 5, 
        marginVertical: 5 
    },
    graphContainer:{
        flex:1.5, 
        marginBottom:5, 
        marginHorizontal:5, 
        borderRadius:10, 
        marginTop:10, 
        flexDirection:"row"
    },
    touchable:{
        flex:0.3, 
        flexDirection:"column", 
        alignItems:"center", 
        justifyContent:"space-between"
    },
    label:{
        alignSelf:"center",
        flex:0.8,
        fontSize:17
    },
    image:{
        marginHorizontal:5,
        marginTop:10,
        width:38,
        height:38
    },
    content:{
        marginTop:14,
        flex:1,
        textAlign:"center",
        fontSize:17,
    },
    damage:{
        marginTop:14,
        justifyContent:"center",
        flex:1,
        textAlign:"center",
        fontSize:17
    }
}); 