import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements';

const ItemHistory = (props) => {
  const { report } = props;
  const { navigation } = props;
  const clickItem = () => {
    navigation.navigate('Report', { id: report._id });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leader} onPress={clickItem}>
        <View style={styles.leader2}>
          <Text style={styles.text}>
            {report.type === 1 ? 'Sự cố về CNTT' : 'Sự cố về cơ sở vật chất'}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text3}>Người tiếp nhận: {report.admin.full_name}</Text>
            <Image source={{ uri: report.image }} style={styles.profile}></Image>
          </View>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{report.report_date}</Text>
            <Text style={styles.text4}>{report.time}</Text>
            <Text style={styles.text4}>Phòng: {report.room}</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </TouchableOpacity>
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
    fontWeight: '700',
    fontStyle: 'normal',
    paddingTop: 17,
    fontFamily: 'Poppins'
  },
  text3: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    paddingTop: 13,
    fontFamily: 'Poppins'
  },
  leader2: {
    paddingLeft: 18,
  },
  leader3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text4: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Poppins'
  },
  text5: {
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
    fontStyle: 'normal',
    padding: 17,
    fontFamily: 'Poppins'
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,

  }
})