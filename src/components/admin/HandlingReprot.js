import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {ItemProblem} from './ItemProblem';
import {FlatList} from 'react-native-gesture-handler';

const HandlingReport = ({navigation}) => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
        height: '100%',
      }}>
      {/* <FlatList
        data={data}
        renderItem={({item}) => <ItemProblem problem={item} />}
        keyExtractor={item => item.id.toString()}
      /> */}

      <ItemProblem navigation={navigation}/>
    </View>
  )
}

export default HandlingReport

const styles = StyleSheet.create({})