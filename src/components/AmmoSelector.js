import { useState, useMemo} from 'react';
import { StyleSheet, View , Image, TouchableWithoutFeedback} from 'react-native';

const AmmoSelector = ({onDataReceived, ammoIcon, ammoType, imageSize}) => {
    const [ammoPress, setAmmoPress] = useState(false);
    const [ammoBackColor, setAmmoBackColor] = useState("#d9d9d9");
    const [ammoColor, setAmmoColor] = useState("#393939");

    

    const OnAmmoPress = () => {
      if (!ammoPress){
      setAmmoPress(true)
      }
      else{
        setAmmoPress(false)
      }
      
        onDataReceived(!ammoPress, ammoType);
    }
    useMemo(()=>{
      if(ammoPress){
        setAmmoBackColor("#393939")
        setAmmoColor("#d9d9d9")
      }
      else{
        setAmmoBackColor("#d9d9d9")
        setAmmoColor("#393939")
      }
    }, [ammoPress])
      return (
        <TouchableWithoutFeedback onPress={OnAmmoPress}>
          <View style={{...styles.ammoContainer, backgroundColor: ammoBackColor, borderColor: ammoColor}}>
            <View style={{...styles.ammoSubContainer, width:imageSize, height:imageSize,}}>
              <Image style={{...styles.ammoIcon, tintColor: ammoColor}} source={ ammoIcon }
              resizeMode='contain'/>
            </View>
          </View>
        </TouchableWithoutFeedback>
    )
    
    
}

export default AmmoSelector

const styles = StyleSheet.create({
    ammoContainer:{
        width:40,
        height:40,
        borderRadius:5,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    ammoSubContainer:{
      width:25,
      height:25,
      justifyContent:"center",
      alignItems:"center",
      overflow:"hidden"
    },  
    ammoIcon:{
      flex: 1,
      resizeMode: 'contain', // per adattare l'immagine mantenendo le proporzioni
    }
}); 