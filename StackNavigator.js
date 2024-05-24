import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import BookingScreen from './screens/BookingScreen'
import ProfileScreen from './screens/ProfileScreen'
import MessagesScreen from './screens/MessagesScreen'
import { FontAwesome, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'

const SearchScreen = HomeScreen

const StackNavigator = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    function BottomTabs(){
        return (
            <Tab.Navigator>
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen} 
                    options={{
                        tabBarLabel:"Search", 
                        headerShown:false, tabBarIcon:({focused}) => 
                            focused ? (
                                    <FontAwesome name="search" size={24} color="#003580" />
                                ) : (
                                    <FontAwesome name="search" size={24} color="#B2BEB5" />
                                )
                    }}
                />
                <Tab.Screen 
                    name="Bookings" 
                    component={BookingScreen} 
                    options={{
                        tabBarLabel:"Bookings", 
                        headerShown:false, tabBarIcon:({focused}) => 
                            focused ? (
                                    <MaterialCommunityIcons name="calendar-star" size={24} color="#003580" />
                                ) : (
                                    <MaterialCommunityIcons name="calendar-star" size={24} color="#B2BEB5" />
                                )
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        tabBarLabel:"Profile", 
                        headerShown:false, tabBarIcon:({focused}) => 
                            focused ? (
                                    <Ionicons name="person" size={24} color="#003580" />
                                ) : (
                                    <Ionicons name="person-outline" size={24} color="#B2BEB5" />
                                )
                    }}
                />
                <Tab.Screen 
                    name="Messages" 
                    component={MessagesScreen} 
                    options={{
                        tabBarLabel:"Messages", 
                        headerShown:false, tabBarIcon:({focused}) => 
                            focused ? (
                                    <Ionicons name="mail-sharp" size={24} color="#003580" />
                                ) : (
                                    <Ionicons name="mail-outline" size={24} color="#B2BEB5" />
                                )
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={BottomTabs} options={{
                        headerShown:false
                    }} />
                </Stack.Navigator>
            </NavigationContainer>

    )
}

export default StackNavigator

const styles = StyleSheet.create({})