import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AppContextProvider } from './src/context/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
<<<<<<< HEAD
=======
import HistoryAdmin from './src/components/admin/HistoryAdmin'
import ReportAdmin from './src/components/admin/ReportAdmin'
import SupportForm from './src/components/user/SupportForm'
import HandlReports from './src/components/admin/HandlReports'
>>>>>>> parent of 3d701eb (Merge branch 'test' into chien_@@)

const App = () => {
  return (
    <AppContextProvider >
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