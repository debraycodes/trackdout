import React from 'react'
import { View, Text, Image } from 'react-native-reanimated/lib/typescript/Animated'
import { styles } from './styles'


export default function StudioListing() {
  return (
    <View style={styles.listingContainer}>
        <Image
            style={styles.listingImage}
        />
        <View style={styles.listingTextView}>
            <Text style={styles.listingText}>Studio Listing</Text>
        </View>
    </View>  )
}
