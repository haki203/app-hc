import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
const baseImgPath = '../assets/images/';
const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Image style={styles.icarrowleft} source={require(baseImgPath+'chevron-left.png')} />
                    <Text style={{
                        alignItems: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                        color: 'black'
                    }}> Liên hệ</Text>
                </View >

            </View>
            <View style={styles.body}>
                <View style={styles.topbody} >
                    <Text style={{fontWeight: 'bold',marginBottom:20,marginTop:20 }}> Phòng kỹ thuật</Text>

                    <FlatList
                        data={dataPhongKyThuat}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.topbody}>
                                    <View style={styles.item}>
                                        <View style={styles.itemin}>
                                            <Image source={item.image} />
                                            <View style={styles.in4contact}>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text style={styles.department}>{item.department}</Text>
                                            </View>
                                            <Image source={require(baseImgPath+'chevron-right.png')} />
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.topbody}>
                <Text style={{fontWeight: 'bold',marginBottom:20,marginTop:20 }}> Phòng Hành Chính</Text>
                    <FlatList
                        data={dataPhongKyThuat}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.topbody}>
                                    <View style={styles.item}>
                                        <View style={styles.itemin}>
                                            <Image source={item.image} />
                                            <View style={styles.in4contact}>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text style={styles.department}>{item.department}</Text>
                                            </View>
                                            <Image source={require(baseImgPath+'chevron-right.png')} />
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </View>

        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        padding:20
    },
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
        marginBottom:20,
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    topbody: {
        width: '100%',
        
    },
    item: {
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        padding:10,
        marginBottom:10,
    },
    itemin: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',



    },
    bottombody: {

    },









})
const dataPhongKyThuat = [
    {
        id: '1',
        name: 'Nguyễn Văn A',
        image: require(baseImgPath+'avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    },
    {
        id: '2',
        name: 'Trần Thị B',
        image: require(baseImgPath+'avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    },
    {
        id: '3',
        name: 'Lê Văn C',
        image: require(baseImgPath+'avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    }

]