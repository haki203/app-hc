import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-elements';

const ItemHistory = (props) => {
  const { report } = props;
  const [fullName, setFullName] = useState("Chưa có");

  const { navigation } = props;
  const [id, setId] = useState(report._id);
  useEffect(() => {
    try {
      setFullName(report.admin.full_name);
    } catch (error) {
      setFullName("Chưa có");
    }
 
  }, []);
  const clickItem = () => {
    console.log(id);
    navigation.navigate('Report', { id: id });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leader} onPress={clickItem}>

        <View style={{width:'85%'}}>
          <Text style={styles.text}>
            {report.description.includes("--") ? report.description.split("--")[0] : report.description}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text3}>Người tiếp nhận: {fullName}</Text>
          </View>
          <View style={styles.leader3}>
            <Text style={styles.text4}>{report.report_date}</Text>
            <Text style={styles.text4}>{report.time}</Text>
            <Text style={styles.text4}>Phòng: {report.room}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
        <Image source={{ uri: report.image[0] }} style={styles.profile}></Image>
      </TouchableOpacity>
    </View>
  )
}

export default ItemHistory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,paddingBottom:5,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems:'center',
    elevation:4
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
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    paddingTop: 13,
    fontFamily: 'Poppins',
    marginBottom:10
  },
  leader2: {
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
    marginRight: 35
  }
})