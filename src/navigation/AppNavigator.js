import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { AppContext } from '../context/AppContext';
import HomeScreen from '../components/user/HomeScreen'

import History from '../components/user/History';
import Report from '../components/user/Report';
import SupportForm from '../components/user/SupportForm';
import ReportProblem from '../components/user/ReportProblem';
import Login from '../components/user/Login';
import Thongbao from '../components/user/Thongbao';
import SettingScreen from '../components/SettingScreen';
import ProfileScreen from '../components/ProfileScreen';
import ContactScreen from '../components/user/ContactScreen';
import HomeScreenAdmin from '../components/admin/HomeAdmin';
import HistoryAdmin from '../components/admin/HistoryAdmin';
import SettingAdmin from '../components/admin/SettingAdmin';
import ProblemDetail from '../components/admin/ProblemDetail';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Users = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Mains} />
        </Stack.Navigator>
    )
}

const Mains = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Report" component={ReportProblem} />
            <Stack.Screen name="Help" component={SupportForm} />
            <Stack.Screen name="Notification" component={Thongbao} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            
        </Stack.Navigator>

    )
}
const Settings = () => {
    return (
        <Stack.Navigator initialRouteName='Setting' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />       
        </Stack.Navigator>

    )
}
const Histories = () => {
    return (
        <Stack.Navigator initialRouteName='History' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Notification" component={Thongbao} />       
            <Stack.Screen name="Report" component={Report} />       
        </Stack.Navigator>

    )
}
const ManChao = () => {
    return (
        <Stack.Navigator initialRouteName='Sign' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Sign" component={SignUpScreen} />
            <Stack.Screen name='Filter' component={CategoryFilterScreen} />
            <Stack.Screen name='Go' component={ReadyGoScreen} />
        </Stack.Navigator>

    )
}


const Home = ({ scrollY }) => {
    // // const isTabVisibleRedux = useSelector(state => state.scroll.isTabVisible);
    // const {isTabVisible, setIsTabVisible} = useContext(AppContext);
    // const [display, setDisplay] = useState("");

    // // Sử dụng useEffect để theo dõi thay đổi của isTabVisible trong Redux
    // useEffect(() => {
    //     if(isTabVisible){
    //         setDisplay('flex');
    //     }
    //     else{
    //         setDisplay('none');
    //     }
    // }, [isTabVisible]);
    const iconView={ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height:'100%',paddingBottom:10}
    const textIcon={position:'absolute',bottom:5,color:'black'}
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                color: 'red',
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { display: 'none' },
                tabBarStyle: { height: 80,backgroundColor:'#F4F5F2' },
            })}
        >
            <Tab.Screen
                name="Trang chủ"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <Ionicons name={'home-outline'} color={color} size={30} />
                            <Text style={textIcon}>{focused ? 'Trang chủ' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <Mains />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Lich su"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <Octicons name="history" color={color} size={28} />
                            <Text style={textIcon}>{focused ? 'Lịch sử' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <Histories />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Ho tro"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <Ionicons name="call-outline" color={color} size={30} />
                            <Text style={textIcon}>{focused ? 'Hỗ trợ' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <ContactScreen />
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Cài đặt"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <AntDesign name="setting" color={color} size={30} />
                            <Text style={textIcon}>{focused ? 'Cài đặt' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <Settings />
                )}
            </Tab.Screen>

        </Tab.Navigator>

    )

}
const HomeAdmin = ({ scrollY }) => {

    const iconView={ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height:'100%',paddingBottom:10}
    const textIcon={position:'absolute',bottom:5,color:'black'}
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                color: 'red',
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { display: 'none' },
                tabBarStyle: { height: 80,backgroundColor:'#F4F5F2' },
            })}
        >
            <Tab.Screen
                name="Trang chủ"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <Ionicons name={'home-outline'} color={color} size={30} />
                            <Text style={textIcon}>{focused ? 'Trang chủ' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <HomeScreenAdmin />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Lich su"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <Octicons name="history" color={color} size={28} />
                            <Text style={textIcon}>{focused ? 'Lịch sử' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <HistoryAdmin />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Cài đặt"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={iconView}>
                            <AntDesign name="setting" color={color} size={30} />
                            <Text style={textIcon}>{focused ? 'Cài đặt' :''}</Text>
                        </View>
                    ),
                }}
            >
                {() => (
                    <SettingAdmin />
                )}
            </Tab.Screen>

        </Tab.Navigator>

    )

}
const Play = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS, // Sử dụng animation slide-up
            }}
        >
            <Stack.Screen name="Home">
                {(props) => (
                    <Mains />
                )}
            </Stack.Screen>
            <Stack.Screen name="Detail">
                {(props) => (
                    <DetailScreen navigation={props.navigation} />
                )}
            </Stack.Screen>
            <Stack.Screen name="Search">
                {(props) => (
                    <SearchScreen navigation={props.navigation} />
                )}
            </Stack.Screen>
            <Stack.Screen name="Hot">
                {(props) => (
                    <ScreenWrapper>
                        <HotScreen navigation={props.navigation} />
                    </ScreenWrapper>
                )}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
                {(props) => (
                    <ScreenWrapper>
                        <SignUpScreen navigation={props.navigation} />
                    </ScreenWrapper>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
const AppNavigator = () => {
    const { isLogin, setIsLogin } = useContext(AppContext);
    return (
        <>
            <HomeAdmin></HomeAdmin>
        </>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({
    iconTab: { width: 30, height: 29 }
})