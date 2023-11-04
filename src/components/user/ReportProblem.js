import React, { useState, useEffect, useRef ,useContext} from 'react';
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
  Dimensions,
  PermissionsAndroid,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { openPicker } from '@baronha/react-native-multiple-image-picker';
import MasonryList from '@react-native-seoul/masonry-list';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const baseImgPath = '../../assets/images/';
const { width, height } = Dimensions.get('window');
import storage from '@react-native-firebase/storage';
import { AppContext } from '../../context/AppContext';
import AxiosIntance from '../../axios/AxiosIntance';
import Loading from '../isLoading/Loading';

const ReportProblem = (props) => {
  const { userProfile } = useContext(AppContext);
  const handleReloadPage = () => {
    navigation.goBack(); // Quay lại màn hình trước đó
    navigation.navigate('Report'); // Điều hướng đến lại trang "ReportProblem"
  };

  const textInputRef = useRef(null); // Tạo một tham chiếu cho TextInput

  const handleClearText = () => {
    if (textInputRef.current) {
      textInputRef.current.clear(); // Gọi phương thức clear() của TextInput
    }
  };

  const { navigation } = props;
  const [img, setImg] = useState("");
  const [lop, setRoom] = useState("");
  const [des, setDes] = useState("");
  // value+description
  const [selectedImages, setSelectedImages] = useState([]);
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [types, setTypes] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const sendApi = async () => {

    const getNews = async () => {
      const type = value;
      const room = lop;
      const description = types + "--" + des;
      const image = img;
      if (!room) {
        ToastAndroid.show("Vui lòng nhap phòng học", ToastAndroid.SHORT);
      } else if (!description) {
        ToastAndroid.show("Vui lòng nhập mô tả", ToastAndroid.SHORT);
      } else if (!image) {
        ToastAndroid.show("Vui lòng chọn hình", ToastAndroid.SHORT);
      }else if(isLoading==true){

      }
      else {
        try {
          console.log("Type ne: ", type);
          console.log("Room ne: ", room);
          console.log("Description ne: ", description);
          console.log("Image ne: ", image);
          setisLoading(true);

          

          const response = await AxiosIntance().post(`/report/new`, { type: type, room: room, description: description, image: image,userId:userProfile.id });
          if (response.result == true) {
            ToastAndroid.show("Gửi yêu cầu thành công", ToastAndroid.SHORT);

            // reload
            handleReloadPage()
            handleClearText()
            setisLoading(false);
            console.log(response.report);
          }
        } catch (error) {
          console.log(error);
        }
      }

      // if (response.result == true) {

      // }
      // else {

      //   ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
      // }
    }
    getNews();
  }

  const data = [
    { label: 'Về cơ sở vật chất', value: '2' },
    { label: 'Sự cố về CNTT', value: '1' },
    { label: 'Sự cố an ninh', value: '3' },
    { label: 'Khác', value: '4' },
  ];
  const uploadImage = async (imageUri) => {
    setisLoading(true);

    const reference = storage().ref(`images/${new Date().getTime()}.jpg`);
    console.log('đang tải ảnh lên');

    try {
      // Tải lên tệp ảnh
      if (imageUri) {
        await reference.putFile(imageUri);

      // Lấy URL của tệp vừa tải lên
      const url = await reference.getDownloadURL();
      console.log('URL ảnh tải lên ne:', url);
      setImg(url);
      setisLoading(false);
      } else {
      console.log('Khg có image');
      }
      
    } catch (error) {
      console.error('Lỗi khi tải lên ảnh:', error);
    }
  };
  const uploadImages = async (imageUris) => {
      setisLoading(true);
    const uploadPromises = imageUris.map(async (imageData) => {
      const imageUri = imageData.realPath; // Lấy đường dẫn tệp ảnh từ realPath
      const reference = storage().ref(`images/${new Date().getTime()}.jpg`);
      console.log('đang tải ảnh lên');
      try {
        // Tải lên tệp ảnh
        await reference.putFile(imageUri);
  
        // Lấy URL của tệp vừa tải lên
        const url = await reference.getDownloadURL();
        console.log('URL ảnh tải lên:', url);
        setisLoading(false)
        
        return url; // Trả về URL của ảnh
      } catch (error) {
        console.error('Lỗi khi tải lên ảnh:', error);
        throw error; // Ném ra lỗi để Promise.all nhận biết lỗi
      }
    });
  
    try {
      const uploadedUrls = await Promise.all(uploadPromises);
      console.log('Tất cả ảnh đã được tải lên:', uploadedUrls);
      setisLoading(false)
      setImg(uploadedUrls);
    } catch (error) {
      console.error('Có lỗi khi tải lên ảnh:', error);
    }
  }
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
        //upload image
        if (image) {

          uploadImage(image)
        }

        // const paths = selectedImages.map(item => item.realPath);
        // console.log(paths);
        // uploadImages(paths)
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
  const takeAPicture = async () => {
    try {
      const response = await openPicker(options);
      if (response && response.length > 0) {
        setSelectedImages(response);
        console.log("Hinh chon ne: ",response)
        //upload image
          uploadImages(response)
      }
    } catch (err) {
    }

  }
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

  if (isLoading) {
    return <Loading/>
  }


  return (
    <ScrollView>
      <View>{isLoading ? <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center',position:'absolute' }}><ActivityIndicator size="large" color="black" /></View> : <View></View>}</View>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 15,
          width: '100%',
          height: '100%',
        }}>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{ position: 'absolute', left: 0, }} onPress={() => navigation.goBack()}>
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
        ref={textInputRef}
          onChangeText={(text) => setRoom(text)}
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
            setTypes(item.label)
          }}
        />

        <TextInput
        ref={textInputRef}
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
          onChangeText={(text) => setDes(text)}
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
          onPress={() => {
            sendApi()

          }}
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
