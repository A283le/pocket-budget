// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Body from './views/body';
import Footer from './views/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView><Body/></ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});