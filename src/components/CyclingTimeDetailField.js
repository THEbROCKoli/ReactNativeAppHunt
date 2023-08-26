import React from 'react';
import { useState, useRef } from 'react';
import { Image, Text, StyleSheet, View, TouchableWithoutFeedback,} from "react-native";

const CyclingTimeDetailField = ({icon, label, content, cyclingTime}) =>{
    const [containerColor, setContainerColor] = useState("#858585")
    const [isFiring, setIsFiring] = useState(false)
    const firingIntervalRef = useRef(null);
    const cyclingTimeMS= cyclingTime*1000
    const startFiring = (()=>{
         
        if(!isFiring){
            setIsFiring(true);
            setContainerColor("#FFD600");
            setTimeout(() => {
                setContainerColor("#858585");
            }, 50);
            firingIntervalRef.current = setInterval(openFire, cyclingTimeMS); 
            } else {
            clearInterval(firingIntervalRef.current)
            setIsFiring(false)
            }
        function openFire(){
        setContainerColor("#FFD600")
        setTimeout(() => {
            setContainerColor("#858585")
            }, 50)
        }
          
    })

    return(
        <TouchableWithoutFeedback onPress={startFiring}>
            <View style={{...styles.container, backgroundColor:containerColor}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.contentContainer}>
                    <Image style={styles.image} source={icon}/>
                    <Text style={styles.content}>{content}</Text> 
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default CyclingTimeDetailField
const styles = StyleSheet.create({
    container:{ 
        height: 85, 
        flex: 20,
        borderRadius: 10 
    },
    label:{
        alignSelf:"center",
        flex:0.8,
        fontSize:17
    },
    contentContainer:{
        flexDirection:"row",
        flex:1, 
        justifyContent:"space-between"
    },
    image:{
        marginHorizontal:5,
        width:38,
        height:38
    },
    content:{
        marginTop:4,
        justifyContent:"center",
        marginHorizontal:5,
        flex:1,
        textAlign:"center",
        fontSize:17
    }
}); 