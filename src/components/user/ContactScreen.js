import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from '../../axios/AxiosIntance';
import ItemContact from '../ItemContact';
import Loading from '../isLoading/Loading';
const { width, height } = Dimensions.get('window');


const baseImgPath = '../../assets/images/';
const ContactScreen = (props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    const [data1, setdata1] = useState([]);
    const [data2, setdata2] = useState([]);
    const [data3, setdata3] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const getNews = async () => {
        const respone = await AxiosIntance().get("/user/admin");

        setIsLoading(true);
        console.log(respone);
        if (respone.result == true) {
            setdata1(respone.admins.filter(item => item.type === 1));
            setdata2(respone.admins.filter(item => item.type === 2));
            setdata3(respone.admins.filter(item => item.type === 3));
            setIsLoading(false);
        }
        else {
            ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
        }
    }
    useEffect(() => {

        getNews();

        return () => {
        }
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.icarrowleft} source={require(baseImgPath + 'chevron-left.png')} />
                    </TouchableOpacity>
                    <Text onPress={() => getNews()} style={{
                        alignItems: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                        color: 'black'
                    }}> Liên hệ</Text>
                </View >

            </View>
            <View style={{paddingBottom:height*0.05}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topbody} >
                        <Text style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}> Phòng kỹ thuật</Text>
                        <FlatList
                            data={data1}
                            renderItem={({ item }) => <ItemContact admin={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                    <View style={styles.topbody}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}> Phòng Hành Chính</Text>
                        <FlatList
                            data={data2}
                            renderItem={({ item }) => <ItemContact admin={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                    <View style={styles.topbody}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}> Phòng công tác sinh viên</Text>
                        <FlatList
                            data={data3}
                            renderItem={({ item }) => <ItemContact admin={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                </ScrollView>
            </View>
            {
                (isLoading) ? <View style={{ position: 'absolute', width: width, height: height, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><ActivityIndicator size="large" color="#d6d6d6" /></View> : <View></View>
            }
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
        marginBottom: 20,
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
        padding: 10,
        marginBottom: 10,
    },
    itemin: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',



    },
    bottombody: {

    },
    name: {
        color: '#000000',
        fontSize: 15,

    }
})