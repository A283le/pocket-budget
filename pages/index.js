// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-web';
import Footer from './footer';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
