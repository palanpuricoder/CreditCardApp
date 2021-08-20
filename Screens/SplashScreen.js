import React from 'react'
import { useEffect } from 'react';
import { View, Text, StatusBar, Image } from 'react-native'
import { useState } from 'react/cjs/react.development';
import { Globals } from './Utility/Globals'

const SplashScreen = () => {
  const [splash, setSplash] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  }, [])
    return (
        <View
        style={{
            flex:1,
            backgroundColor:Globals.color.NAVI_BLUE,
        }}
    >
        <StatusBar hidden={false} backgroundColor={Globals.color.NAVI_BLUE} />
        <Image 
            style={{
                width:"100%",
                height:"100%",
                resizeMode:'contain'
            }}
            source={require('../Images/SplashLogo.png')}
        />
    </View>
    )
}

export default SplashScreen
