import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"


const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ marginBottom: -10 }} source={require('../Image/avt.png')} />
                <Text style={styles.title}>
                    Việt PS24653
                </Text>
                <Icon style={styles.iconmenu} name='bells' size={20} color="#FFFFFF" />
            </View>
            <View style={styles.body}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: '#000000', fontWeight: '700' }}>Dịch vụ trực tuyến</Text>
                <View style={styles.baocao}>
                    <Image style={{ marginBottom: -10,marginRight:40 }} source={require('../Image/bc.png')} />
                    <Text style={{width:230,height:50, fontSize: 17, fontWeight: '500', color: '#000000',textAlign:'left',marginTop:4     }}>Báo cáo sự cố</Text>
                </View>
                <View style={styles.yeucau}>
                    <Image style={{ marginBottom: -10,marginRight:40 }} source={require('../Image/yc.png')} />
                    <Text style={{width:230,height:50, fontSize: 17, fontWeight: '500', color: '#000000',textAlign:'left' ,marginTop:4   }}>Yêu cầu hỗ trợ CNTT</Text>
                </View>
                <View style={styles.quanly}>
                    <Image style={{ marginBottom: -10,marginRight:40 }} source={require('../Image/ql.png')} />
                    <Text style={{width:230,height:50, fontSize: 17, fontWeight: '500', color: '#000000',textAlign:'left',marginTop:-5    }}>Quản lý mượn phòng{'\n'} học, hội trường</Text>
                </View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        backgroundColor: '#D97245',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
        paddingBottom: 50
    }, title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'normal',
        marginTop: -3,
        marginRight: 150
    }, body: {
        width: '100%',
        height: 400,
        backgroundColor: '#FFFFFF',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, baocao: {
        width: 343,
        height: 86,
        backgroundColor: '#F1F4F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4CDD9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25

    }, yeucau: {
        width: 343,
        height: 86,
        backgroundColor: '#F1F4F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4CDD9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25

    }, quanly: {
        width: 343,
        height: 86,
        backgroundColor: '#F1F4F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4CDD9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25


    }

})
