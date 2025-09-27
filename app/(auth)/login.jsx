import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
//  Themed Components
import ThemedView from '../../components/ThemedView'

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Login To your account</Text>
      <Link href='/register'>Register Instead</Link>
    </ThemedView>
  )
}

export default login

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