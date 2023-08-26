import React from 'react';
import { Image, Text, StyleSheet, View } from "react-native";



const ShotgunBowDamageDetail = ({icon,  content}) =>{
    return(
        <View style={styles.container}>
            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                <Image style={styles.image} source={icon}/>
                <Text style={styles.content}>Damage</Text> 
                <View style={{flex:1}}></View>
                <Text style={styles.damage}>{content}</Text> 
            </View>
        </View>
    )

}

export default ShotgunBowDamageDetail
const styles = StyleSheet.create({
    container:{ 
        flexDirection: "column", 
        height: 85, 
        backgroundColor: "#858585", 
        borderRadius: 10, 
        marginHorizontal: 5, 
        marginVertical: 5, 
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
        width:38,
        height:38
    },
    content:{
        flex:1,
        textAlign:"center",
        fontSize:17,
    },
    damage:{
        justifyContent:"center",
        flex:1,
        textAlign:"center",
        fontSize:17
    }
}); 