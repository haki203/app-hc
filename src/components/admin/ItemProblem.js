import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Image } from 'react-native-elements';
import AxiosIntance from '../../axios/AxiosIntance';

export const ItemProblem = (props) => {
  try {
    const { problem, navigation } = props;
    //console.log("problem: " ,problem)
    const [fullName, setFullName] = useState("Ki vu");
    const getUser = async () => {
      const respone = await AxiosIntance().get(`/report/user/${problem.userId}`);
      console.log("user khi goi api ne: ", respone.user.full_name);
      setFullName(respone.user.full_name)
    }
    useEffect(() => {
      try {
        getUser();
      } catch (error) {
      }
  
    }, []);
  const StartNewDetail = () => {
    navigation.navigate("Detail", { id: problem._id });
  };
    return (
        <TouchableOpacity onPress={()=>StartNewDetail()}
        style={{
          padding: 25,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
          marginBottom: 15
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 500,
            }}>
            {problem.description.includes("--") ? problem.description.split("--")[0] : problem.description}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#29D13A',
              fontWeight: 500,
            }}>
            {problem.time}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={{
              uri: problem.image[0],
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginRight: 10,
            }}
          />

          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 500,
              }}>
              Người yêu cầu: {fullName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                Tòa T
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                {problem.room}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                {problem.accept}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                {problem.report_date}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#8C8C8C',
                  fontWeight: 500,
                  marginRight: 10,
                }}>
                {problem.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  } catch (err) {

  }

}