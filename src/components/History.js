import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'
import ItemHistory from './ItemHistory';
const bacroundHeight = '#FFF';
const height = Dimensions.get('window').height;
const baseImgPath = '../assets/images/';
const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 16, marginTop: 43 }}>
            <Image style={styles.profile} source={require(baseImgPath + 'profile.png')}></Image>
            <Text style={styles.text1}>Nguyễn Trung Hải</Text>
          </View>
          <Image style={styles.notifi} source={require(baseImgPath + 'notifications.png')}></Image>
        </View>
      </View>
      <View style={styles.leader}>
        <Text style={styles.text2}>Lịch sử</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemHistory product={item} />}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default History
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D97245'
  },
  header: {
    height: height * 0.18,
    
  },
  leader: {
    backgroundColor: bacroundHeight,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',

  },
  text1: {
    fontSize: 16,
    color: '#FEFEFE',
    fontStyle: 'normal',
    fontWeight: '600',
    paddingLeft: 12

  },
  notifi: {
    marginRight: 30,
    marginTop: 43,
    width: 30,
    height: 30
  },
  profile: {
    width: 55,
    height: 55
  },
  text2: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    marginTop: 18
  }
})