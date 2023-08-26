import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import DamageOverDistanceItem from './DamageOverDistanceItem'

export default function DamageOverDistance({distanceArray, shownDamageArray}) {
  
  return (
    <ScrollView horizontal={true} style={styles.scroll}>
        <DamageOverDistanceItem distance={distanceArray[0]} damage={shownDamageArray[0]}/>
        <DamageOverDistanceItem distance={distanceArray[1]} damage={shownDamageArray[1]}/>
        <DamageOverDistanceItem distance={distanceArray[2]} damage={shownDamageArray[2]}/>
        <DamageOverDistanceItem distance={distanceArray[3]} damage={shownDamageArray[3]}/>
        <DamageOverDistanceItem distance={distanceArray[4]} damage={shownDamageArray[4]}/>
        <DamageOverDistanceItem distance={distanceArray[5]} damage={shownDamageArray[5]}/>
        <DamageOverDistanceItem distance={distanceArray[6]} damage={shownDamageArray[6]}/>
        <DamageOverDistanceItem distance={distanceArray[7]} damage={shownDamageArray[7]}/>
        <DamageOverDistanceItem distance={distanceArray[8]} damage={shownDamageArray[8]}/>
        <DamageOverDistanceItem distance={distanceArray[9]} damage={shownDamageArray[9]}/>
        <DamageOverDistanceItem distance={distanceArray[10]} damage={shownDamageArray[10]}/>
        <DamageOverDistanceItem distance={distanceArray[11]} damage={shownDamageArray[11]}/>
        <DamageOverDistanceItem distance={distanceArray[12]} damage={shownDamageArray[12]}/>
        <DamageOverDistanceItem distance={distanceArray[13]} damage={shownDamageArray[13]}/>
        <DamageOverDistanceItem distance={distanceArray[14]} damage={shownDamageArray[14]}/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroll: { 
    flex:10,
    backgroundColor:"#d9d9d9", 
    borderRadius:10
  }
});