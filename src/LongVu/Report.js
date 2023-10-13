import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const Report = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [imageSource1, setImageSource1] = useState(require('../images/resum.png'));
  const [imageSource2, setImageSource2] = useState(require('../images/resum.png'));
  const [text1, setText1] = useState('Yêu cầu đã được tiếp nhận');
  const [text2, setText2] = useState('__:__ am');
  const [text3, setText3] = useState('Yêu cầu đã hoàn thành');
  const [text4, setText4] = useState('__:__ am');
  const [buttonText, setButtonText] = useState('Phản hồi');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('rgba(217, 114, 69, 0.80)');
  const handleButtonClick = () => {
    switch (currentStep) {
      case 1:
        setImageSource1(require('../images/tick.png'));
        setText1('Yêu cầu đã được tiếp nhận');
        setText2('10:00 am');
        setButtonText('Phản hồi');
        setButtonBackgroundColor('rgba(217, 114, 69, 0.80)');
        setCurrentStep(2);
        break;
      case 2:
        setImageSource2(require('../images/tick.png'));
        setText3('Yêu cầu đã hoàn thành');
        setButtonText('Đánh giá');
        setText4('12:00 pm');
        setButtonBackgroundColor('#D97245');
        setCurrentStep(3);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.back} source={require('../images/back.png')}></Image>
        <Text style={styles.text}>Yêu cầu hỗ trợ CNTT</Text>
        <Text></Text>
      </View>
      <View style={styles.leader}>
        <View style={styles.leader2}>
          <Text style={styles.text2}>Sự cố về cơ sở vật chất</Text>
          <Text style={styles.text3}>Người tiếp nhận: Nguyễn Trung Hải</Text>
          <View style={styles.leader3}>
            <Text style={styles.text4}>8-2-2023</Text>
            <Text style={styles.text4}>09:05 am</Text>
            <Text style={styles.text4}>SĐT: 0797151033</Text>
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
            <Image source={require('../images/tick.png')}></Image>
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
      <View style={{alignItems: 'center', marginTop: 64}}>
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
    fontWeight: '700',
    fontStyle: 'normal',
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
    fontWeight: '600',
    fontStyle: 'normal',
    paddingTop: 17
  },
  text3: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingTop: 13
  },
  leader2: {
    paddingLeft: 18
  },
  leader3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  },
  text4: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  text5: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    padding: 17
  },
  text6: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    marginTop: 2
  },
  text7: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    marginTop: 4
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

  }
})