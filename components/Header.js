import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={{
            backgroundColor: "#003580",
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
        }}
        >
{/*            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 25,
                padding: 8
            }}>
                <Feather name="mic" size={26} color="white" />
                <Text style={{
                    marginLeft: 8,
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 15
                }}>Studios</Text>
            </Pressable> */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})