import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from '../axios/AxiosIntance';
import ItemContact from './ItemContact';


const baseImgPath = '../assets/images/';
const ContactScreen = ( props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    useEffect(() => {
        const getNews = async () => {
         
          const respone = await AxiosIntance().get("/user/admin");
          if (respone.result == true) {

            setdataNe(respone.admin);
            console.log("du lieu" + respone.admin);
          }
          else {
            ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
          }
        }
        getNews();
    
        return () => {
        }
      }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Image style={styles.icarrowleft} source={require(baseImgPath+'chevron-left.png')} />
                    <Text style={{
                        alignItems: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                        color: 'black'
                    }}> Liên hệ</Text>
                </View >

            </View>
            <View style={styles.body}>
                <View style={styles.topbody} >
                    <Text style={{fontWeight: 'bold',marginBottom:20,marginTop:20 }}> Phòng kỹ thuật</Text>

                   
                    <FlatList
                    data={dataNe}
                    renderItem={({ item }) => <ItemContact admin={item} navigation={navigation} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                  />
                    
                </View>
                <View style={styles.topbody}>
                <Text style={{fontWeight: 'bold',marginBottom:20,marginTop:20 }}> Phòng Hành Chính</Text>
                <FlatList
                    data={dataNe}
                    renderItem={({ item }) => <ItemContact admin={item} navigation={navigation} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    />

                </View>
            </View>

        </View>
    )
}

export default ContactScreen

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