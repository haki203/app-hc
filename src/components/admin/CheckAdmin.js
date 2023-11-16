import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const CheckAdmin = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.Header} >
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.icarrowleft} source={require('../../assets/images/ic_backReport.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>Kiểm Tra Tính Năng Sẵn Sàng</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/icalertnobackground.png')} />
                </TouchableOpacity>

            </View >

            
                <TouchableOpacity style={styles.item1} onPress={()=>navigation.navigate('ToaF')}  >

                    <View style={styles.itemin}>
                        <View style={styles.in4item}>
                            <View style={styles.in4place}>
                                <Text style={styles.toa}>Tòa F</Text>
                                <Text style={styles.tang}>2 tầng</Text>

                            </View>
                            <View>
                                <Text style={styles.in4} >Tòa dành cho sinh viên học chuyên ngành thiết kế đồ họa và ....</Text>
                            </View>
                        </View>
                        <Image style={styles.icon} source={require('../../assets/images/chevron-right-white.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item2}  onPress={()=>navigation.navigate('ToaP')}>

                    <View style={styles.itemin}>
                        <View style={styles.in4item}>
                            <View style={styles.in4place}>
                                <Text style={styles.toa}>Tòa P</Text>
                                <Text style={styles.tang}>5 tầng</Text>

                            </View>
                            <View>
                                <Text style={styles.in4} >Tòa dành cho sinh viên học chuyên ngành thiết kế đồ họa và ....</Text>
                            </View>
                        </View>
                        <Image style={styles.icon} source={require('../../assets/images/chevron-right-white.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item3} onPress={()=>navigation.navigate('ToaT')} >

                    <View style={styles.itemin}>
                        <View style={styles.in4item}>
                            <View style={styles.in4place}>
                                <Text style={styles.toa}>Tòa T</Text>
                                <Text style={styles.tang}>11 tầng</Text>

                            </View>
                            <View>
                                <Text style={styles.in4} >Tòa dành cho sinh viên học chuyên ngành thiết kế đồ họa và ....</Text>
                            </View>
                        </View>
                        <Image style={styles.icon} source={require('../../assets/images/chevron-right-white.png')}/>
                    </View>
                </TouchableOpacity>
            </View>


    
    )
}

export default CheckAdmin

const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'

    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },

    container: {
        width: '100%',
        height: '100%',

    },
    
    item1: {
        borderRadius: 5,
        backgroundColor: '#0D51A1',
        padding: 10,
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,
        height:'20%',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    item2: {
        borderRadius: 5,
        backgroundColor: '#F27125',
        padding: 10,
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,
        height:'20%',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    item3: {
        borderRadius: 5,
        backgroundColor: '#4EB849',
        padding: 10,
        marginBottom: 10,
        marginStart:10,
        marginEnd:10,
        height:'20%',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    
    
    

    toa: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight:'bold'

    },
    tang: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight:'500'
    },
    in4place: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '65%'
    },
    in4item: {
        flexDirection: 'column',
        
    },
    icon:{
        
        position: 'absolute',
        right:'15%',
        top:'30%'
    },
    in4: {
        color: '#ffffff',
        width: '70%',
        marginTop:20
    }




})