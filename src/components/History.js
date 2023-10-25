<<<<<<< HEAD
import { StyleSheet, Text, View, Dimensions, Image, FlatList,ActivityIndicator } from 'react-native'
=======
import { StyleSheet, Text, View, Dimensions, Image, FlatList, ActivityIndicator } from 'react-native'
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
import React, { useEffect, useState } from 'react'
import ItemHistory from './ItemHistory';
import Icon from "react-native-vector-icons/AntDesign"
import AxiosIntance from '../axios/AxiosIntance';
import Loading from './isLoading/Loading';

const bacroundHeight = '#FFF';
const { width, height } = Dimensions.get('window');
const baseImgPath = '../assets/images/';

const History = (props) => {
  const { navigation } = props;
<<<<<<< HEAD
  const [isLoading, setisLoading] = useState(false);


=======
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(false);

>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
  useEffect(() => {
    const getNews = async () => {
      setisLoading(true);
      const respone = await AxiosIntance().get("/report");
      if (respone.result == true) {

        // lay du lieu ok
<<<<<<< HEAD
        // setdataNe(respone.product);

        console.log(respone);
=======
        setdataNe(respone.report);
        console.log("du lieu" + respone.report);
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
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
<<<<<<< HEAD

      <View>{isLoading ? <Loading/> : <View></View>}</View>

      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: 20 }}>
=======
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: 20, marginTop: 35 }}>
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <Image style={styles.profile} source={require(baseImgPath + 'profile.png')}></Image>
            <Text style={styles.text1}>Nguyễn Trung Hải</Text>
          </View>
          <Icon onPress={() => navigation.navigate('Notification')} style={styles.iconmenu} name='bells' size={20} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.leader}>
        <Text style={styles.text2}>Lịch sử</Text>
<<<<<<< HEAD
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemHistory product={item} navigation={navigation} />}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />
=======
        <View>{isLoading ? <Loading /> : 
        <FlatList
          data={dataNe}
          renderItem={({ item }) => <ItemHistory report={item} navigation={navigation} />}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />}</View>

>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
      </View>
    </View>
  )
}

export default History
<<<<<<< HEAD
const data = [
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
=======
// const data = [
//   {
//     "name": "Unbranded Bronze Chips",
//     "date": "2023-10-13",
//     "time": "9:31 am",
//     "room": "Sausages",
//     "_id": "1"
//   },
//   {
//     "name": "Rustic Soft Car",
//     "date": "2023-10-13",
//     "time": "20:31 pm",
//     "room": "Fish",
//     "_id": "2"
//   },
//   {
//     "name": "Generic Granite Pants",
//     "date": "2023-10-13",
//     "time": "19:31 pm",
//     "room": "Hat",
//     "_id": "3"
//   },
//   {
//     "name": "Incredible Soft Towels",
//     "date": "2023-10-13",
//     "time": "13:31 am",
//     "room": "Bacon",
//     "_id": "4"
//   },
//   {
//     "name": "Unbranded Concrete Tuna",
//     "date": "2023-10-13",
//     "time": "11:31 am",
//     "room": "Computer",
//     "_id": "5"
//   },
//   {
//     "name": "Oriental Frozen Ball",
//     "date": "2023-10-13",
//     "time": "10:31 am",
//     "room": "Tuna",
//     "_id": "6"
//   },
//   {
//     "name": "Incredible Steel Cheese",
//     "date": "2023-10-13",
//     "time": "9:31 am",
//     "room": "Table",
//     "_id": "7"
//   },
//   {
//     "name": "Bespoke Rubber Soap",
//     "date": "2023-10-13",
//     "time": "12:31 pm",
//     "room": "Bike",
//     "_id": "8"
//   }
// ];
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D97245'
  },
  header: {
<<<<<<< HEAD
    height: height * 0.18,

  },
  leader: {
    backgroundColor: bacroundHeight,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
=======
    height: height * 0.15,

  },
  leader: {
    height: height * 0.85,
    backgroundColor: bacroundHeight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
    alignItems: 'center',

  },
  text1: {
    fontSize: 16,
    color: '#FEFEFE',
    fontStyle: 'normal',
<<<<<<< HEAD
    fontWeight: '600',
    paddingLeft: 12
=======
    fontWeight: '700',
    paddingLeft: 12,
    fontFamily: 'Poppins'
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)

  },
  iconmenu: {

  },
  profile: {
    width: 55,
    height: 55
  },
  text2: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 24,
<<<<<<< HEAD
    fontWeight: '700',
    fontStyle: 'normal',
    marginTop: 18
=======
    fontWeight: '800',
    fontStyle: 'normal',
    marginTop: 18,
    fontFamily: 'Poppins'
>>>>>>> parent of aa22b2a (Merge branch 'main' into bao)
  }
})