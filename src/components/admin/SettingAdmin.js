import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState,useContext } from 'react'
const baseImgPath = '../assets/images/';
const SettingAdmin = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{width:60,height:60,marginBottom:10,borderRadius:20}} source={require(baseImgPath + 'avavtarChibi.png')} />
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>Nguyen Trung Hai</Text>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 400 }}>0123456789</Text>
            </View>
            <View style={styles.bodycontainer} >
                <View style={styles.body} >
                    <TouchableOpacity style={styles.itembody}>
                        <Image source={require(baseImgPath + 'icprofile.png')} />
                        <Text style={styles.textItem}> Chỉnh sửa tài khoản </Text>
                        <Image source={require(baseImgPath + 'chevron-right.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itembody}>
                        <Image source={require(baseImgPath + 'icexit.png')} />
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
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        height:'40%'
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingLeft: 40,
        backgroundColor: 'green',

    },

    container: {
        flex:1,
        backgroundColor: '#D97245'
    },

    centerHeader: {
        flexDirection: 'column',
        paddingTop: 50,
        paddingBottom: 30,
        alignItems: 'center'
    },
    bodycontainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,


    },
    textcontact: {
        paddingTop: 30
    },
    body: {
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
    trackColor: {
        false: '#d9d9d9',
        true: '#d9d9d9',
    },
    thumbColor: isEnabled => isEnabled ? '#D97245' : '#D97245',


    icarrowleft: {
        position: 'absolute',
        top:15,
        start:15,
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