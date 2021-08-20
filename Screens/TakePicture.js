import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput , Modal } from 'react-native'
import { Globals } from './Utility/Globals'
import ImagePicker from 'react-native-image-crop-picker';

const TakePicture = () => {
    const [value , setValue] = useState(0);
    const [visible , setVisible] = useState(false);
    const [success , setSuccess] = useState(false);
    const submitbutton = (value) => {
        if(value == '' || value == 0){
            setSuccess(false);
            setVisible(true);
        }else{
            setSuccess(true);
            setVisible(true);
        }
    }
    const camera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    const tintcolor= success == true ? 'lightgreen' : 'red';
    const image = success == true ? require('../Images/checked.png') : require('../Images/fail.png')
    return (
        <View
            style={{
                flex:1 , 
                backgroundColor:Globals.color.NAVI_BLUE
            }}
        >
            <Modal
                visible={visible}
                transparent={true}
            >
                <View
                    style={{
                        flex:1,
                        backgroundColor:'transparent',
                        justifyContent:'center'
                    }}
                >
                    <View
                        style={{
                            height:500,
                            backgroundColor:'white',
                            width:'90%',
                            alignSelf:'center',
                            borderRadius:20,
                            elevation:4,
                            borderWidth:1,
                            borderColor:Globals.color.BUTTON_COLOR,
                            justifyContent:'center'
                        }}
                    >
                        <Image 
                            style={{
                                height:100,
                                width:100,
                                alignSelf:'center',
                                tintColor : tintcolor
                            }}

                            source={image}
                        />
                        <Text
                            style={{
                                alignSelf:'center',
                                color:tintcolor,
                                fontSize:30,
                                fontWeight:'700',
                                marginTop:30
                            }}
                        >
                            {
                                success == true ? "Successfully Done" : 'failed'
                            }
                        </Text>
                        <View
                        style={{
                            width:'35%',
                            height:50,
                            backgroundColor:tintcolor,
                            alignSelf:'center',
                            marginTop:80,
                            justifyContent:'center',
                            borderRadius:5
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>
                                setVisible(false)
                            }
                        >
                            <Text
                                style={{
                                    color : 'white',
                                    alignSelf:'center',
                                    fontSize:20,
                                    fontWeight:'700'
                                }}
                            >
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                   
                </View>
            </Modal>
            <View
                style={{
                    flex:1/2,
                    // backgroundColor:'red'
                }}
            >
                <View
                    style={{
                        justifyContent:'center',
                        flex:1,
                        marginTop:10
                        // backgroundColor:'green'
                    }}
                >
                    <Text
                        style={{
                            fontSize:40,
                            color:'white',
                            alignSelf:'center'
                        }}
                    >
                        Take Picture
                    </Text>
                    <View
                        style={{
                            width:'15%',
                            height:50,
                            borderRadius:10,
                            alignSelf:'center',
                            backgroundColor:Globals.color.BUTTON_COLOR,
                            marginTop:20,
                            justifyContent:'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>
                            camera()}
                        >
                        <Image 
                            source={require('../Images/camera.png')}
                            style={{
                                height:20,
                                width:20,
                                alignSelf:'center',
                                tintColor:'white'
                            }}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View
                    style={{
                        flex:1/2,
                        backgroundColor:'transparent'
                    }}
                >
                     <View
                    style={{
                        justifyContent:'flex-start',
                        flex:1,
                        // backgroundColor:'green'
                    }}
                >
                    <Text
                        style={{
                            fontSize:28,
                            color:'white',
                            alignSelf:'center'
                        }}
                    >
                        Enter CVV
                    </Text>
                    <View
                        style={{
                            width:'15%',
                            height:40,
                            borderRadius:10,
                            alignSelf:'center',
                            backgroundColor:'white',
                            marginTop:20,
                            justifyContent:'center'
                        }}
                    >
                        <TextInput 
                            placeholder="CVV"
                            style={{
                                alignSelf:'center'
                            }}
                            keyboardType='numeric'
                            maxLength={4}
                            onChangeText ={value => setValue(value)}
                        />
                        
                    </View>
                            <View
                                style={{
                                    width:'20%',
                                    height:40,
                                    marginTop:80,
                                    borderRadius:5,
                                    alignSelf:'center',
                                    backgroundColor:Globals.color.BUTTON_COLOR,
                                    justifyContent:'center'
                                }}
                            >
                                <TouchableOpacity
                                    style={{

                                    }}
                                    onPress={()=>
                                        submitbutton(value)
                                    }
                                >
                                <Text
                                    style={{
                                        alignSelf:'center',
                                        color:'white',
                                        fontWeight:'700',
                                        fontSize:17
                                    }}
                                >
                                    Submit
                                </Text>
                                </TouchableOpacity>
                            </View>
                </View>
                </View>
        </View>
    )
}

export default TakePicture
