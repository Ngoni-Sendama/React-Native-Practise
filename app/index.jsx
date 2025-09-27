import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemeLogo from '../components/ThemedLogo'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo styles={styles.img} />
      <Text style={styles.title}>The Number 2</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List Apps</Text>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1

  }
})