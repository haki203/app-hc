import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';

export const ItemProblem = ({navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}
        style={{
          padding: 15,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 500,
            }}>
            Sự cố máy chiếu hỏng
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#29D13A',
              fontWeight: 500,
            }}>
            10:02 am
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
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
                fontSize: 16,
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
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                Tòa T
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                Phòng T1022
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                9h45
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                17/02/2023
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
}