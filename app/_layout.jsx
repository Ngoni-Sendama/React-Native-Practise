import { StyleSheet, Text, SafeAreaView, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'

const RoorLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title
            }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />


                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
            </Stack>
        </>
    )
}

export default RoorLayout

const styles = StyleSheet.create({})