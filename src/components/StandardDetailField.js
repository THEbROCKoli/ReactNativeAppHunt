import React from 'react';
import { useState, useEffect} from 'react';
import { Image, Text, StyleSheet, View,} from "react-native";

const StandardDetailField = ({icon, label, content}) =>{
    const [processedContent, setProcessedContent] = useState("")

    useEffect(() => {
        if (content.toString().startsWith("long")) {
            setProcessedContent("Long ammo");
        } else if (content.toString().startsWith("compact")) {
            setProcessedContent("Compact ammo");
        } else if (content.toString().startsWith("medium")) {
            setProcessedContent("Medium ammo");
        } else if (content.toString().startsWith("special")){
            setProcessedContent("Special ammo")
        } else if (content.toString().startsWith("shotgun")){
            setProcessedContent("Shotgun ammo")
        }else {
            setProcessedContent(content.toString())
        }
      }, [content]);

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contentContainer}>
                <Image style={styles.image} source={icon}/>
                <Text style={styles.content}>{processedContent}</Text> 
            </View>
        </View>
    )

}

export default StandardDetailField
const styles = StyleSheet.create({
    container:{ 
        height: 85, 
        backgroundColor: "#858585",
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