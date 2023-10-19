import { Image, Pressable, StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
const baseImgPath = '../assets/images/';
import { AppContext } from '../context/AppContext';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AxiosIntance from '../axios/AxiosIntance';
const Login = () => {
  const { setinfoUser, setIsLogin } = useContext(AppContext);

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '796405893611-6ka7dp7je723lkc54igmi0u43suo76vk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  const logingoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      const res = await AxiosIntance().get("/user/login-google/tho387vm@gmail.com ");
      setinfoUser(res.user);
      console.log(res.user);
      ToastAndroid.show("Đăng Nhập thành công", ToastAndroid.SHORT);
      setIsLogin(true);

    }
    catch (error) {
      ToastAndroid.show("Đăng nhập thất bại" + error, ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.body}>
          <Image style={styles.logo} source={require(baseImgPath + 'fpt.png')} />
          <View style={styles.btn}>
            <Pressable style={styles.btncoso}>
              <Text style={{ textAlign: 'center', fontSize: 14 }}>Lựa chọn cơ sở</Text>
            </Pressable>
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
    borderRadius: 6
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
    paddingTop: 6
  }
})