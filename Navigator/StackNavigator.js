import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import EnterAmount from '../Screens/EnterAmount'
import TakePicture from '../Screens/TakePicture'
import Register from '../Screens/Register'

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Amount" component={EnterAmount} />
            <Stack.Screen name="Picture" component={TakePicture} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default StackNavigator
