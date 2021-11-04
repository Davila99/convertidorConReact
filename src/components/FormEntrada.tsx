import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

interface Props{
    title: string,
    defaultValue:string,
    errorMenssage?:string,
    handleError?:Boolean,
    onChangueText: (text: string) => void
}
const FormEntrada = ({title, defaultValue,handleError,errorMenssage="ERROR", onChangueText}:Props) => {
    return (
        <View>
            <Text style={styles.label}>{title}</Text>
            <TextInput style={styles.input}  
            defaultValue={defaultValue} 
            onChangeText={text =>onChangueText(text)}
             />
              {
                handleError
                ?
                (
                    <Text style={styles.label}>
                        {errorMenssage}
                    </Text>
                )
                :null
            }
        </View>
    )
}

export default FormEntrada

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'green',

    },
    input:{
        borderColor:'green',
        borderWidth:2,
        paddingVertical:5,
        paddingHorizontal:10,
        height:60,
        fontSize:20

    }
})