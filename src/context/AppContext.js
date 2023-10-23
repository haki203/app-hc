import { View, Text } from 'react-native'
import React from 'react'
import { createContext,useState } from 'react';
    // appContext la noi luu bien su dung chung cho cac man hinh
export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const {children} = props;
    const [isLogin,setIsLogin] = useState(false);
    const [isLoginAdmin,setIsLoginAdmin] = useState(false);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [data,setdata] = useState("false");
    // them in4 user de them thong tin ng dung luc login
    const [infoUser,setinfoUser] = useState({});
    const [userProfile, setUserProfile] = useState("");
    const [baseImgPath, setBaseImgPath] = useState('../../assets/images/');
    return (
        <AppContext.Provider value={{isLogin,setIsLogin,userProfile, setUserProfile,isTabVisible,setIsTabVisible,baseImgPath,isLoginAdmin,setIsLoginAdmin}}>
            {children}
            {/*     // children la man hinh cho kho context
                    // value la du lieu sd chung */}
        </AppContext.Provider>
    )
}