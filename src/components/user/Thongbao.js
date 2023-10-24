import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useContext,useEffect} from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import { AppContext } from '../../assets/images/'

const Thongbao = (props) => {
    const { navigation } = props;

    const renderItemPopularDeals = (props) => {
        const { item } = props;
        const { id, name, content,date, time } = item;
        return (
            <View style={styles.containeritem}>
                <View style={styles.bodyitem}>
                    <Text style={{fontSize:15}}>{item.name}</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{item.content}</Text>
                    <View style={styles.chi}>

                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                        <Text >{item.date}</Text>
                    <Text >{item.time}</Text>
                    </View>
                    
                </View>


            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>navigation.goBack()} style={styles.iconleft} name='left' size={20} color="#FFFFFF" />
                <Text style={styles.title}>
                    Thông báo
                </Text>
                <Icon style={styles.iconmenu} name='menufold' size={20} color="#FFFFFF" />
            </View>
            <View style={styles.body}>
                <FlatList
                    style={{ flexGrow: 0, height: '100%', with: '100%',marginTop:40,marginLeft:20,marginRight:20 }}
                    data={dataImagePopularDeals}
                    renderItem={renderItemPopularDeals}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Thongbao

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#D97245',
        justifyContent: 'space-between',
        padding: 20
    }, title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700',
        fontStyle: 'normal',
        marginTop: -3
    }, body: {
        width: '100%',
        height: 590,
        backgroundColor: '#FFFFFF',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    }, bodyitem: {
        backgroundColor: '#F1F4F5',
        borderRadius:10,
        padding:15,
        

    },
    containeritem:{
        margin:5
    },
    chi: {
        marginTop:10,
        marginBottom:5,
        height: 1.5,
        backgroundColor: "#000000",
        borderRadius: 10,
    }

})
const dataImagePopularDeals = [
    { id: 0, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 1, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 2, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02'},
    { id: 3, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 4, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 5, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 6, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 7, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
    { id: 8, name: 'Phòng đào tạo', content: 'Thông báo bổ sung bằng tốt nghiệp THPT SPRING 2023', date: '2023-25-09',time: '20:02' },
];