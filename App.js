import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingScreen from './src/qbao/SettingScreen';
import ProfileScreen from './src/qbao/ProfileScreen';
import ContactScreen from './src/qbao/ContactScreen';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
           <ContactScreen/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});