import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import React, { useEffect, useState, useContext } from 'react'
import { Image } from 'react-native-elements';
import { ItemProblem } from './ItemProblem';
import { FlatList } from 'react-native-gesture-handler';
import Loading from '../isLoading/Loading';
import AxiosIntance from '../../axios/AxiosIntance';
import { AppContext } from '../../context/AppContext';
import { ItemHanding } from './ItemHanding';
const HandlingReport = ({ navigation }) => {
  const [data, setData] = useState([]);
  const { userProfile } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const getReport = async () => {
      setIsLoading(true);
      const res = await AxiosIntance().get("/report");
      console.log("du lieu " + res.report.length);
      if (res.result == true) {
        setIsLoading(false);
        let dataUser = [];
        console.log("id cua toi: ", userProfile.id);
        for (let i = 0; i < res.report.length; i++) {
          if (res.report[i].admin == userProfile.id) {
            dataUser.push(res.report[i]);
          }
          // const respone = await AxiosIntance().get(`/report/user/${res.report[i].admin}`);
          // for (let i = 0; i < respone.report.length; i++) {
          //   if (respone.report[i].userId == userProfile.id) {
          //     console.log("id report ne: ", respone.report[i].userId);
          //     dataUser.push(data[i]);
          //   }
          // }
        }
        console.log("su co dang tiep nhan: ", dataUser.length);
        setData(dataUser)
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
      <Loading />
    )
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        marginBottom: 50
      }}>
      {/* <Text>abc</Text> */}
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemHanding problem={item} navigation={navigation} />}
        keyExtractor={item => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {/* <ItemProblem navigation={navigation}/> */}
    </View>
  )
}

export default HandlingReport

const styles = StyleSheet.create({})