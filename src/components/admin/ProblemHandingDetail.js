import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import AxiosIntance from '../../axios/AxiosIntance';
import { AppContext } from '../../context/AppContext';
import Loading from '../isLoading/Loading';
export default ProblemHandingDetail = props => {
  try {
    const {route, navigation} = props;
    const {params} = route;
    const [loading, isLoading] = useState(true);
    const [detail, setDetail] = useState(null);
    const [user, setUser] = useState(null);

    const { userProfile } = useContext(AppContext);

    useEffect(() => {
      try {
        const getDetail = async () => {
          
          const res = await AxiosIntance().get('/report/' + params.id);
          console.log('du lieu' + JSON.stringify(res));
          if (res) {
            setDetail(res.report);
            console.log(res.report);
            isLoading(false);
          } else {
            ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
          }
        };
        getDetail();
      } catch (err) {}
    }, []);
    useEffect(() => {
      try {
        const getUser = async () => {
          console.log('Detail đã được cập nhật:', detail);
          console.log('userId:', detail.userId);
          const user = await AxiosIntance().get(
            '/user/findUser/' + detail.userId,
          );
          if (user) {
            console.log(user.user);
            setUser(user.user);
            isLoading(false);
          }
        };
        getUser();
      } catch (err) {}
    }, [detail]);
    useEffect(() => {
      try {
        console.log('User đã được cập nhật:', user.user);
        
      } catch (err) {}
    }, [user]);
    if (loading) {
      return <Loading />;
    }

    const accept = async () => {
      try {
        console.log("adminID: ", userProfile.id)
        const res = await AxiosIntance().post('/report/accept', {
          idReport: detail._id,
          idAdmin: userProfile.id
        });
          console.log('du lieu' + JSON.stringify(res));
          if (res.result) {
            console.log("Tiep nhan thanh cong");
            navigation.popToTop(); 
  navigation.navigate('Help');
          } else {
            ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
          }
      } catch (err) {

      }
      
    }

    return (
      <ScrollView>
        <SafeAreaView
        style={{
          flex: 1,
          padding: 15,
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/icons8-back-50.png')}
              style={{
                width: 20,
                height: 20,

                tintColor: 'black',
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {detail.description}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Tên người yêu cầu:
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: 'https://www.oca.edu.vn/uploads/images/info/meo-trong-tieng-anh-la-gi.png',
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginRight: 10,
              }}
            />

            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 500,
                }}>
                {user.full_name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 500,
                    marginRight: 10,
                  }}>
                  {user.phone}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
              backgroundColor: '#E9ECEF',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/icons8-phone-50.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: 'red',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              marginRight: 10,
            }}>
            Thời gian:
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              color: 'black',
            }}>
            {detail.time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              marginRight: 10,
            }}>
            Phòng:
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              color: 'black',
            }}>
            {detail.room}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              marginRight: 10,
            }}>
            Mô tả sự cố:
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#8C8C8C',
              fontWeight: 500,
              color: 'black',
            }}>
            {detail.description}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            color: '#8C8C8C',
            fontWeight: 500,
            marginRight: 10,
            marginTop: 30,
            marginBottom: 30
          }}>
          Hình ảnh:
        </Text>

        {detail.image > 0 ? (
          <FlatList
            data={detail.image}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={{width: 100, height: 100}} />
            )}
          />
        ) : (
          // Hiển thị một ảnh
          <Image
            source={{uri: detail.image[0]}}
            style={{width: 200, height: 200}}
          />
        )}

        <TouchableOpacity
        onPress={() => accept()}
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 60,
            backgroundColor: '#D97245',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Hoàn thành
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      </ScrollView>
      
    );
  } catch (err) {}
};
