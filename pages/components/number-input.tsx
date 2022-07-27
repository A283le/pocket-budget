import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function NumberInput() {
    const [num, setState] = useState({ myNumber: "" })

    const onTextChanged = (text: string) => {
        setState({ myNumber: text.replace(/[^0-9]/g, '') })
    }

    return (
        <TextInput 
            keyboardType='numeric'
            onChangeText={(text) => onTextChanged(text)} 
            value={num.myNumber}
            placeholder="0"
        />
    );
}

const styles = StyleSheet.create({

});