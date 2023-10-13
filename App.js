import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Report from './src/LongVu/Report'

const App = () => {
  return (
    <View style={styles.container}>
      <Report/>
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