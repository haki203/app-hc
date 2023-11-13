import { StyleSheet, Text, View, Dimensions, Image, FlatList, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import ItemHistory from './ItemHistory';
import Icon from "react-native-vector-icons/AntDesign"
import AxiosIntance from '../../axios/AxiosIntance';
import Loading from '../isLoading/Loading';
import { AppContext } from '../../context/AppContext';
const bacroundHeight = '#FFF';
const { width, height } = Dimensions.get('window');
const baseImgPath = '../../assets/images/';

const History = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { userProfile } = useContext(AppContext);
  const [visibleData, setVisibleData] = useState([]);

  const [iduser, setIdUser] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const initialItemCount = 3;

  useEffect(() => {
    const getNews = async () => {
      setisLoading(true);
      const respone = await AxiosIntance().get("/report");
      const userId2 = respone.report.map(report => report.userId);
      console.log("data ne: " + userId2);
      console.log("data ne: " + userProfile.id);
      const useIds = userId2.join(',');
      const useIdsArray = useIds.split(',');
      const userPRF = userProfile.id;
      const userProfileId = userPRF.toString();
      const res = respone.report.map(report => report.description);
      const image = respone.report.map(report => report.image);
      const time = respone.report.map(report => report.time);
      const room = respone.report.map(report => report.room);
      const report_date = respone.report.map(report => report.report_date);

      console.log("dess ", res);
      console.log(useIdsArray)
      // console.log(iduser);
      if (respone.result == true) {
        // lay du lieu ok
        const data = sortDataByDate(respone.report);
        let dataUser = [];
        console.log("id user ne: ", userProfile.id);
        for (let i = 0; i < data.length; i++) {
          if (respone.report[i].userId == userProfile.id) {
            console.log("id report ne: ", respone.report[i].userId);
            dataUser.push(data[i]);
          }

        }
        console.log(dataUser.length);
        setdataNe(dataUser);
        setVisibleData(dataUser.slice(0, initialItemCount));
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

  function sortDataByDate(data, ascending) {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const dateA = new Date(a.report_date.split('/').reverse().join('-'));
      const dateB = new Date(b.report_date.split('/').reverse().join('-'));
      return ascending ? dateA - dateB : dateB - dateA;
    });
    return sortedData;
  }

  const reload = async () => {
    const getNews = async () => {
      setisLoading(true);
      const respone = await AxiosIntance().get("/report");
      if (respone.result == true) {

        // lay du lieu ok
        const data = sortDataByDate(respone.report);
        let dataUser = [];
        console.log("id user ne: ", userProfile.id);
        for (let i = 0; i < data.length; i++) {
          if (respone.report[i].userId == userProfile.id) {
            console.log("id report ne: ", respone.report[i].userId);
            dataUser.push(data[i]);
          }

        }
        console.log(dataUser.length);
        setdataNe(dataUser);
        setVisibleData(dataUser.slice(0, initialItemCount));
        console.log("du lieu" + respone.report);
        setisLoading(false);
      }
      else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      }
    }
    getNews();
  }
  // const IdUser = async () => {
  //   setisLoading(true)
  //   try {
  //     const response = await AxiosIntance().get(`/report/user/` + iduser);
  //     console.log("du lieu ne " + response.user._id);
  //     if (response.result == true) {
  //       const data = sortDataByDate(response.user._id);
  //       setdataNe(data);
  //       console.log("du lieu ne: " + data);
  //       setisLoading(false);
  //     }
  //   } catch (error) {
  //     ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
  //   }
  // }
  const loadMoreData = () => {
    if (!isLoadingMore) {
      console.log("loading more");
      setisLoading(true);
      // Tải thêm 4 item
      const currentItemCount = visibleData.length;
      const nextIndex = currentItemCount + 3;
      const newVisibleData = dataNe.slice(0, nextIndex);

      setVisibleItems(visibleItems + 3);
      setVisibleData(newVisibleData);
      setIsLoadingMore(false);
      setisLoading(false);

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: 20, marginTop: 35 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <Image style={styles.profile} source={{ uri: userProfile.avt }}></Image>
            <Text style={styles.text1}>{userProfile.name}</Text>
          </View>
          <Icon onPress={() => navigation.navigate('Notification')} style={styles.iconmenu} name='bells' size={20} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.leader}>
        <Text style={styles.text2}>Lịch sử</Text>
        <Icon onPress={reload} style={styles.iconmenu1} name='reload1' size={20} />
        <View >{isLoading ? <Loading /> :
          <View style={{ width: width, paddingBottom: 160 }}>
            <FlatList
              data={visibleData} // Đảo ngược mảng dữ liệu
              renderItem={({ item }) => <ItemHistory report={item} navigation={navigation} />}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              onEndReached={loadMoreData} // Khi scroll đến cuối danh sách, gọi hàm để tải thêm item
              onEndReachedThreshold={0.1}
              ListFooterComponent={isLoadingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
            />
          </View>
        }</View>

      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D97245'
  },
  header: {
    height: height * 0.157,

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
  iconmenu1: {
    position: 'absolute',
    top: 20,
    end: 10
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