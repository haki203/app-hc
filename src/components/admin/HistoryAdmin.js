import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import ItemHistoryAdmin from './ItemHistoryAdmin';
import AxiosIntance from '../../axios/AxiosIntance';
import Loading from '../isLoading/Loading';
import { AppContext } from '../../context/AppContext';
const { width, height } = Dimensions.get('window');
const bacroundHeight = '#FFF';
const HistoryAdmin = (props) => {
  const { navigation } = props;
  const { userProfile } = useContext(AppContext);

  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getNews = async () => {
      setisLoading(true);
      const respone = await AxiosIntance().get("/report");
      if (respone.result == true) {

        // lay du lieu ok
        setdataNe(respone.report);
        console.log("du lieu" + respone.report);
        setisLoading(false);
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
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          marginTop: 35
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <Image source={{uri:userProfile.avt}} style={styles.profile}></Image>
            <Text style={styles.text1}>{userProfile.name}</Text>
          </View>
          <Icon style={styles.iconmenu} name='bells' size={20} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.leader}>
        <Text style={styles.text2}>Lịch sử</Text>
        <View style={{ width: width }}>
          <FlatList
            data={dataNe}
            renderItem={({ item }) => <ItemHistoryAdmin report={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            initialNumToRender={3}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}

export default HistoryAdmin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D97245'
  },
  header: {
    height: height * 0.15,
    backgroundColor: '#D97245'
  },
  leader: {
    height: height * 0.85,
    backgroundColor: bacroundHeight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  text1: {
    fontSize: 18,
    color: '#FEFEFE',
    fontStyle: 'normal',
    fontWeight: '700',
    paddingLeft: 12,
    fontFamily: 'Poppins'

  },
  profile: {
    width: 55,
    height: 55,
    borderRadius: 30
  },
  text2: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'normal',
    marginTop: 18,
    fontFamily: 'Poppins'
  }
})
const dataNe = [
  {
    "name": "Unbranded Bronze Chips",
    "date": "2023-10-13",
    "time": "9:31 am",
    "room": "Sausages",
    "_id": "1"
  },
  {
    "name": "Rustic Soft Car",
    "date": "2023-10-13",
    "time": "20:31 pm",
    "room": "Fish",
    "_id": "2"
  },
  {
    "name": "Generic Granite Pants",
    "date": "2023-10-13",
    "time": "19:31 pm",
    "room": "Hat",
    "_id": "3"
  },
  {
    "name": "Incredible Soft Towels",
    "date": "2023-10-13",
    "time": "13:31 am",
    "room": "Bacon",
    "_id": "4"
  },
  {
    "name": "Unbranded Concrete Tuna",
    "date": "2023-10-13",
    "time": "11:31 am",
    "room": "Computer",
    "_id": "5"
  },
  {
    "name": "Oriental Frozen Ball",
    "date": "2023-10-13",
    "time": "10:31 am",
    "room": "Tuna",
    "_id": "6"
  },
  {
    "name": "Incredible Steel Cheese",
    "date": "2023-10-13",
    "time": "9:31 am",
    "room": "Table",
    "_id": "7"
  },
  {
    "name": "Bespoke Rubber Soap",
    "date": "2023-10-13",
    "time": "12:31 pm",
    "room": "Bike",
    "_id": "8"
  }
];