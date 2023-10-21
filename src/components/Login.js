import { Image, Pressable, StyleSheet, Text, View, ToastAndroid, TouchableOpacity,Dimensions,ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
const baseImgPath = '../assets/images/';
import { AppContext } from '../context/AppContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AxiosIntance from '../axios/AxiosIntance';
const { width, height } = Dimensions.get('window');

const Login = () => {
  const { setinfoUser, setIsLogin } = useContext(AppContext);
  const { userProfile, setUserProfile } = useContext(AppContext);
  const [isLoading, setisLoading] = useState(false);

  GoogleSignin.configure({
    webClientId: '796405893611-6ka7dp7je723lkc54igmi0u43suo76vk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: false,
  });

  const logingoogle = async () => {

    try {
      console.log("login");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      setisLoading(true);
      const res = await AxiosIntance().post("/user/login", { email: userInfo.user.email });
      const userProfile =
      {
        email: userInfo.user.email, 
        phone: res.user.phone, 
        avt: userInfo.user.photo,
        name:userInfo.user.name,
        role:res.user.role
      }
      setUserProfile(userProfile)
      console.log(res);
      if (res.result == true) {
        setisLoading(false);
        setIsLogin(true);
        ToastAndroid.show("Đăng Nhập thành côngg", ToastAndroid.SHORT);
      }
      else {
        ToastAndroid.show("Đăng nhập thất bại " + res.message, ToastAndroid.SHORT);
      }


    }
    catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <View>{isLoading ? <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="black" /></View> : <View></View>}</View>

      <View style={styles.header}>
        <View style={styles.body}>
          <Image style={styles.logo} source={require(baseImgPath + 'fpt.png')} />
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btncoso}>
              <Text style={{ textAlign: 'center', fontSize: 14 }}>Lựa chọn cơ sở</Text>
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
    elevation:5
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
    elevation:3,

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
    elevation:3,

  }
})