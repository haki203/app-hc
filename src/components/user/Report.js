import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ActivityIndicator, FlatList, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AxiosIntance from '../../axios/AxiosIntance';
import Loading from '../isLoading/Loading';
import { Modal, Alert, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import { AppContext } from '../../context/AppContext';
import { report } from '../../../server/routes';
const baseImgPath = '../../assets/images/';

const { width, height } = Dimensions.get('window');
const Report = (props) => {
  const { infoUser } = useContext(AppContext);
  const { navigation } = props;
  const { route } = props;
  const { params } = route;
  const { id } = params;
  const [isLoading, setisLoading] = useState(false);
  const [data, setdataNe] = useState([]);
  const [admin, setAdmin] = useState("Chưa có");
  const [lengthImage, setLengthImage] = useState(1);
  const [image, setImage] = useState("http://dummyimage.com/142x100.png/5fa2dd/ffffff");
  const [isDobModalVisible, setDobModalVisible] = useState(false);
  const [isDobModalVisible1, setDobModalVisible1] = useState(false);
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');
  const [reportId, setReportId] = useState([]);



  useEffect(() => {
    const getNews = async () => {
      // lay name admin
      const getAdmin = async () => {
        try {
          if (response.report.admin) {
            const respones = await AxiosIntance().get(`/report/user/${response.report.admin}`);
            console.log("admin khi goi api detail ne: ", respones.user.full_name);
            setAdmin(respones.user.full_name);
          }
        } catch (error) {
        }

      }
      const response = await AxiosIntance().get(`/report/${id}`);
      console.log("Hinh ne: ", response.report.image[0]);
      const data1 = {
        id: response.report._id,
        report_date: response.report.report_date,
        time: response.report.time,
        room: response.report.room
      }
      console.log("data 1 ne", data1)
      setReportId(data1);
      if (response.result == true) {
        // console.log(respone.report.admin);
        // lay du lieu ok
        setLengthImage(response.report.image.length);
        console.log("report nay co ", response.report.image.length, " hinh");
        setdataNe(response.report);
        console.log("datane: ", response.report)
        try {
          setImage(response.report.image)
          console.log(response.report.image);
        } catch (error) {
          console.log(error);
        }
        setisLoading(false);
        getAdmin();

      }
      else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      }
    }

    setisLoading(true);
    getNews();

    return () => {
    }
  }, []);

  const DanhGia = async () => {
    try {
      try {
        if (comment) {
          setComment(comment);
        } else {
          Alert.alert('Vui lòng nhập comment');
          return;
        }
      } catch (error) {
      }
      try {
        const postData = {
          reportId: reportId.id,
          comment: comment,
        };
        console.log("postData ne: ", postData);
        const respone = await AxiosIntance().post('/report/comment', postData);
        console.log("Kết quả nè", respone);
        if (respone.result){
          ToastAndroid.show("Đánh giá thành công", ToastAndroid.SHORT);
          setDobModalVisible1(false);
        }
        else {
          ToastAndroid.show("Đánh giá thất bại", ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show("Đánh giá thất bại ne", ToastAndroid.SHORT);

      }
    } catch (error) {
      console.log("lỗi đăng nè: ", error);
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View>{isLoading ? <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="black" /></View> : <View></View>}</View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Image style={styles.back} source={require(baseImgPath + 'back.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.text}>Yêu cầu hỗ trợ CNTT</Text>
        <Text></Text>
      </View>
      <View style={styles.leader}>
        <Image style={styles.profile} source={{ uri: image[0] }}></Image>
        <View style={styles.leader2}>
          <Text style={styles.text2}>{data.type === 1 ? 'Sự cố về CNTT' : 'Sự cố về cơ sở vật chất'}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text3}>Người tiếp nhận: {admin}</Text>
          </View>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{data.report_date}</Text>
            <Text style={styles.text4}>{data.time}</Text>
            <Text style={styles.text4}>Phòng: {data.room}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
      <View>
        {lengthImage > 1 ? (
          <View >
            <Text style={styles.text5}>Tất cả ảnh</Text>
            <FlatList
              data={image}
              horizontal={true}
              style={{ paddingStart: 10 }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View>
                  <Image
                    source={{ uri: item }}
                    style={{ width: 120, height: 120, margin: 10 }}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <Text style={styles.text5}>Trạng Thái yêu cầu</Text>

      <View style={{ height: 300, width: '100%', padding: 20, marginBottom: 25 }}>
        <Content data={data} />
      </View>
      <View style={{ alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setDobModalVisible1(true)} style={{
          display: 'flex',
          width: 343,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          gap: 10,
          borderWidth: 1,
          borderColor: 'rgba(217, 114, 69, 0.80)',
          borderStyle: 'solid',
          backgroundColor: '#D97245',
          borderRadius: 8,
          paddingVertical: 10, // Padding theo chiều dọc (top và bottom)
          paddingHorizontal: 33, // Padding theo chiều ngang (left và right),
          marginBottom: 20
        }}>
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            fontWeight: '700',
            fontStyle: 'normal',
          }}>{data.status === 2 ? 'Đánh giá' : 'Phản hồi'}</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={isDobModalVisible1}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{
                textAlign: 'center',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: '700',
                color: '#000',
                paddingBottom: '5%'
              }}>Đánh Giá</Text>
              <Icon onPress={() => setDobModalVisible1(false)} style={styles.iconmenu} name='closecircleo' size={25} color="#000" />
              <TextInput
                style={styles.input1}
                placeholder="Ghi đánh giá"
                placeholderTextColor='#808080'
                onChangeText={(text) => setComment(text)}
                value={comment}
              />
              <TouchableOpacity onPress={() => DanhGia()} style={styles.button1}>
                <Text style={{
                  color: '#FFF',
                  fontSize: 15,
                  fontWeight: '700',
                  fontStyle: 'normal',
                  fontFamily: 'Poppins'
                }}>Hoàn Thành</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}
const Content = (props) => {
  const { data } = props;
  const status = data.status;
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ width: 70, height: '95%', backgroundColor: 'white', padding: 5, alignItems: 'center' }}>
        <Image source={status < 0 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
        <View style={{ height: '22%', width: 3, backgroundColor: '#d3d3d3' }}></View>
        <Image source={status < 1 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
        <View style={{ height: '20%', width: 3, backgroundColor: '#d3d3d3' }}></View>
        <Image source={status < 2 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ padding: 20, width: '100%', flex: 1 }}>
          {
            (status < 1) ?
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu</Text>
                  <Text>{data.time}</Text>
                </View>
              ) :
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu xử lý</Text>
                  <Text>{data.time}</Text>
                </View>
              )
          }
        </View>
        <View style={{ padding: 20, width: '100%', flex: 1 }}>
          {
            (status < 1) ?
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu đã được tiếp nhận</Text>
                  <Text>__:__</Text>
                </View>
              ) :
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu đã được tiếp nhận</Text>
                  <Text>{data.accept}</Text>
                </View>
              )
          }
        </View>
        <View style={{ padding: 20, width: '100%', flex: 1}}>
          {
            (status < 2) ?
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu đã hoàn thành</Text>
                  <Text>__:__</Text>
                </View>
              ) :
              (
                <View style={{ flexDirection: 'column' }}>
                  <Text>Yêu cầu đã hoàn thành</Text>
                  <Text>{data.done}</Text>
                </View>
              )
          }
        </View>
      </View>
    </View>
  )
}
export default Report

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24
  },
  back: {
    width: 24,
    height: 24
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'normal',
    fontFamily: 'Poppins'
  },
  leader: {
    backgroundColor: '#F1F4F5',
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    width: 375,
    height: 101,
    flexShrink: 0,
    marginHorizontal: 17,
    marginTop: 17
  },
  text2: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingTop: 17,
    fontFamily: 'Poppins'
  },
  text3: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    paddingTop: 13,
    fontFamily: 'Poppins'
  },
  leader2: {
    paddingLeft: 18
  },
  leader3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text4: {
    color: '#000',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Poppins'
  },
  text5: {
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
    fontStyle: 'normal',
    padding: 17,
    fontFamily: 'Poppins',
    paddingBottom: 5
  },
  text6: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    marginTop: 2,
    fontFamily: 'Poppins'
  },
  text7: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: 4,
    fontFamily: 'Poppins'
  },
  button: {
    display: 'flex',
    width: 343,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    gap: 10,
    backgroundColor: 'rgba(217, 114, 69, 0.80)',
    borderWidth: 1,
    borderColor: 'rgba(217, 114, 69, 0.80)',
    borderStyle: 'solid',
    borderRadius: 8,
    paddingVertical: 10, // Padding theo chiều dọc (top và bottom)
    paddingHorizontal: 33, // Padding theo chiều ngang (left và right),

  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    end: 10,
    top: '25%',

  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '13%',
    backgroundColor: '#D97245',
    borderRadius: 15,
    top: '18%'
  },
  button_text: {
    color: '#272956',
    height: 40,
    textAlign: 'center',
    paddingTop: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    height: 450,
    position: 'absolute'
  },
  input1: {
    height: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    fontStyle: 'normal',
    borderRadius: 15,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins',
    paddingBottom: 200,
    paddingLeft: 10
  },
  iconmenu: {
    position: 'absolute',
    right: 0,
    padding: 20
  }
})