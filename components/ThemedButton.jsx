import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: 'center', // so text centers inside
  },
  pressed: {
    opacity: 0.5,
  },
})
