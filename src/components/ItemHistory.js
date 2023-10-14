import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemHistory = (props) => {
    const {product} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leader}>
        <View style={styles.leader2}>
          <Text style={styles.text2}>{product.name}</Text>
          <Text style={styles.text3}>Người tiếp nhận: {product.name}</Text>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{product.date}</Text>
            <Text style={styles.text4}>{product.time}</Text>
            <Text style={styles.text4}>Phòng: {product.room}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24
      },
      back: {
        width: 24,
        height: 24
      },
      text: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'normal',
      },
      leader: {
        backgroundColor: '#F1F4F5',
        borderRadius: 15,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.05)',
        width: 375,
        height: 101,
        flexShrink: 0,
        marginHorizontal: 17,
        marginTop: 17
      },
      text2: {
        color: '#000',
        fontSize: 14,
        fontWeight: '600',
        fontStyle: 'normal',
        paddingTop: 17
      },
      text3: {
        color: '#000',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        paddingTop: 13,
        fontFamily:'Poppins'
      },
      leader2: {
        paddingLeft: 18
      },
      leader3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
      },
      text4: {
        color: '#000',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
      },
      text5: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'normal',
        padding: 17
      },
})