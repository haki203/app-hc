import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from '../axios/AxiosIntance';
import Loading from './isLoading/Loading';
const baseImgPath = '../assets/images/';

const { width, height } = Dimensions.get('window');
const Report = (props) => {
  const { navigation } = props;
  const { route } = props;
  const { params } = route;
  const { id } = params;
  const [isLoading, setisLoading] = useState(false);
  const [data, setdataNe] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      // setisLoading(true);
      console.log(id);
      const response = await AxiosIntance().get(`/report/${id}`);

      console.log(response.report);
      if (response.result == true) {
        // console.log(respone.report.admin);
        // lay du lieu ok
        setdataNe(response.report);
        // setisLoading(false);
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
      <View>{isLoading ? <Loading /> : <View></View>}</View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Image style={styles.back} source={require(baseImgPath + 'back.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.text}>Yêu cầu hỗ trợ CNTT</Text>
        <Text></Text>
      </View>
      <View style={styles.leader}>
        <Image style={styles.profile} source={{ uri: data.image }}></Image>
        <View style={styles.leader2}>
          <Text style={styles.text2}>{data.type === 1 ? 'Sự cố về CNTT' : 'Sự cố về cơ sở vật chất'}</Text>
          <View style={{ flexDirection: 'row' }}>
            {/* <Text style={styles.text3}>Người tiếp nhận: {data.admin.full_name}</Text> */}
          </View>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{data.report_date}</Text>
            <Text style={styles.text4}>{data.time}</Text>
            <Text style={styles.text4}>Phòng: {data.room}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
      <Text style={styles.text5}>Trạng Thái yêu cầu</Text>
      <View style={{ height: '56%', width: '100%', padding: 20, paddingBottom: 15 }}>
        <Content data={data} />
      </View>
      <View style={{ alignItems: 'center', }}>
        <TouchableOpacity style={{
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
        }}>
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            fontWeight: '700',
            fontStyle: 'normal',
          }}>{data.status === 2 ? 'Đánh giá' : 'Phản hồi'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Content = (props) => {
  const { data } = props;
  const status = data.status;
  return (
    <View style={{ flex: 1,  flexDirection: 'row' }}>
      <View style={{ width: 70, height: '100%', backgroundColor: 'white', padding: 5, alignItems: 'center' }}>
        <Image source={status < 0 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
        <View style={{ height: '22%', width: 3, backgroundColor: '#d3d3d3' }}></View>
        <Image source={status < 1 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
        <View style={{ height: '22%', width: 3, backgroundColor: '#d3d3d3' }}></View>
        <Image source={status < 2 ? require(baseImgPath + 'resum.png') : require(baseImgPath + 'tick.png')} />
      </View>
      <View style={{ flexDirection: 'column',flex:1 }}>
        <View style={{padding:20,width:'100%',flex:1}}>
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
        <View style={{padding:20,width:'100%',flex:1}}>
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
        <View style={{padding:20,width:'100%',flex:1}}>
          {
            (status < 1) ?
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
    flex: 1,
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
    fontSize: 12,
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
    fontSize: 12,
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

  }
})