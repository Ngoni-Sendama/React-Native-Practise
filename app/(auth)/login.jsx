import { StyleSheet, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
//  Themed Components
import ThemedView from '../../components/ThemedView'
import { Colors } from "../../constants/Colors"
import ThemedButton from '../../components/ThemedButton'


const login = () => {

  const handleSubmit = () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <Text style={styles.title}>Login To your account</Text>

      <ThemedButton

        onPress={handleSubmit}


      >
        <Text style={{ color: '#f2f2f2' }}>Login</Text>

      </ThemedButton>
      <Link href='/register'>Register Instead</Link>


    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})