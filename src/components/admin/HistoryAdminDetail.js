import { StyleSheet, Text, View, Dropdown, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import AxiosIntance from '../../axios/AxiosIntance';
const baseImgPath = '../../assets/images/';
const HistoryAdminDetail = (props) => {
    const [isLoading, setisLoading] = useState(false);
    const [data, setdataNe] = useState("");
    useEffect(() => {
        const getNews = async () => {
            const response = await AxiosIntance().get(`/report/`);
            console.log(response.report);
            if (response.result == true) {
                // console.log(respone.report.admin);
                // lay du lieu ok
                setdataNe(response.report);
                console.log("data " + data.room)
                setisLoading(false);
            }
            else {
                ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
            }
        }
        setisLoading(true);
        getNews();

        return () => {
        }
    }, []);
    return (
        <View>
            <View style={styles.header}>
                <Icon style={styles.icon} name='left' size={20} color="#000000" />
                <Text style={styles.text}>Sự cố về cơ sở vật chất</Text>
                <Text></Text>
            </View>
            <View>
                <Text style={styles.text1}>Tên người yêu cầu:</Text>
                <View style={styles.leader1}>
                    <Image style={styles.image} source={{ uri: data.image }}></Image>
                    <View style={styles.leader2}>
                        <Text style={styles.text2}>Lê Văn Hiếu</Text>
                        <Text style={styles.text3}>0123456789</Text>
                    </View>
                    <Image style={styles.image1} source={require('../../assets//images/phone.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text style={styles.text4}>Thời gian: </Text>
                    <Text style={styles.text3}> 09:05 am</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Text style={styles.text4}>Phòng: </Text>
                    <Text style={styles.text5}>T1011</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text style={styles.text4}>Mô tả sự cố: </Text>
                    <Text style={styles.text6}> Bóng đèn cháy, lỗi tivi, lỗi điều hòa</Text>
                </View>
            </View>
            <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Sự cố này hoàn thành chưa được tốt cần khắc phục"
            />
            <Text style={styles.text8}>Trạng Thái đã xử lý</Text>
            <View style={{ height: '56%', width: '100%', padding: 20, paddingBottom: 15 }}>
            </View>
            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity style={{
                    display: 'flex',
                    width: 343,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    gap: 10,
                    borderWidth: 1,
                    borderColor: 'rgba(217, 114, 69, 0.80)',
                    borderStyle: 'solid',
                    backgroundColor: '#D97245',
                    borderRadius: 8,
                    paddingVertical: 10, // Padding theo chiều dọc (top và bottom)
                    paddingHorizontal: 33, // Padding theo chiều ngang (left và right),
                }}>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HistoryAdminDetail

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    },
    icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 20
    },
    text1: {
        color: 'rgba(0, 0, 0, 0.64)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        padding: 20
    },
    leader1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: 52,
        height: 47
    },
    image1: {
        width: 52,
        height: 47,
        marginRight: 35
    },
    leader2: {
        position: 'absolute',
        width: '70%',
        paddingLeft: 75
    },
    text2: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',

    },
    text3: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',

    },
    text4: {
        color: 'rgba(0, 0, 0, 0.64)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',

    },
    text5: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 20
    },
    text6: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
    },
    textInput: {
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingBottom: 50,
        padding: 15,
        fontSize: 14,
        marginTop: 15,
        margin: 10,
        backgroundColor: '#F1F4F5',
    }, button1: {
        display: 'flex',
        width: 167.474,
        height: 40,
        padding: 10,
        paddingHorizontal: 24, // Padding horizontal
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3, // This is similar to 'gap' in some cases
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#29D13A'
    },
    button2: {
        display: 'flex',
        width: 167.474,
        height: 40,
        padding: 10,
        paddingHorizontal: 24, // Padding horizontal
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3, // This is similar to 'gap' in some cases
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#FF2D2D'
    },
    text7: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'normal'
    },
    text8: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        padding: 20
    }
})