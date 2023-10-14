import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Image style={styles.icarrowleft} source={require('../../asset/images/icArrowLeft.png')} />
                    <Text style={styles.textback}> Trở về</Text>
                </View >
                <View style={styles.centerHeader}>
                    <Image style={styles.icarrowleft} source={require('../../asset/images/avavtarChibi.png')} />
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>Nguyễn Trung Hải </Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400 }}>Trưởng phòng IT </Text>
                </View>
            </View>
            <View style={styles.bodycontainer} >
                <View style={styles.body} >
                    <View style={styles.textcontact}>
                        <Text style={{ color: '#d9d9d9', fontSize: 20, fontWeight: 500 }}>Số điện thoại </Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 400,paddingTop:10 }}>012345678 </Text>
                    </View >
                   <Image style={{  marginTop: 40 }} source={require('../../asset/images/icContact.png')} />
                    
                    
                </View>
                
            </View>
        </View>
    )
}

export default ProfileScreen

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
    textcontact:{
        paddingTop:30
    },
    body:{
        marginStart:30,
        marginEnd:30,
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    imagecontact:{
        paddingTop:30
    }


})