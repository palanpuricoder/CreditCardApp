
import React from 'react'
import { View, Text } from 'react-native'
import StackNavigator from './Navigator/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './Screens/SplashScreen'
import { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  }, [])
  return splash ?
    <SplashScreen />
    :
    (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
}

export default App
