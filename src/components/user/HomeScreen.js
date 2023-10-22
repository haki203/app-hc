import { Image, Pressable, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import { AppContext } from '../../context/AppContext';

const baseImgPath = '../../assets/images/';
const Home = (props) => {
    const { userProfile } = useContext(AppContext);
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:45}}>
                    <Image style={{marginRight:10,width:50,height:50,borderRadius:30}} source={{uri:userProfile.avt}} />
                    <Text style={styles.title}>
                        {userProfile.name}
                    </Text>
                </View>
                <Icon onPress={() => navigation.navigate('Notification')} style={{paddingBottom:12}} name='bells' size={20} color="#FFFFFF" />
            </View>
            <View style={styles.body}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: '#000000', fontWeight: '700', padding: 25, }}>Dịch vụ trực tuyến</Text>
                <TouchableOpacity style={styles.bodyItem} onPress={() => navigation.navigate('Report')}>
                    <Image style={styles.imgBodyItem} source={require(baseImgPath + 'bc.png')} />
                    <Text style={styles.textBodyItem}>Báo cáo sự cố</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bodyItem} onPress={() => navigation.navigate('Help')}>
                    <Image style={styles.imgBodyItem} source={require(baseImgPath + 'yc.png')} />
                    <Text style={styles.textBodyItem}>Yêu cầu hỗ trợ CNTT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bodyItem}>
                    <Image style={styles.imgBodyItem} source={require(baseImgPath + 'ql.png')} />
                    <Text style={styles.textBodyItem}>Quản lý mượn phòng{'\n'} học, hội trường</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        backgroundColor: '#D97245',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 50,
        padding: 30,
    }, title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'normal',

    }, body: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        marginTop: -25,
    }, bodyItem: {
        width: '80%',
        height: 86,
        backgroundColor: '#F1F4F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4CDD9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 10,
        elevation: 8
    },
    textBodyItem:
    {
        width: 230, fontSize: 17, fontWeight: '500', color: '#000000',
        height: '50%',
        position: 'absolute',
        start: '35%'

    },
    imgBodyItem: {
        height: 32,
        width: 32,
        position: 'absolute',
        start: '10%'
    }


})
