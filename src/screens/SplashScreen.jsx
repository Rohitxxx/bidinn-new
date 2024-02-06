import { StyleSheet, View, Image, ToastAndroid, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home')
    }, 2000);
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent />
      <Image source={require('../assets/img/bg.jpeg')} style={{ flex: 1, width: '100%', resizeMode: 'cover' }} />
    </View>
  )
}

export default SplashScreen