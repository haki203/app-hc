import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"
const { width, height } = Dimensions.get('window');
const HistorysAdmin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: 20, marginTop: 35 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <Image style={styles.profile} source={{ uri: userProfile.avt }}></Image>
            <Text style={styles.text1}>{userProfile.name}</Text>
          </View>
          <Icon  style={styles.iconmenu} name='bells' size={20} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.leader}>
        <Text style={styles.text2}>Lịch sử</Text>
          <View style={{width:width}}>
            <FlatList
              data={dataNe}
              renderItem={({ item }) => <ItemHistoryAdmin report={item} navigation={navigation} />}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
            />
          </View>
      </View>
    </View>
  )
}

export default HistorysAdmin

const styles = StyleSheet.create({})