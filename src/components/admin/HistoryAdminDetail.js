import { StyleSheet, Text, View, Dropdown, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import AxiosIntance from '../../axios/AxiosIntance';
const baseImgPath = '../../assets/images/';
const HistoryAdminDetail = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const { id } = params;
    const [isLoading, setisLoading] = useState(false);
    const [report_date, setreport_date] = useState("");
    const [data, setdataNe] = useState([]);
    const [room, setroom] = useState("");
    const [admin, setAdmin] = useState("Chưa có");
    const [phone, setPhone] = useState("Chưa có");
    const [avatar, setAvatar] = useState("https://th.bing.com/th/id/OIP.NkU4YYLWSnrScALzNF-bxAAAAA?pid=ImgDet&rs=1");

    const [lengthImage, setLengthImage] = useState(1);
    const [image, setImage] = useState("http://dummyimage.com/142x100.png/5fa2dd/ffffff");
    const getNews = async () => {
        const getAdmin = async () => {
            try {
                if (response.report.userId) {
                    const respones = await AxiosIntance().get(`/report/user/${response.report.userId}`);
                    setAdmin(respones.user.full_name);
                    setPhone(respones.user.phone)
                    setAvatar(respones.user.avatar)
                }
            } catch (error) {
            }
        }
        const response = await AxiosIntance().get(`/report/${id}`);
        if (response.result == true) {
            // console.log(respone.report.admin);
            // lay du lieu ok
            setLengthImage(response.report.image.length);
            setdataNe(response.report);
            try {
                //setAdmin(response.report.admin.full_name);
                setImage(response.report.image)
            } catch (error) {
                console.log(error);
            }
            setisLoading(false);
            getAdmin();
        }
        else {
            ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
        }
    }
    useEffect(() => {

        setisLoading(true);
        getNews();

        return () => {
        }
    }, []);


    try {
        return (
            <View>
                <ScrollView>
                    <View style={styles.header}>
                        <Icon style={styles.icon} onPress={() => navigation.goBack()} name='left' size={20} color="#000000" />
                        <Text style={styles.text}>{data.description.includes("--") ? data.description.split("--")[0] : data.description}</Text>
                        <Text></Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>Người yêu cầu:</Text>
                        <View style={styles.leader1}>
                            <Image style={styles.image} source={{ uri: avatar }}></Image>
                            <View style={styles.leader2}>
                                <Text style={styles.text2}>{admin}</Text>
                                <Text style={styles.text3}>0{phone}</Text>
                            </View>
                            <Image style={styles.image1} source={require('../../assets//images/phone.png')}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <Text style={styles.text4}>Thời gian: </Text>
                            <Text style={styles.text3}> {data.time}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={styles.text4}>Phòng: </Text>
                            <Text style={styles.text5}>{data.room}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <Text style={styles.text4}>Mô tả sự cố: </Text>
                            <Text style={styles.text6}> {data.description}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 20, paddingTop: 5 }}>
                            <Text style={styles.text4}>Đánh giá: </Text>
                            <Text style={styles.text6}>{data.comment ? data.comment : 'Chưa có đánh giá'}</Text>
                        </View>
                    </View>

                    <Text style={styles.text8}>Trạng thái xử lý</Text>
                    <View style={{ height: '35%', width: '100%', paddingBottom: 15, paddingLeft: 20 }}>
                        <Content data={data} />
                    </View>
                </ScrollView>

            </View>
        )
    } catch (error) {

    }

}
const Content = (props) => {
    const { data } = props;
    const status = data.status;
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: 70, height: '100%', padding: 5, alignItems: 'center' }}>
                <Image source={status < 0 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
                <View style={{ height: '22%', width: 3, backgroundColor: '#d3d3d3' }}></View>
                <Image source={status < 1 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
                <View style={{ height: '22%', width: 3, backgroundColor: '#d3d3d3' }}></View>
                <Image source={status < 2 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ paddingTop: 10, width: '100%', flex: 1, paddingLeft: 10 }}>
                    {
                        (status < 1) ?
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> {data.time}</Text>
                                    </View>
                                </View>
                            ) :
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> {data.time}</Text>
                                    </View>
                                </View>
                            )
                    }
                </View>
                <View style={{ marginTop: 65, width: '100%', flex: 1, paddingLeft: 10 }}>
                    {
                        (status < 1) ?
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu đã được tiếp nhận</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> __:__</Text>
                                    </View>
                                </View>
                            ) :
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu đã được tiếp nhận</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> {data.accept}</Text>
                                    </View>
                                </View>
                            )
                    }
                </View>
                <View style={{ marginTop: 55, width: '100%', flex: 1, paddingLeft: 10 }}>
                    {
                        (status < 2) ?
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu đã hoàn thành</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> __:__</Text>
                                    </View>
                                </View>
                            ) :
                            (
                                <View style={{ flexDirection: 'column' }}>
                                    <Text>Yêu cầu đã hoàn thành</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> {data.done}</Text>
                                    </View>
                                </View>
                            )
                    }
                </View>
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
        height: 47,
        borderRadius: 30
    },
    image1: {
        width: 52,
        height: 47,
        marginRight: 35
    },
    leader2: {
        position: 'absolute',
        width: '70%',
        paddingLeft: 80
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