import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
//  Themed Components
import ThemedView from '../../components/ThemedView'

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Register To your account</Text>
      <Link href='/login'>Login Instead</Link>
    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    }
})