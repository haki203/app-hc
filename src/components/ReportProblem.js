import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
<<<<<<< HEAD
  Dimensions,
  PermissionsAndroid
=======
  Dimensions
>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { openPicker } from '@baronha/react-native-multiple-image-picker';
import MasonryList from '@react-native-seoul/masonry-list';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const baseImgPath = '../assets/images/';
const { width, height } = Dimensions.get('window');
const ReportProblem = (props) => {
  const { navigation } = props;
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

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  const [image, setImage] = useState(null);

  const optionsCamera = {
    title: 'Chọn ảnh',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    cameraType: 'front', // Chọn camera trước hoặc sau (front hoặc back)
    mediaType: 'photo', // Chọn hình ảnh hoặc video (photo hoặc video)
    quality: 0.8, // Chất lượng ảnh (giá trị từ 0 đến 1)
    maxWidth: 800, // Chiều rộng tối đa của ảnh
    maxHeight: 600, // Chiều cao tối đa của ảnh
  };

  const pickImage = async () => {
<<<<<<< HEAD
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera(optionsCamera);
        const image = result.assets[0].uri
        console.log(result)
        if (result) {
          console.log(result.assets[0].uri)
          setImage(image);
          console.log(image)
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
=======
    const result = await launchCamera(optionsCamera);
    const image = result.assets[0].uri
    console.log(result)
    if (result) {
      console.log(result.assets[0].uri)
      setImage(image);
      console.log(image)
>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
    }
  }



  const options = {
    mediaType: 'photo', // Chỉ chọn ảnh, bạn có thể sử dụng 'video' để chọn video.
    includeBase64: false, // True nếu bạn muốn nhận được dữ liệu ảnh dưới dạng Base64.
    cameraType: 'back', // Sử dụng camera sau. Bạn có thể sử dụng 'front' cho camera trước.
    cropping: true, // Cho phép cắt ảnh sau khi chụp.
    useFrontCamera: false, // Sử dụng camera trước nếu cameraType là 'front'.
    showCropGuidelines: true, // Hiển thị hướng dẫn cắt ảnh.
    freeStyleCropEnabled: true, // Cho phép cắt ảnh theo tự do.
    cropping: true, // Cho phép cắt ảnh.
    cropperCircleOverlay: false, // Hiển thị vùng cắt hình tròn.
    compressImageQuality: 0.8, // Chất lượng ảnh nén (giá trị từ 0 đến 1).
  };
<<<<<<< HEAD

  const takeAPicture = async () => {
    try {
      const response = await openPicker(options);
      if (response && response.length > 0) {
        setSelectedImages(response);
        console.log(response)
      }
    } catch (err) {

    }
    
=======

  const takeAPicture = async () => {
    const response = await openPicker(options);
    if (response && response.length > 0) {
      setSelectedImages(response);
      console.log(response)
    }
>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
  }

  // const ImageDisplay = ({ selectedImages }) => (
  //   <FlatList
  //     data={selectedImages}
  //     keyExtractor={(item) => item.realPath}
  //     horizontal
  //     renderItem={({ item }) => (
  //       <Image
  //         source={{ uri: item.path }}
  //         style={{ width: 100, height: 100, margin: 5 }}
  //       />
  //     )}
  //   />
  // );

  const ImageDisplay = ({ selectedImages }) => (
    <MasonryList
      data={selectedImages}
      keyExtractor={(item) => item.path}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Image
        source={{ uri: item.path }}
        style={{ width: 180, height: 180, marginTop: 20, marginRight: 10 }}
        resizeMode="cover"
      />}
      // refreshing={}
      onRefresh={() => refetch({ first: ITEM_CNT })}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadNext()}
    />
  );




  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 15,
          width: '100%',
          height: height
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{ position: 'absolute', left: 0, }} onPress={()=>navigation.goBack()}>
            <Image
              source={require(baseImgPath + 'icons8-back-50.png')}
              style={{
                width: 22,
                height: 22,

                tintColor: 'black',
              }}
            />
          </TouchableOpacity>


          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Báo cáo sự cố
          </Text>
        </View>

        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            height: 50,
            fontSize: 18,
            marginTop: 40,
            backgroundColor: '#F1F4F5',
          }}
          placeholder="Phòng"
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Sự cố đang gặp phải ' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            paddingBottom: 200,
            padding: 10,
            fontSize: 18,
            marginTop: 15,
            backgroundColor: '#F1F4F5',
          }}
          multiline={true}
          placeholder="Mô tả sự cố"
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 18,
              marginTop: 15,
              backgroundColor: '#F1F4F5',
              width: '48%',
              alignItems: 'center',
            }}>
            <Image
              source={require(baseImgPath + 'icons8-camera-50.png')}
              style={{
                width: 32,
                height: 32,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => takeAPicture()}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 18,
              marginTop: 15,
              backgroundColor: '#F1F4F5',
              width: '48%',
              alignItems: 'center',
            }}>
            <Image
              source={require(baseImgPath + 'icons8-picture-50.png')}
              style={{
                width: 32,
                height: 32,
              }}
            />
          </TouchableOpacity>
        </View>

        <ImageDisplay selectedImages={selectedImages} />

        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginTop: 20
            }}
          />
        )}

        <TouchableOpacity
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 40,
            backgroundColor: '#D97245',
            width: '100%',
            alignItems: 'center',
          }}>

          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Gửi yêu cầu
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: '#F1F4F5',
    marginTop: 15,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ReportProblem;
