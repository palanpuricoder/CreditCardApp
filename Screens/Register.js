import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Globals } from './Utility/Globals'

const Register = ({ navigation }) => {
    console.log("navigation ::: ", navigation);
    return (
        <ScrollView>
        <View
            style={styles.Register}
        >
            <View
                style={{
                    // backgroundColor:'red',
                    flex:0.05,
                    paddingVertical:5
                }}
            >
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <Image 
                        source={require('../Images/back.png')}
                        style={{
                            height:'80%',
                            width:'15%',
                            resizeMode:'contain',
                            // backgroundColor:'green',
                            tintColor:'white'
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1 / 7,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 35,
                        fontWeight: '700',
                        alignSelf: 'center'
                    }}
                >
                    SignUp
                </Text>
            </View>
            <View
                style={{
                    // backgroundColor:'red',
                    paddingLeft:20,
                    paddingVertical:10
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: '700',

                    }}
                >
                    Personal Detail :
                </Text>
            </View>
            {/* name */}

            <View
                style={{
                    flex: 0.75,
                    backgroundColor: 'transparent'
                }}
            >
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                >
                    <TextInput
                        placeholder={'Name'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical: 5
                    }}
                >
                    <TextInput
                        placeholder={'Phone'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                    }}
                >
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                style={{
                    // backgroundColor:'red',
                    paddingLeft:20,
                    paddingVertical:10
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: '700',

                    }}
                >
                    Company Detail :
                </Text>
            </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical: 5
                    }}
                >
                    <TextInput
                        placeholder={'Company name'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                >
                    <TextInput
                        placeholder={'Phone'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical: 5
                    }}
                >
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                >
                    <TextInput
                        placeholder={'Address line 1'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginTop:5
                    }}
                >
                    <TextInput
                        placeholder={'Address line 2'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical:5
                    }}
                >
                    <TextInput
                        placeholder={'Postal'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                >
                    <TextInput
                        placeholder={'City'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical:5
                    }}
                >
                    <TextInput
                        placeholder={'State'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        // marginVertical:5
                    }}
                >
                    <TextInput
                        placeholder={'Country'}
                        placeholderTextColor='grey'
                        style={{
                            fontSize: 16,
                            marginLeft: 8,

                        }}
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '90%',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        marginVertical:5
                    }}
                >
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor='grey'
                        secureTextEntry={true}
                        style={{
                            fontSize: 16,
                            marginLeft: 8,
                        }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: Globals.color.BUTTON_COLOR,
                        height: 50,
                        width: '90%',
                        marginTop: 30,
                        marginHorizontal: 35,
                        borderRadius: 5,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        elevation: 4
                    }}
                >
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Login')
                        }
                        style={{
                            backgroundColor: 'transparent',
                            flex: 1,
                            borderRadius: 5,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: '700',
                                alignSelf: 'center'
                            }}
                        >
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    Register: {
        flex: 1,
        backgroundColor: Globals.color.NAVI_BLUE,
        paddingVertical: 5
    }
})
