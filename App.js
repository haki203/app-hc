import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AppContextProvider } from './src/context/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </AppContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#FFFFFF'
   }
})