import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
const SettingAdmin = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
                <TouchableOpacity style={styles.leftHeader} >
                    <Image style={styles.icarrowleft}  source={require('../../assets/images/ic_back_white.png')} />
                
                </TouchableOpacity >
                <View style={styles.centerHeader}>
                    <Image style={{width:60,height:60,marginBottom:10,borderRadius:20}}  source={require('../../assets/images/icprofile.png')} />
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>Nguyen Trung Hai</Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400 }}>0123456789</Text>
                </View>
            </View>
            <View style={styles.bodycontainer} >
            <View style={styles.body} >
                    <TouchableOpacity style={styles.itembody} >
                        <Image source={require('../../assets/images/icprofile.png')} />
                        <Text style={styles.textItem}> Chỉnh sửa tài khoản </Text>
                        <Image source={require('../../assets/images/chevron-right.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itembody} >
                        <Image source={require('../../assets/images/icexit.png')} />
                        <Text style={styles.textItem} > Đăng xuất </Text>
                    </TouchableOpacity>


                </View>
                
            </View>
    </View>
  )
}

export default SettingAdmin

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20


    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D97245'
    },
    textback: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 20
    },
    centerHeader: {
        flexDirection: 'column',
        paddingTop: 50,
        paddingBottom: 30,
        alignItems: 'center'
    },
    bodycontainer:{
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    
        
    },
   
    body:{
        padding:30,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
   
    itembody: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:10,
        height:80,
    },
    textItem:{
        position:'absolute',
        start:'30%',
        fontSize:16,
        color:'#000000',
        fontWeight:'500',
        fontFamily:'Poppins'
    }


})
