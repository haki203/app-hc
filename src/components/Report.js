import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from '../axios/AxiosIntance';
import Loading from './isLoading/Loading';
const baseImgPath = '../assets/images/';
const Report = (props) => {
  const {navigation} = props
  const [currentStep, setCurrentStep] = useState(1);
  const [imageSource1, setImageSource1] = useState(require(baseImgPath + 'resum.png'));
  const [imageSource2, setImageSource2] = useState(require(baseImgPath + 'resum.png'));
  const [text1, setText1] = useState('Yêu cầu đã được tiếp nhận');
  const [text2, setText2] = useState('__:__ am');
  const [text3, setText3] = useState('Yêu cầu đã hoàn thành');
  const [text4, setText4] = useState('__:__ am');
  const [buttonText, setButtonText] = useState('Phản hồi');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('rgba(217, 114, 69, 0.80)');
  const {route} = props;
  const {params} = route;
  const [type, settype] = useState("");
  const [userId, setuserId] = useState("");
  const [report_date, setreport_date] = useState("");
  const [time, settime] = useState("");
  const [room, setroom] = useState("")
  const [image, setimage] = useState("");
  const [isLoading, setisLoading] =useState(true);
  const handleButtonClick = () => {
    switch (currentStep) {
      case 1:
        setImageSource1(require(baseImgPath + 'tick.png'));
        setText1('Yêu cầu đã được tiếp nhận');
        setText2('10:00 am');
        setButtonText('Phản hồi');
        setButtonBackgroundColor('rgba(217, 114, 69, 0.80)');
        setCurrentStep(2);
        break;
      case 2:
        setImageSource2(require(baseImgPath + 'tick.png'));
        setText3('Yêu cầu đã hoàn thành');
        setButtonText('Đánh giá');
        setText4('12:00 pm');
        setButtonBackgroundColor('#D97245');
        setCurrentStep(3);
    }
  };

  useEffect(() => {
    const getNews = async () => {
      setisLoading(true);
      const response = await AxiosIntance().get("/report/" + params.id);
      console.log('reponse' + response)
      console.log('error new detail product: ', response.result)
      if (response.result == true) {
        // lay du lieu ok
        settype(response.report.type);
        setuserId(response.report.userId);
        setreport_date(response.report.report_date);
        settime(response.report.time);
        setroom(response.report.room);
        setimage(response.report.image);
        console.log("du lieu"+response.report);
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
  return (
    <View style={styles.container}>
      <View>{isLoading ? <Loading/> : <View></View>}</View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Image style={styles.back} source={require(baseImgPath + 'back.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.text}>Yêu cầu hỗ trợ CNTT</Text>
        <Text></Text>
      </View>
      <View style={styles.leader}>
        <View style={styles.leader2}>
          <Text style={styles.text2}>{type}</Text>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.text3}>Người tiếp nhận: {userId}</Text>
          <Image style={styles.profile} source={{uri: image}}></Image>
          </View>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{report_date}</Text>
            <Text style={styles.text4}>{time}</Text>
            <Text style={styles.text4}>Phòng: {room}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
      <Text style={styles.text5}>Trạng Thái yêu cầu</Text>
      <View>
        <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require(baseImgPath + 'tick.png')}></Image>
            <View style={{
              backgroundColor: '#D9D9D9',
              width: 4,
              height: 52
            }}></View>
          </View>
          <View style={{ alignContent: 'center', marginLeft: 36 }}>
            <Text style={styles.text6}>Yêu cầu</Text>
            <Text style={styles.text7}>09:25 am</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={imageSource1}></Image>
            <View style={{
              backgroundColor: '#D9D9D9',
              width: 4,
              height: 52
            }}></View>
          </View>
          <View style={{ alignContent: 'center', marginLeft: 36 }}>
            <Text style={styles.text6}>{text1}</Text>
            <Text style={styles.text7}>{text2}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={imageSource2}></Image>
          </View>
          <View style={{ alignContent: 'center', marginLeft: 36 }}>
            <Text style={styles.text6}>{text3}</Text>
            <Text style={styles.text7}>{text4}</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 64 }}>
        <TouchableOpacity onPress={handleButtonClick} style={{
          display: 'flex',
          width: 343,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          gap: 10,
          backgroundColor: buttonBackgroundColor,
          borderWidth: 1,
          borderColor: 'rgba(217, 114, 69, 0.80)',
          borderStyle: 'solid',
          borderRadius: 8,
          paddingVertical: 10, // Padding theo chiều dọc (top và bottom)
          paddingHorizontal: 33, // Padding theo chiều ngang (left và right),
        }}>
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            fontWeight: '700',
            fontStyle: 'normal',
          }}>{buttonText}</Text>
        </TouchableOpacity>
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
    fontFamily: 'Poppins'
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
  profile:{
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 40
  }
})