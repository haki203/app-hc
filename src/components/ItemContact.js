import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const baseImgPath = '../assets/images/';
const ItemContact = (props) => {
    const {admin} = props;

    const clickItemAdmin = () => {
       
      }
  return (
    <View style={styles.topbody}>
    <TouchableOpacity style={styles.item}  onPress={clickItemAdmin}>   
    {/* <View style={styles.item}> */}
        <View style={styles.itemin}>
            <Image source={require(baseImgPath+'avavtarChibi.png')} />
            <View style={styles.in4contact}>
                <Text style={styles.name}>{admin.full_name}</Text>
                <Text style={styles.department}>{admin.position}</Text>
            </View>
            <Image source={require(baseImgPath+'chevron-right.png')} />
        </View>
    {/* </View> */}
    </TouchableOpacity>  
</View>
  )
}

export default ItemContact

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        padding:20
    },
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
        marginBottom:20,
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    topbody: {
        width: '100%',
        
    },
    item: {
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        padding:10,
        marginBottom:10,
    },
    itemin: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',



    },
    bottombody: {

    },
    name:{
        color: '#000000',
        fontSize:15,
       
    }
})
