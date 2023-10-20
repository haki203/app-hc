import React from 'react';
import { View, StyleSheet, Dimensions,ActivityIndicator } from 'react-native';
const { width, height } = Dimensions.get('window');
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height/1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F4F5F2',
    paddingBottom:20,
  },
});

export default Loading
