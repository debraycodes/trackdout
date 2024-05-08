import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <>
      <StackNavigator/>
     {/* <Text>{text}</Text> */}
      <ModalPortal/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
