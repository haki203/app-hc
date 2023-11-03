import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {ItemProblem} from './ItemProblem';
import {FlatList} from 'react-native-gesture-handler';
import AxiosIntance from '../../axios/AxiosIntance';
import React, { useEffect, useState, useContext } from 'react'
import Loading from '../isLoading/Loading';

const CurrentReport = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   
    const getReport = async () => {
      const res = await AxiosIntance().get("/report");
      console.log("du lieu" + JSON.stringify(res));
      if (res) {

        const duLieuCoAdminNull = res.report.filter(item => item.admin === null);
        
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
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        height: '100%',
        marginBottom: 50
      }}>
      <FlatList
        data={data}

        renderItem={({item}) => <ItemProblem problem={item} navigation={navigation}/>}
        keyExtractor={item => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />


      {/* <ItemProblem navigation={navigation}/> */}
    </View>
  );
};

export default CurrentReport;

const styles = StyleSheet.create({});
