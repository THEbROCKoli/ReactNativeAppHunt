import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DamageOverDistanceItem({distance, damage}) {
  let textStyle 
  let damageColor ="black"

  if (damage > 74 && damage<150) {
    damageColor="#FF9900"
    textStyle= "bold"
  }
  else if (damage > 149) {
    damageColor="red"
    textStyle= "bold"
  }
  else{
    damageColor="black"
    textStyle="normal"
  }
    

  return (
    <View style={{ width:100 }}>{/*view contenente il primo segmento*/}
    <View style={{flex:1}}>{/*view contenente la parte alta del primo segmento*/}
      <Text style={styles.distanceText}>{distance+" m"}</Text>{/*Text View indicante la distanza*/}
      <View style={styles.upperNotchContainer}>{/*View che contiene le view che costruiscono la tacca superiore e crea la linea mediana*/}
        <View style={{flex:1, borderEndWidth:2}}></View>{/*View che costruisce la tacca superiore*/}
        <View style={{flex:1}}></View>{/*View che supporta la View che costruisce la tacca superiore*/}
      </View>  
    </View>
    <View style={{flex:1}}>{/*view contenente la parte bassa del primo segmento*/}
      <View style={styles.lowerNotchContainer}>{/*View che contiene le view che costruiscono la tacca superiore e crea la linea mediana*/}
        <View style={{flex:1, borderEndWidth:2}}></View>{/*View che costruisce la tacca inferiore*/}
        <View style={{flex:1}}></View>{/*View che supporta la View che costruisce la tacca inferiore*/}
      </View>  
      <Text style={{...styles.damageText, color:damageColor, fontWeight:textStyle}}>{damage}</Text>{/*Text View indicante il danno a quella distanza*/}
    </View>
  </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText:{
    flex:2, 
    textAlign:"center", 
    textAlignVertical:"bottom", 
    paddingBottom:4
  },
  upperNotchContainer:{
    flexDirection:"row", 
    flex:1, 
    borderBottomWidth:2
  },
  lowerNotchContainer:{
    flexDirection:"row", 
    flex:1
  },
  damageText:{
    flex:2, 
    textAlign:"center", 
    textAlignVertical:"top", 
    
  }
});