import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Header from '../components/Header'
// import DateTimePicker from '@react-native-community/datetimepicker'
// import Geolocation from '@react-native-community/geolocation';
// import { BottomModal, ModalButton, ModalFooter, SlideAnimation, ModalContent, ModalTitle } from 'react-native-modals'
import * as Location from 'expo-location'



const HomeScreen = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
      })()
    }, [])
    let text = 'Waiting...'
    if (errorMsg) {
      text = errorMsg
    } else if (location) {
      text = JSON.stringify(location)
    }
    const [searchLocation, onChangeSearchLocation] = useState(location)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "TrackdOut",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
            )
        })
    }, [])
    return (
        <>
            <View>
                <Header />
                <ScrollView>
                    <View style={{
                        margin: 20,
                        borderColor: "#003580",
                        borderWidth: 3,
                        borderRadius: 6
                    }}>
                        {/* Destination */}
                        <Pressable style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            paddingHorizontal: 10,
                            borderColor: "#003580",
                            borderWidth: 2,
                            paddingVertical: 15
                        }}>
                            <Feather name="search" size={24} color="#003580" />
                            <TextInput
                                placeholder={JSON.stringify(location)}
                                onChangeText={onChangeSearchLocation}
                                value={searchLocation}
                            />
                        </Pressable>
                        <Pressable style={{
                            paddingHorizontal: 10,
                            borderColor: "#003580",
                            borderWidth: 2,
                            paddingVertical: 15,
                            backgroundColor: "#2a52be"
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "500",
                                color: "white"
                            }}>Search</Text>
                        </Pressable>
                    </View>
                    <Text style={{
                        marginHorizontal: 20,
                        fontSize: 17,
                        fontWeight: "500"

                    }}
                    >
                        Featured Studios Nearby
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            backgroundColor: "#003580",
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 10


                        }}>
                            <Text style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7
                            }}>
                                Featured Studio #1
                            </Text>
                            <Text style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "500"
                            }}>
                                Official Bizness Studio
                            </Text>
                        </Pressable>
                        <Pressable style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            borderColor: "#003580",
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 20


                        }}>
                            <Text style={{
                                color: "#003580",
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7
                            }}>
                                Featured Studio #2
                            </Text>
                            <Text style={{
                                color: "#003580",
                                fontSize: 15,
                                fontWeight: "500"
                            }}>
                                Official Bizness Studio
                            </Text>
                        </Pressable>
                        <Pressable style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            borderColor: "#003580",
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 20


                        }}>
                            <Text style={{
                                color: "#003580",
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7
                            }}>
                                Featured Studio #3
                            </Text>
                            <Text style={{
                                color: "#003580",
                                fontSize: 15,
                                fontWeight: "500"
                            }}>
                                Official Bizness Studio
                            </Text>
                        </Pressable>
                    </ScrollView>
                    <Pressable
                        style={{
                            marginTop: 40,

                        }}
                    >
                        <Image
                            style={{
                                width: 200,
                                height: 50,
                                resizeMode: "cover"
                            }}
                        />
                    </Pressable>
                </ScrollView>
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
