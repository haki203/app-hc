import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';

export default ProblemDetail = ({navigation}) => {
  return (
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
          Sự cố máy chiếu hỏng
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
              Lê Văn Hiếu
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
                0797151033
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
          09:05 am
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
          T1101
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
          Bóng đèn cháy, lỗi Ti vi, lỗi điều hòa
        </Text>
      </View>

      <TouchableOpacity
          onPress={() => navigation.navigate('DetailReport')}
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
            Tiếp nhận
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
