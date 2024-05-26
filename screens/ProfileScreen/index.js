import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
// import DefaultUserImage from '../../assets/DefaultUserImage'


const ProfileScreen = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [instagram, setInstagram] = useState("")
  const [twitter, setTwitter] = useState("")
  const [youtube, setYoutube] = useState("")
  const [soundcloud, setSoundcloud] = useState("")

  return (
    <>
      <View style={styles.saveButtonContainer}>
        <Text> </Text>
        <Text> </Text>
        <TouchableOpacity style={styles.saveButtonContainerTouchable}>
          <Text style={styles.saveButtonContainerText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.contactInfoContainer}>
          <TouchableOpacity>
            <Image
              style={styles.contactInfoContainerImage}
              source={require('../../assets/DefaultUserImage.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.uploadImageText}>
              Upload Image
            </Text>
          </TouchableOpacity>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={setUsername}
              style={styles.textInput}
              editable
              value={username}
              placeholder='username'
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={setEmail}
              style={styles.textInput}
              editable
              value={email}
              placeholder='example@email.com'
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={setPhoneNumber}
              keyboardType='numeric'
              style={styles.textInput}
              editable
              value={phoneNumber}
              placeholder='123-456-7890'
            />
          </View>
          <TouchableOpacity
            style={styles.verifyEmailTouchableButton}
          >
            <Text style={styles.verifyEmailTouchableText}>VERIFY EMAIL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialsContainer}>
        <TouchableOpacity
          style={styles.connectWithFacebookButton}
        >
          <Text style={styles.verifyEmailTouchableText}><FontAwesome name='facebook-square' size={20} color="white" /><Text>  </Text>Connect with FaceBook</Text>
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={setInstagram}
            style={styles.textInput}
            editable
            value={instagram}
            placeholder='@instagram'
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={setTwitter}
            style={styles.textInput}
            editable
            value={twitter}
            placeholder='@twitter'
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={setYoutube}
            style={styles.textInput}
            editable
            value={youtube}
            placeholder='YouTube Channel'
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={setSoundcloud}
            style={styles.textInput}
            editable
            value={soundcloud}
            placeholder='Soundcloud Username'
          />
        </View>
      </View>
    </>
  )
}

export default ProfileScreen