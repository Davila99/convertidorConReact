import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import FormEntrada from '../components/FormEntrada';

const ConvertDiv = () => {

    const [origin, setOrigin] = useState<number>(0)
    const [destino, setDestino] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)

    const handleCalcular = () => {
        alert(destino)
        alert(origin)
        // let result = parseInt(setOrigin.toString()) * parseInt(setDestino.toString())
        // setResultado(result)
    }
    return (
        <View style={styles.container}>
            <FormEntrada
                title="Cantidad"
                defaultValue={origin.toString()}
                onChangueText={setOrigin}
            />
            <FormEntrada
                title="Destino"
                defaultValue={destino.toString()}
                onChangueText={setDestino.toString()}
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
    result:{
    alignItems:'center',
    fontSize:30,
    color:'red'
    }
})
