import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput,Picker } from 'react-native';
import FormEntrada from '../components/FormEntrada';

const ConvertDiv = () => {

    const [origin, setOrigin] = useState<number>(0)
    const [destino, setDestino] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState('');



    const handleCantidadOrigin = (text: string) => {
        const cant = parseFloat(text)
        if (isNaN(cant)) {
            setError(true)
        }
        else {
            setError(false)
        }
        setOrigin(cant)
    }
    const handleCantidadDestino = (text: string) => {
        const cant = parseFloat(text)
        if (isNaN(cant)) {
            setError(true)
        }
        else {
            setError(false)
        }
        setDestino(cant)
    }
    const handleCalcular = () => {
        let cantidadresult
        if (selectedValue==="mul") {
            cantidadresult = origin * destino
            setResultado(cantidadresult)
        }
        if (selectedValue==="sum") {
            cantidadresult = origin + destino
            setResultado(cantidadresult)
        }
        if (selectedValue==="less") {
            cantidadresult = origin - destino
            setResultado(cantidadresult)
        }
        if (selectedValue==="div") {
            cantidadresult = origin / destino
            setResultado(cantidadresult)
        }

        // alert(selectedValue)
        
        
    }
    return (
        <View style={styles.container}>
            <FormEntrada
                title="Cantidad"
                defaultValue={origin.toString()}
                onChangueText={handleCantidadOrigin}
            />
             <View>
                <Picker
                    selectedValue={selectedValue}
                    style={{}}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="*" value="mul" />
                    <Picker.Item label="+" value="sum" />
                    <Picker.Item label="-" value="less" />
                    <Picker.Item label="/" value="div" />
                </Picker>
            </View>
            <FormEntrada
                title="Destino"
                defaultValue={destino.toString()}
                onChangueText={handleCantidadDestino}
            />

            <View style={styles.button}>
                <Button title="Calcular" onPress={handleCalcular}

                />

                <Text style={styles.result}>{resultado}</Text>

            </View>
        </View>
    )
}

export default ConvertDiv

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        marginTop: 10
    },
    result: {
        fontSize: 30,
        color: 'red',
        textAlign:'center',
        paddingTop: 30
    },

})
