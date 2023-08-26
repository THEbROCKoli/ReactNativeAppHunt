import { useState, useMemo, useEffect} from 'react';
import { StyleSheet, View , TouchableWithoutFeedback} from 'react-native';

const WeaponSizeSelector = ({onDataReceived}) => {

    let black = "#393939"
    let white = "#d9d9d9"
    const [smallBox, setSmallBox] = useState(white);
    const [mediumBox, setMediumBox] = useState(white);
    const [largeBox, setLargeBox] = useState(white);

    const [tapCounter, setTapCounter] = useState('')
    useEffect(() => {
        setTapCounter(0)
      }, []);
    const changeSize = () => {

        if (tapCounter>2) {
            setTapCounter(0)
            
        }
        else{
            setTapCounter(tapCounter+1)
            
        }
        onDataReceived(tapCounter+1)
        
    }

    useMemo(()=>{
        switch (tapCounter) {
            case 0:
                setSmallBox(white)
                setMediumBox(white)
                setLargeBox(white)
                break;
            case 1:
                setSmallBox(black)
                setMediumBox(white)
                setLargeBox(white)
                break;
            case 2:
                setSmallBox(black)
                setMediumBox(black)
                setLargeBox(white)
                break;
            case 3:
                setSmallBox(black)
                setMediumBox(black)
                setLargeBox(black)
                break;
            default:
                break;
        }
      }, [tapCounter])


    return (
        <TouchableWithoutFeedback onPress={changeSize}>
            <View style={styles.sizeContainer}>
                <View style={{...styles.sizeBox, backgroundColor:smallBox}}></View>
                <View style={{...styles.sizeBox, backgroundColor:mediumBox}}></View>
                <View style={{...styles.sizeBox, backgroundColor:largeBox}}></View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default WeaponSizeSelector

const styles = StyleSheet.create({
    sizeBox:{
        backgroundColor:"#d9d9d9", 
        width:25,
        height:25,
        borderRadius:2,
        borderWidth:1,
      },
      sizeContainer:{
        backgroundColor:"#d9d9d9", 
        width:90,
        height:40,
        borderRadius:5,
        justifyContent:"space-evenly",
        flexDirection:"row",
        alignItems:"center"
      },
}); 