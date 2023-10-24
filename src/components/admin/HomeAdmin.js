import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CurrentReport from './CurrentReport';
import HandlingReport from './HandlingReprot';

const Tab = createMaterialTopTabNavigator();

const HomeAdmin = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#D97245',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#D97245',
          height: '12%',
          paddingTop: 15,
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/icons8-back-50.png')}
            style={{
              width: 20,
              height: 20,

              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProblemDetail')}
        >
          <Image
            source={require('../../assets/images/notifications.png')}
            style={{
              width: 22,
              height: 22,

              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '100%',
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 500,
              textTransform: 'none',
            },
            tabBarItemStyle: {width: 200},
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              tabBarActiveTintColor: '#D97245', // Màu văn bản khi focus
              tabBarActiveBackgroundColor: '#D97245',
            },
            tabBarActiveTintColor: '#D97245', // Màu văn bản khi focus
            tabBarActiveBackgroundColor: '#D97245',
          }}
          >
          <Tab.Screen name="Sự cố hiện có" component={CurrentReport} />
          <Tab.Screen name="Đang tiếp nhận" component={HandlingReport} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default HomeAdmin;

const styles = StyleSheet.create({});
