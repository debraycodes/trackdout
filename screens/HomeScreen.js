import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Header from '../components/Header'
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
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
                    {/* Selected Dates */}
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        paddingHorizontal: 10,
                        borderColor: "#003580",
                        borderWidth: 2,
                        paddingVertical: 15
                    }}>
                        <Feather name="calendar" size={24} color="#003580" />
                        <>
                            {/* TODO: Fix Date Picker | https://github.com/react-native-datetimepicker/datetimepicker */}
                            {/* https://www.youtube.com/watch?v=IPLexCnDpS4 */}
                            <Button title="Open" onPress={() => setOpen(true)} />
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </>
                    </Pressable>
                    {/* Number of Guests */}
                    <Pressable>

                    </Pressable>
                    {/* Search Button */}
                    <Pressable>

                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})