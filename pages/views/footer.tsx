import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        backgroundColor: 'skyblue',
        bottom: 0,
        alignItems: 'center',
        width: Dimensions.get("window").width,
    },
  });
