import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {Globals} from './Utility/Globals'
const Login = () => {
    const navigation = useNavigation()
    console.log('navigation :: ', navigation);
    return (
        <View
            style={{
                flex:1,
                backgroundColor:Globals.color.NAVI_BLUE,
            }}
        >
            <View
                style={{
                    flex:1/2,
                    backgroundColor:'transparent',
                    justifyContent:'center'
                }}
            >
                <Text
                    style={{
                        color:'white',
                        fontSize:35,
                        fontWeight:'700',
                        alignSelf:'center'
                    }}
                >
                    Login
                </Text>
            </View>
            <View
                style={{
                    flex:1,
                    backgroundColor:'transparent'
                }}
            >
                <View
                    style={{
                        height:50,
                                width:'90%',
                        backgroundColor:'white',
                        marginHorizontal:20,
                        borderRadius:5,
                        justifyContent:'center'
                    }}
                >
                    <TextInput
                        placeholder = {'Username'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize:16,
                            marginLeft:8,
                            
                        }}
                    />
                </View>
                <View
                    style={{
                        height:50,
                                width:'90%',
                        backgroundColor:'white',
                        marginHorizontal:20,
                        borderRadius:5,
                        justifyContent:'center',
                        marginTop:15
                    }}
                >
                    <TextInput
                        placeholder = {'Password'}
                        placeholderTextColor='grey'
                        secureTextEntry={true}
                        style={{
                            fontSize:16,
                            marginLeft:8,
                        }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor:Globals.color.BUTTON_COLOR,
                        height:50,
                        width:'90%',
                        marginTop:30,
                        marginHorizontal:35,
                        borderRadius:5,
                        alignSelf:'center',
                        justifyContent:'center',
                        elevation:4
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>
                         navigation.navigate('Amount')   
                        }
                        style={{
                            backgroundColor:'transparent',
                            flex:1,
                            borderRadius:5,
                            justifyContent:'center'
                        }}
                    >
                    <Text
                        style={{
                            color:'white',
                            fontSize:20,
                            fontWeight:'700',
                            alignSelf:'center'
                        }}
                    >
                        Login
                    </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        justifyContent:'flex-end',
                        flex:1
                    }}
                >

                </View>
                <View
                    style={{
                        backgroundColor:'transparent',
                        flex:0.1,
                        justifyContent:'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Register')}
                    >
                    <Text
                        style={{
                            alignSelf:'center',
                            color:'white',
                            fontWeight:'700',
                            fontSize:15
                        }}
                    >
                        Don't have an account? SignUp
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default Login
