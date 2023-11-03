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
      const userId2 = respone.report.map(report => report.userId._id);
      console.log("data ne: " + userId2);
      // console.log(iduser);
      if (respone.result == true) {
        // lay du lieu ok
        const data = sortDataByDate(respone.report);
        setdataNe(data);
        console.log("data: " + data);
        console.log("Profile: " + userProfile.id);
        // // setdataNe(data)
        setVisibleData(data.slice(0, initialItemCount));
        // // console.log("Dữ liệu: ", data);
        setisLoading(false);

        // function checkIfIdsMatch(id1, id2) {
        //   if (id1.length !== id2.length) {
        //     return false; // Nếu độ dài của hai ID khác nhau, chắc chắn chúng không trùng nhau.
        //   }
        //   for (let i = 0; i < id1.length; i++) {
        //     if (id1[i] !== id2[i]) {
        //       return false; // Nếu tìm thấy một ký tự khác nhau, thì hai ID không trùng nhau.
        //     }
        //   }
        //   return true; // Nếu không tìm thấy bất kỳ ký tự nào khác nhau, hai ID trùng nhau.
        // }
        // const idPairs = [
        //   { id1: userId2, id2: userProfile.id },
        //   // { id1: "xyz123", id2: "xyz123" },
        //   // Thêm các cặp ID khác vào mảng nếu cần
        // ];

        // idPairs.forEach(pair => {
        //   if (checkIfIdsMatch(pair.id1, pair.id2)) {
        //     setdataNe(data);
        //     console.log("Hai ID trùng nhau.");
        //   } else {
        //     console.log("Hai ID không trùng nhau.");
        //   }
        // });
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
    setisLoading(true);
    try {
      const response = await AxiosIntance().get("/report");
      if (response.result == true) {
        // lay du lieu ok
        const data = sortDataByDate(response.report);
        setdataNe(data);
        console.log("du lieu ne" + response.report);
        setisLoading(false);
      }
      else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
    }
  }
  const IdUser = async () => {
    setisLoading(true)
    try {
      const response = await AxiosIntance().get(`/report/user/` + iduser);
      console.log("du lieu ne " + response.user._id);
      if (response.result == true) {
        const data = sortDataByDate(response.user._id);
        setdataNe(data);
        console.log("du lieu ne: " + data);
        setisLoading(false);
      }
    } catch (error) {
      ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
    }
  }
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
              data={visibleData.slice().reverse()} // Đảo ngược mảng dữ liệu
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