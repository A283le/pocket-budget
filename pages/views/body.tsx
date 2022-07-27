import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import NumberInput from "../components/number-input";

export default function Body() {
    const [list, setList] = useState([{ key: 0, text: "Income", value: 0 }])

    const addToList = () => {
        const _templist = [...list]
        _templist.push({ key: list.length++, text: "", value: 0 })
        setList(_templist)
    }

    // const setKeyInList = (key, text: string) => {
    //     list[key].key = text
    // }

    return (
        <View>
            <View>{
                list.map(element =>
                    <View style={styles.rowitem}>
                        <TextInput 
                            style={styles.columnitem} 
                            placeholder="Cost Item"
                            // value={element.key}
                            // onChangeText={(text) => setKeyInList(element.key, text)}
                        />
                        <NumberInput/>
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
        margin: 5,
    },
    rowitem: {
        flexDirection: 'row',
        margin: 5,
    }
});