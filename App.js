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
}

export default App

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#FFFFFF'
   }
})