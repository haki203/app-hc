/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <View style={[styles.itemm, { backgroundColor: item.color }]}>
        <View style={styles.info}>
          <View style={{ padding: 6.5, paddingLeft: 4 }}>
            <Image style={styles.building} source={item.icon} />
          </View>

          <Text style={styles.floor}>{item.floor}</Text>
          <Text style={styles.room}>{item.room}</Text>
        </View>
      </View>
    </View>
  );
};

const ListFloor_F = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/icons8-back-50.png')}
          />
        </TouchableOpacity>
        <Text style={styles.header_name}>Tòa F</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/ic_bell.png')}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ListFloor_F;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  logo: {
    width: 24,
    height: 24,
  },
  header_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  body: {
    paddingTop: 24,
    width: '100%',
    height: 'auto',
  },

  itemm: {
    padding: 10,
    width: 103,
    height: 115,

    borderRadius: 10,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'left',
  },
  building: {
    width: 25,
    height: 20,
  },

  floor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#383838',
    paddingTop: 14,
  },
  room: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#383838',
    paddingTop: 5,
  },
});

const data = [
  {
    id: 1,
    floor: 'Tầng 1',
    room: '17 phòng',
    color: '#f4eaff',
    icon: require('../../assets/images/ic_building1.png'),
  },
  {
    id: 2,
    floor: 'Tầng 2',
    room: '17 phòng',
    color: '#FFFADD',
    icon: require('../../assets/images/ic_building2.png'),
  },
];
