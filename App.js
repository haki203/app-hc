<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AppContextProvider } from './src/context/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <AppContextProvider >
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </AppContextProvider>
  )
>>>>>>> main
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});