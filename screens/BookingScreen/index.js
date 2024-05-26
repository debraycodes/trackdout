import { StyleSheet, Text, View } from 'react-native'
import { TimelineCalendar } from '@howljs/calendar-kit'
import styles from './styles'
import React from 'react'
// Add functionality: 
// https://howljs.github.io/react-native-calendar-kit/docs/guides/drag-to-create/
// Add Unavailable hours
// https://howljs.github.io/react-native-calendar-kit/docs/guides/unavailable-time/
const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <TimelineCalendar style={styles.timelineCalendar} viewMode='week'/>
    </View>
  )
}

export default BookingScreen