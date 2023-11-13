import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import { Image } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker'
const ReportAdmin = (props) => {
    const { navigation } = props;
    const [isOpen, setIsopen] = useState(false);
    const [currentValue, setCurrentValue] = useState();
    const [isOpen1, setIsopen1] = useState(false);
    const [currentValue1, setCurrentValue1] = useState();
    const items = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    return (
        <View>
            <View style={styles.header}>
                <Icon onPress={() => navigation.goBack()} style={styles.icon} name='left' size={20} color="#000000" />
                <Text style={styles.text}>Sự cố về cơ sở vật chất</Text>
                <Text></Text>
            </View>
            <View>
                <Text style={styles.text1}>Tên người yêu cầu:</Text>
                <View style={styles.leader1}>
                    <Image style={styles.image} source={require('../../assets//images/profile.png')}></Image>
                    <View style={styles.leader2}>
                        <Text style={styles.text2}>Lê Văn Hiếu</Text>
                        <Text style={styles.text3}>0123456789</Text>
                    </View>
                    <Image style={styles.image1} source={require('../../assets//images/phone.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text style={styles.text4}>Thời gian: </Text>
                    <Text style={styles.text3}> 09:05 am</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text style={styles.text4}>Phòng: </Text>
                    <Text style={styles.text5}>T1011</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Text style={styles.text4}>Mô tả sự cố: </Text>
                    <Text style={styles.text6}> Bóng đèn cháy, lỗi tivi, lỗi điều hòa</Text>
                </View>
            </View>
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10}}>
            <DropDownPicker
            items={items} 
            open={isOpen} 
            setOpen={() => setIsopen(!isOpen)} 
            value={currentValue} 
            setValue={(val) => setCurrentValue(val)}
            autoScroll
            maxHeight={200}
            containerStyle={{width: '58%'}}
            searchPlaceholder='search...'
            placeholderStyle={{color: 'red', fontWeight: 'bold', fontFamily: 'Poppions', fontSize: 16, fontStyle: 'normal'}}
            placeholder='Lỗi sự cố từ'
            showTickIcon={true}
            showArrowIcon={true}/>

            <DropDownPicker 
            items={data} 
            open={isOpen1} 
            setOpen={() => setIsopen1(!isOpen1)} 
            value={currentValue1} 
            setValue={(val) => setCurrentValue1(val)}
            autoScroll
            maxHeight={200}
            containerStyle={{width: '40%'}}
            searchPlaceholder='search...'
            placeholderStyle={{color: 'red', fontWeight: 'bold', fontFamily: 'Poppions', fontSize: 16, fontStyle: 'normal'}}
            placeholder='Thời gian'
            showTickIcon={true}
            showArrowIcon={true}/>
            </View>
            <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Ghi chú"
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20
            }}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text7}>Hoàn thành</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text7}>Chưa xử lý được</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReportAdmin

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    },
    icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 20
    },
    text1: {
        color: 'rgba(0, 0, 0, 0.64)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        padding: 20
    },
    leader1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: 52,
        height: 47
    },
    image1: {
        width: 52,
        height: 47,
        marginRight: 35
    },
    leader2: {
        position: 'absolute',
        width: '70%',
        paddingLeft: 75
    },
    text2: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',

    },
    text3: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',

    },
    text4: {
        color: 'rgba(0, 0, 0, 0.64)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',

    },
    text5: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 20
    },
    text6: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
    },
    textInput: {
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingBottom: 200,
        padding: 10,
        fontSize: 18,
        marginTop: 15,
        margin: 10,
        backgroundColor: '#F1F4F5',
    }, button1: {
        display: 'flex',
        width: 167.474,
        height: 40,
        padding: 10,
        paddingHorizontal: 24, // Padding horizontal
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3, // This is similar to 'gap' in some cases
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#29D13A'
    },
    button2: {
        display: 'flex',
        width: 167.474,
        height: 40,
        padding: 10,
        paddingHorizontal: 24, // Padding horizontal
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3, // This is similar to 'gap' in some cases
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#FF2D2D'
    },
    text7: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'normal'
    }
})