import React from 'react';
import { Image, Text, StyleSheet, View} from "react-native";

const AmmoDetailField = ({firstIcon, secondIcon, label, content}) =>{
    

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contentContainer}>
                <Image style={styles.image} source={firstIcon}/>
                <Text style={styles.content}>{content}</Text> 
                <Image style={styles.image} source={secondIcon}/>
            </View>
        </View>
    )

}

export default AmmoDetailField
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