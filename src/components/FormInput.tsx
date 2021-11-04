import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface Props {
    title: string,
    defaultValue: string,
    errorMensage?: string,
    handleError?: Boolean,
    onChangeText: (text: string) => void
}

const FormInput = ({ errorMensage = 'Error', title, defaultValue, handleError = false, onChangeText }: Props) => {
    return (
        <View>
            <Text style={styles.label}>{title }</Text>
            <TextInput 
            defaultValue={defaultValue}
            style={styles.input}
            onChangeText={text =>onChangeText(text)}
            />
            {
                handleError
                ?
                (
                    <Text style={styles.label}>
                        {errorMensage}
                    </Text>
                )
                :null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        color: 'green'
    },
    input: {
        borderColor: 'green',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})

export default FormInput
