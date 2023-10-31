import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState, useContext } from 'react'
import {Image} from 'react-native-elements';
import {ItemProblem} from './ItemProblem';
import {FlatList} from 'react-native-gesture-handler';
import Loading from '../isLoading/Loading';
import AxiosIntance from '../../axios/AxiosIntance';

const HandlingReport = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   
    const getReport = async () => {
      const res = await AxiosIntance().get("/report");
      console.log("du lieu" + JSON.stringify(res));
      if (res) {

        const duLieuCoAdminNull = res.report.filter(item => item.admin != null);
        
        console.log("du lieu" + JSON.stringify(res.report));
        console.log("du lieu"+ JSON.stringify(duLieuCoAdminNull));
        setData(duLieuCoAdminNull);
        setIsLoading(false);

      }
      else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      }
    }
    getReport();

    return () => {
    }
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    )
  }
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
        height: '100%',
      }}>
        {/* <Text>abc</Text> */}
      <FlatList
        data={data}
        renderItem={({item}) => <ItemProblem problem={item} navigation={navigation}/>}
        keyExtractor={item => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {/* <ItemProblem navigation={navigation}/> */}
    </View>
  )
}

export default HandlingReport

const styles = StyleSheet.create({})