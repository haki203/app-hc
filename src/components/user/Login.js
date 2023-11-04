import { Image, Pressable, StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
const baseImgPath = '../../assets/images/';
import { AppContext } from '../../context/AppContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AxiosIntance from '../../axios/AxiosIntance';
import Modal from "react-native-modal";
const { width, height } = Dimensions.get('window');

const Login = () => {



  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);

  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
  };
  const { setIsLoginAdmin, setIsLogin } = useContext(AppContext);
  const { userProfile, setUserProfile } = useContext(AppContext);
  const [isLoading, setisLoading] = useState(false);

  GoogleSignin.configure({
    webClientId: '796405893611-6ka7dp7je723lkc54igmi0u43suo76vk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: false,
  });

  const logingoogle = async () => {

    try {
      console.log("login");
      if (selectedLocation == 'FPT Polytechnic Hồ Chí Minh') {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        console.log(userInfo);
        setisLoading(true);

        const res = await AxiosIntance().post("/user/login", { email: userInfo.user.email });
        let phone="";
        try {
          phone=res.user.phone;
        } catch (error) {
          phone='0126678952';
        }
        const userProfile =
        {
          id:res.user._id,
          email: userInfo.user.email,
          phone: phone,
          avt: userInfo.user.photo,
          name: userInfo.user.name,
          role: res.user.role
        }
        setUserProfile(userProfile)
        console.log(res);
        if (res.result == true) {
          setisLoading(false);
          {
            if(res.user.ban==true){
              ToastAndroid.show("Bạn đã bị ban, không thể đăng nhập", ToastAndroid.SHORT);
            }
            else{
               if (res.user.role == 100) {
                setIsLoginAdmin(true)
                ToastAndroid.show("Đăng nhập với tư cách Admin", ToastAndroid.SHORT);
              } 
              else if(res.user.role == 1){
                setIsLogin(true)
              }
            }
          }

        } else {
          ToastAndroid.show("Đăng nhập thất bại " + res.message, ToastAndroid.SHORT);
        }
      }
      else {
        ToastAndroid.show("vui lòng chọn đúng cơ sở", ToastAndroid.SHORT);
      }



    }
    catch (error) {
      console.error("Lỗi rồi: ",error);
    }
  }
  return (
    <View style={styles.container}>
      <View>{isLoading ? <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="black" /></View> : <View></View>}</View>

      <View style={styles.header}>
        <View style={styles.body}>
          <Image style={styles.logo} source={require(baseImgPath + 'fpt.png')} />
          <View style={styles.btn}>
            <View >
              <Modal style={{
                flex: 1, justifyContent: 'center',
                alignItems: 'center'
              }} isVisible={isModalVisible}>
                <View style={styles.modal}>
                  <Text onPress={() => selectLocation('FPT Polytechnic HO')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic HO' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic HO
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Hà Nội')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Hà Nội' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Hà Nội
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Hồ Chí Minh')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Hồ Chí Minh' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Hồ Chí Minh
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Đà Nẵng')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Đà Nẵng' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Đà Nẵng
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Cần Thơ')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Cần Thơ' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Cần Thơ
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Tây Nguyên')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Tây Nguyên' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Tây Nguyên
                  </Text>
                  <Text onPress={() => selectLocation('FPT Polytechnic Hải Phòng')} style={[{ backgroundColor: selectedLocation === 'FPT Polytechnic Hải Phòng' ? 'orange' : 'transparent' }, styles.fpt]}>
                    FPT Polytechnic Hải Phòng
                  </Text>
                  <Pressable style={styles.btnXacNhan} onPress={toggleModal}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 14 }}>Xác nhận</Text>
                  </Pressable>
                </View>
              </Modal>
            </View>
            <TouchableOpacity title="Show modal" onPress={toggleModal} style={styles.btncoso}>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>
                {selectedLocation ? selectedLocation : 'Lựa chọn cơ sở'}
              </Text>
            </TouchableOpacity>

            <Pressable style={styles.btngg} onPress={logingoogle}>
              <Image style={{ marginRight: 10, marginTop: -2 }} source={require(baseImgPath + 'logogg.png')} />

              <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 14 }}>Google</Text>
            </Pressable>
          </View>

        </View>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'column',
    width: '100%',
    height: 300,
    backgroundColor: '#D97245',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',

  }
  , body: {
    marginTop: 120,
    width: 300,
    height: 500,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5
  }, logo: {
    marginTop: 56
  },
  btn: {
    marginTop: 90,
    width: 200,
    height: 130,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  btncoso: {
    width: '100%',
    height: 36,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    elevation: 3,
    marginBottom: 40

  }, btngg: {
    width: '100%',
    height: 36,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E47849',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 6,
    elevation: 3,
  }, modal: {
    backgroundColor: '#F5F5F5',
    width: 260,
    height: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 10

  }, btnXacNhan: {
    width: 100,
    height: 36,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E47849',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 6,
    elevation: 3,
    marginTop: 15
  }, fpt: {
    fontSize: 15, margin: 5, width: 210, height: 25, textAlign: 'center', borderRadius: 12
  }
})