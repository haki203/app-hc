import { StyleSheet, Text, View, Image,Switch } from 'react-native'
import React,{ useState } from 'react'

const SettingScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Image style={styles.icarrowleft} source={require('../../asset/images/icArrowLeft.png')} />
                </View >
                <View style={styles.centerHeader}>
                    <Image style={styles.icarrowleft} source={require('../../asset/images/avavtarChibi.png')} />
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>Nguyễn Trung Hải </Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 400 }}>012346789 </Text>
                </View>
            </View>
            <View style={styles.bodycontainer} >
                <View style={styles.body} >
                    <View  style={styles.itembody}> 
                    <Image source={require('../../asset/images/icprofile.png')} />

                    <Text> Chỉnh sửa tài khoản </Text>
                    <Image  source={require('../../asset/images/chevron-right.png')} />
                    </View>

                    <View style={styles.itemalert} > 
                    <Image source={require('../../asset/images/icalert.png')} />

                    <Text> Tắt thông báo </Text>
                    <Switch style={styles.switch} trackColor={styles.trackColor} thumbColor={styles.thumbColor(isEnabled)} onValueChange={setIsEnabled} value={isEnabled} />
                    </View>
                    <View style={styles.itemexit} > 
                    <Image source={require('../../asset/images/icexit.png')} />

                    <Text style={{flex:1, textAlign:'center', paddingRight:60}} > Đăng xuất </Text>
                    
                    </View>
                    
                    
                </View>
                
            </View>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:40,
        paddingLeft:40


    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D97245'
    },
    
    centerHeader: {
        flexDirection: 'column',
        paddingTop: 50,
        paddingBottom: 30,
        alignItems: 'center'
    },
    bodycontainer:{
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    
        
    },
    textcontact:{
        paddingTop:30
    },
    body:{
        marginStart:30,
        marginEnd:30,
        flexDirection: 'column',
    },
    itembody:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:30,
        justifyContent:'space-between',
    },
    itemalert:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:30,
        justifyContent:'space-between',
    },
    itemexit:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:30,
        
    },
    trackColor: {
        false: '#d9d9d9',
        true: '#d9d9d9',
      },
      thumbColor: isEnabled => isEnabled ? '#D97245' : '#D97245',
    
      leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
      },

})
