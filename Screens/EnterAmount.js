import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { Globals } from './Utility/Globals'
const EnterAmount = () => {
    const navigation = useNavigation();
    console.log('navigation ::: ', navigation);
    return (
        <View
            style={{
                flex:1,
                backgroundColor:Globals.color.NAVI_BLUE
            }}
        >
            <View
                style={{
                    flex:0.5,
                    backgroundColor:'transparent',
                    justifyContent:'flex-end'
                }}
            >
                <Text
                    style={{
                        color:'white',
                        alignSelf:'center',
                        fontSize:35,
                        textAlignVertical:'center',
                        fontWeight:'100'
                    }}
                >
                    Enter Amount
                </Text>
            </View> 
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : 'height'}
                style={{
                    flex:1
                }}
            >
                    <View
                        style={{
                            flex:1,
                            backgroundColor:'transparent    '
                        }}
                    >
                        <View
                            style={{
                                backgroundColor:'white',
                                height:40,
                                width:'90%',
                                borderRadius:5,
                                marginHorizontal:20,
                                marginTop:40,
                                justifyContent:'center',
                                alignSelf:'center'
                            }}
                        >
                            <TextInput
                                placeholder="Enter Amount"
                                style={{
                                    marginLeft:10,

                                }}

                            />
                        </View>
                        <View
                            style={{
                                height:40,
                                width:'90%',
                                marginTop:30,
                                // marginHorizontal:100,
                                borderRadius:5,
                                backgroundColor:Globals.color.BUTTON_COLOR,
                                justifyContent:'center',
                                alignSelf:'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex:1,
                                    borderRadius:5,
                                    justifyContent:'center'
                                }}
                                onPress={()=>
                                    navigation.navigate('Picture')
                                }
                            >
                            <Text
                                style={{
                                    color:'white',
                                    fontSize:20,
                                    alignSelf:'center',
                                    fontWeight:'700'
                                }}
                            >
                                Submit
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </KeyboardAvoidingView>
        </View>
    )
}

export default EnterAmount
