/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AxiosIntance from '../axios/AxiosIntance';
import Loading from './isLoading/Loading';
const baseImgPath = '../assets/images/';

const ReportD = props => {
  const {navigation} = props;
  const {route} = props;
  const {params} = route;
  const {id} = params;
  const [isLoading, setisLoading] = useState(false);
  const [data, setdataNe] = useState([]);
  const [admin, setAdmin] = useState('');
  const [image, setImage] = useState(
    'http://dummyimage.com/142x100.png/5fa2dd/ffffff',
  );

  const statuss = data.status;

  useEffect(() => {
    const getNews = async () => {
      // const response = await AxiosIntance().get(`/user/admin/${id}`);
      const response = await AxiosIntance().get(`/report/${id}`);

      console.log(response.report);
      if (response.result == true) {
        setdataNe(response.report);
        try {
          setAdmin(response.report.admin.full_name);
          setImage(response.report.image);
        } catch (error) {}
        setisLoading(false);
      } else {
        ToastAndroid.show('Lay du lieu that bai', ToastAndroid.SHORT);
      }
    };
    setisLoading(true);
    getNews();

    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <View>{isLoading ? <Loading /> : <View></View>}</View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.ic_back}
            source={require(baseImgPath + 'ic_backReport.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.text1}>Yêu cầu hỗ trợ sự cố</Text>
        <Image></Image>
      </View>
      <View style={styles.body}>
        <View>
          {statuss < 2 ? (
            <View />
          ) : (
            <View style={styles.in4}>
              <Text style={styles.in4_text1}>Sự cố về cơ sở vật chất</Text>
              <Text style={styles.in4_name}>Người tiếp nhận: {admin}</Text>

              <View style={styles.in4_chitiet}>
                <Text style={styles.in4_day}>{data.report_date}</Text>
                <Text style={styles.in4_time}>{data.time}</Text>
                <Text style={styles.in4_sdt}>Phòng: {data.room}</Text>
                <Image style={styles.sticker} source={{uri: image}} />
                {/* <Image
                  style={styles.sticker}
                  source={require(baseImgPath + 'ic_sticker.png')}
                /> */}
              </View>
            </View>
          )}
        </View>

        <Text style={styles.text2}>Trạng thái yêu cầu</Text>
        <View>
          <Processs data={data} />
        </View>
      </View>
    </View>
  );
};

const Processs = props => {
  const {data} = props;
  const statuss = data.status;
  // const statuss = 2;
  return (
    <View style={styles.statuss}>
      <View style={styles.status1}>
        <Image
          style={styles.ic}
          source={
            statuss < 0
              ? require(baseImgPath + 'ic_reload.png')
              : require(baseImgPath + 'ic_tick.png')
          }></Image>
        <View>
          {statuss < 0 ? (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>Yêu cầu</Text>
              <Text style={styles.status1_text_time}>{data.time}</Text>
            </View>
          ) : (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đang được xử lý
              </Text>
              <View>
                {statuss < 2 ? (
                  <Text style={styles.status1_text_time}>{data.time}</Text>
                ) : (
                  <Text style={styles.status1_text_time}>
                    {data.report_date} | {data.time}
                  </Text>
                )}
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={styles.line1}></View>

      <View style={styles.status2}>
        <Image
          style={styles.ic}
          source={
            statuss < 1
              ? require(baseImgPath + 'ic_reload.png')
              : require(baseImgPath + 'ic_tick.png')
          }></Image>
        <View>
          {statuss < 1 ? (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được tiếp nhận 123
              </Text>
              <Text style={styles.status1_text_time}>__:__ am</Text>
            </View>
          ) : (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được tiếp nhận
              </Text>
              <View>
                {statuss < 2 ? (
                  <Text style={styles.status1_text_time}>{data.time}</Text>
                ) : (
                  <Text style={styles.status1_text_time}>
                    {data.report_date} | {data.time}
                  </Text>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.line2}></View>

      <View style={styles.status1}>
        <Image
          style={styles.ic}
          source={
            statuss < 2
              ? require(baseImgPath + 'ic_reload.png')
              : require(baseImgPath + 'ic_tick.png')
          }></Image>
        <View>
          {statuss < 2 ? (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được hoàn thành
              </Text>
              <Text style={styles.status1_text_time}>__:__ am</Text>
            </View>
          ) : (
            <View style={styles.status1_text}>
              <Text style={styles.status1_text__name}>
                Yêu cầu đã được hoàn thành
              </Text>
              <View>
                {statuss < 2 ? (
                  <Text style={styles.status1_text_time}>{data.time}</Text>
                ) : (
                  <Text style={styles.status1_text_time}>
                    {data.report_date} | {data.time}
                  </Text>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
      <View>
        {statuss < 2 ? (
          <TouchableOpacity style={styles.btnDanhGia}>
            <Text style={styles.textBtn}>Phản hồi</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.danhgia}>
            <Text style={styles.danhgia_text}>
              Sự cố này hoàn thành chưa được tốt cần khắc phục
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReportD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#CDDBEA',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    height: 60,
  },
  body: {
    width: '100%',
    height: '70%',
  },
  ic_back: {
    width: 24,
    height: 24,
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
    marginLeft: -20,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
    marginBottom: 30,
    marginTop: 20,
  },
  statuss: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
  },
  status1: {
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
  },
  status1_text: {
    flexDirection: 'column',
    justifyContent: 'left',
    width: '100%',
    paddingLeft: 50,
    paddingTop: 3,
  },
  status1_text__name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  status1_text_time: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
    marginTop: 10,
  },
  status2: {
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
  },
  line1: {
    width: 4,
    height: 55,
    backgroundColor: '#D9D9D9',
    marginLeft: 24,
  },
  line2: {
    width: 4,
    height: 55,
    backgroundColor: '#D9D9D9',
    marginLeft: 24,
  },
  ic: {
    width: 48,
    height: 48,
  },
  btnDanhGia: {
    // backgroundColor: '#D97245',
    borderWidth: 1,
    borderColor: '#D97245',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D97245',
    fontFamily: 'Poppins',
  },
  in4: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#F1F4F5',
    borderRadius: 10,
    padding: 20,
    borderWidth: 0.4,
  },
  in4_text1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  in4_name: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
    marginTop: 15,
  },
  in4_chitiet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    width: '100%',
  },
  in4_day: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  in4_time: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  in4_sdt: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  sticker: {
    width: 48,
    height: 48,
    marginTop: -50,
  },
  danhgia: {
    marginTop: 60,
    width: '100%',
    height: 80,
    backgroundColor: '#F1F4F5',
    borderRadius: 10,
    padding: 20,
    borderWidth: 0.4,
  },
  danhgia_text: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins',
  },
});
