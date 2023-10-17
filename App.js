<<<<<<<<< Temporary merge branch 1
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Report from './src/LongVu/Report'
import History from './src/LongVu/History'

const App = () => {
  return (
    <View style={styles.container}>
      <History/>
    </View>
  )
=========
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
>>>>>>>>> Temporary merge branch 2
}

export default App

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});