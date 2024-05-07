import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Header from '../components/Header'
// import DateTimePicker from '@react-native-community/datetimepicker'
import { BottomModal, ModalButton, ModalFooter, SlideAnimation, ModalContent, ModalTitle } from 'react-native-modals'


const HomeScreen = () => {
    const [city, setCity] = useState("")
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [hours, setHours] = useState(2)
    const [guests, setGuests] = useState(1)
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    var currentDate = date
    var currentTime = time
    const onDateChange = (e, selectedDate) => {
        currentDate = selectedDate
        setShow(false)
        setDate(currentDate)
    }
    const onTimeChange = (e, selectedTime) => {
        currentTime = selectedTime
        setShow(false)
        setTime(currentTime)
        // console.log(currentTime.toLocaleTimeString())
    }
    const showMode = (currentMode) => {
        setShow(!show)
        setDate(currentDate)
    }
    const showDatepicker = () => {
        showMode("date")
    }
    const showTimepicker = () => {
        showMode("time")
    }
    const [open, setOpen] = useState(false)
    // const [guests, setGuests] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)
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
                            <TextInput placeholder="Enter City" />
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
            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                swipeDirection={["up", "down"]}
                footer={<ModalFooter>
                    <ModalButton 
                    text="Apply"
                    style={{
                        marginBottom: 20,
                        color: "white",
                        backgroundColor: "#003580"
                    }}
                    onPress={() => setModalVisible(!modalVisible)}
                    />
                </ModalFooter>}
                modalTitle={<ModalTitle title="Select Number of Guests"/>}
                modalAnimation={new SlideAnimation({
                    slideFrom:"bottom"
                })}
                onHardwareBackPress={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(!modalVisible)}
            >
                <ModalContent style={{
                    width: "100%",
                    height: 310
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'space-between',
                            marginVertical: 15
                        }}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500"
                        }}>Hours</Text>
                        <Pressable style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10
                            }}>
                            <Pressable 
                                onPress={() => setHours(Math.max(1, hours - 1))}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0"
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "500",
                                    paddingHorizontal: 6
                                }}>{hours}</Text>
                            </Pressable>

                            <Pressable 
                                onPress={() => setHours((c) => c + 1)}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0"
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'space-between',
                            marginVertical: 15
                        }}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500"
                        }}>Guests</Text>
                        <Pressable style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10
                            }}>
                            <Pressable 
                                onPress={() => setGuests(Math.max(1, guests - 1))}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0"
                            }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "500",
                                    paddingHorizontal: 6
                                }}>{guests}</Text>
                            </Pressable>

                            <Pressable 
                                onPress={() => setGuests((c) => c + 1)}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0"
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})