import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
//  Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
const register = () => {
  const handleSubmit = () => {
    console.log('register form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Register To your account</Text>

      <ThemedButton

        onPress={handleSubmit}


      >
        <Text style={{ color: '#f2f2f2' }}>Register</Text>

      </ThemedButton>
      <Link href='/login'>Login Instead</Link>
    </ThemedView>
  )
}

export default register

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
  }
})