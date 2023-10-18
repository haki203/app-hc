/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React,{useEffect,useState} from 'react';
import AxiosIntance from '../axios/AxiosIntance';
import Loading from './isLoading/Loading';

const baseImgPath = '../assets/images/';

const ReportA = () => {

  useEffect(() => {
    const getReportHistory = async () => {
      const respone = await AxiosIntance().get("/report");
      if (respone.result == true) {
        console.log(respone);
      }
      else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      }
    }
    getReportHistory();

    return () => {
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.ic_back}
          source={require(baseImgPath+'ic_backReport.png')}></Image>
        <Text style={styles.text1}>Yêu cầu hỗ trợ sự cố</Text>
        <Image></Image>
      </View>
      <View style={styles.body}>
        <Text style={styles.text2}>Trạng thái yêu cầu</Text>
        <View style={styles.status}>
          <View style={styles.status1}>
            <Image
              style={styles.ic}
              source={require(baseImgPath+'ic_tick.png')}></Image>
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>Yêu cầu</Text>
              <Text style={styles.status1_text_time}>09:25 am</Text>
            </View>
          </View>
          <View style={styles.line1}></View>
          <View style={styles.status2}>
            <Image
              style={styles.ic}
              source={require(baseImgPath+'ic_reload.png')}></Image>
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được tiếp nhận
              </Text>
              <Text style={styles.status1_text_time}>__:__ am</Text>
            </View>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.status1}>
            <Image
              style={styles.ic}
              source={require(baseImgPath+'ic_reload.png')}></Image>
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được hoàn thành
              </Text>
              <Text style={styles.status1_text_time}>__:__ am</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnDanhGia}>
        <Text style={styles.textBtn}>Phản hồi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#CDDBEA',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    height: 60,
  },
  ic_back: {
    width: 24,
    height: 24,
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
    marginLeft: -20,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
    marginBottom: 30,
    marginTop: 50,
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
  },
  status1: {
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
  },
  status1_text: {
    flexDirection: 'column',
    justifyContent: 'left',
    width: '100%',
    paddingLeft: 50,
    paddingTop: 3,
  },
  status1_text__name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  status1_text_time: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
    marginTop: 10,
  },
  status2: {
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
  },
  line1: {
    width: 4,
    height: 55,
    backgroundColor: '#D9D9D9',
    marginLeft: 24,
  },
  line2: {
    width: 4,
    height: 55,
    backgroundColor: '#D9D9D9',
    marginLeft: 24,
  },
  ic: {
    width: 48,
    height: 48,
  },
  btnDanhGia: {
    // backgroundColor: '#D97245',
    borderWidth:1,
    borderColor:'#D97245',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  textBtn: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D97245',
    fontFamily: 'Poppins',
  },
});
