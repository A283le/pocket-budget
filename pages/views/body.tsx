import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Body() {
    const [list, setList] = useState([""])

    const addToList = () => {
        const _templist = [...list]
        _templist.push("")
        setList(_templist)
    }

    return (
        <View>
            <View>{
                list.map(e =>
                    <View style={styles.rowitem}>
                        <Text style={styles.columnitem}>body</Text>
                        <TextInput style={styles.columnitem} placeholder="text"></TextInput>
                    </View>
                )
            }</View>
            <Button title="Add cost item" onPress={addToList}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    columnitem: {
        flexDirection: 'column',
    },
    rowitem: {
        flexDirection: 'row',
    }
});