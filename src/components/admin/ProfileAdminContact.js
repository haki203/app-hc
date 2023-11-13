import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
const baseImgPath = '../../assets/images/';
const ProfileAdminContact = (props) => {
    const { navigation } = props;
    const {  admin } = props.route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                    <Image style={styles.icarrowleft} source={require(baseImgPath + 'chevron-left.png')} />
                    <Text style={styles.textback}> Trở về</Text>
                </TouchableOpacity >
                <View style={styles.centerHeader}>
                    <Image style={{ width: 60, height: 60, marginBottom: 10, borderRadius: 20 }} source={{ uri: admin.avatar }} />
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>{admin.full_name}</Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400 }}>
                        {admin.type === 1
                            ? 'Phòng kĩ thuật'
                            : admin.type === 2
                                ? 'Phòng hành chính'
                                : admin.type === 3
                                    ? 'Phòng công tác sinh viên'
                                    : 'Không xác định'}
                    </Text>
                </View>
            </View>
            <View style={styles.bodycontainer} >
                <View style={styles.body} >
                    <View style={styles.textcontact}>
                        <Text style={{ color: '#d9d9d9', fontSize: 20, fontWeight: 500 }}>Số điện thoại </Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 400, paddingTop: 10 }}>0{admin.phone}</Text>
                    </View >


                </View>

            </View>
        </View>
    )
}

export default ProfileAdminContact

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
        marginStart: 30,
        marginEnd: 30,
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    imagecontact: {
        paddingTop: 30
    }


})