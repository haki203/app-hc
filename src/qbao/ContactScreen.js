import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Image style={styles.icarrowleft} source={require('../../asset/images/chevron-left.png')} />
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
                    <Text style={{ marginStart: 10, fontWeight: 'bold' }}> Phòng kỹ thuật</Text>

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
                                            <Image source={require('../../asset/images/chevron-right.png')} />
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.topbody}>
                <Text style={{ marginStart: 10, fontWeight: 'bold' }}> Phòng Hành Chính</Text>
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
                                            <Image source={require('../../asset/images/chevron-right.png')} />
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
    header: {
        width: '100%',
        height: 'auto',
        color: 'white',
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 20,
        paddingRight: 60,
        paddingTop: 20,



    },

    container: {
        width: '100%',
        height: '100%',

    },
    topbody: {
        marginTop: 20,

        width: '100%'

    },
    item: {

        marginStart: 20,
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: '#f2f2f2',

    },
    itemin: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10


    },
    bottombody: {
        marginTop: 20,
        padding: 20,
    },









})
const dataPhongKyThuat = [
    {
        id: '1',
        name: 'Nguyễn Văn A',
        image: require('../../asset/images/avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    },
    {
        id: '2',
        name: 'Trần Thị B',
        image: require('../../asset/images/avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    },
    {
        id: '3',
        name: 'Lê Văn C',
        image: require('../../asset/images/avavtarChibi.png'),
        department: 'Trưởng Phòng IT'
    }

]