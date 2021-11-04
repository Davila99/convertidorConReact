import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import FormInput from '../components/FormInput'

const ConvertidorDivisa = () => {

    const [origin, setOrigin] = useState<string>('NIO')
    const [destino, setDestino] = useState<string>('USD')
    const [cantidaConvertir, setCantidaConvertir] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)

    const [error, setError] = useState<boolean>(false)

    const tcDolar: number = 35.3
    const tcEuro: number = 40.22
    const tcEuroDolar: number = 1.24

    const handleCantidad = (text: string) => {
        const cant = parseFloat(text)
        if (isNaN(cant)) {
            setError(true)
        }
        else {
            setError(false)
        }
        setCantidaConvertir(cant)
    }

    const handleConvertir = () => {
        if (!cantidaConvertir) {
            alert('Se requiere a cantidad que desea convertir')
            return
        }
        if (origin === 'NIO' && destino === 'USD') {
            setResultado(cantidaConvertir / tcDolar)
        }
        if (origin === 'USD' && destino === 'NIO') {
            setResultado(cantidaConvertir * tcDolar)
        }
        if (origin === 'NIO' && destino === 'EUR') {
            setResultado(cantidaConvertir / tcEuro)
        }
        if (origin === 'EUR' && destino === 'NIO') {
            setResultado(cantidaConvertir * tcEuro)
        }
        if (origin === 'USD' && destino === 'EUR') {
            setResultado(cantidaConvertir / tcEuroDolar)
        }
        if (origin === 'EUR' && destino === 'USD') {
            setResultado(cantidaConvertir * tcEuroDolar)
        }

    }

    return (
        <View style={styles.container}>

            <FormInput
                title="Cantidad"
                defaultValue={cantidaConvertir.toString()}
                onChangeText={handleCantidad}
                handleError={error}
                errorMensage="Solo se admite numeros"
            />

            <FormInput title="Moneda de Origin"
                defaultValue={origin}
                onChangeText={setOrigin} />

            <FormInput title="Moneda de Destino"
                defaultValue={destino}
                onChangeText={setDestino} />
            <View style={styles.button} >
            <Button

                    disabled={error}
                    onPress={handleConvertir}
                    title="Convetir"
                />
            </View>

            <Text style={[styles.label, styles.reultado]}
            >
                {resultado.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        color: 'green'
    },
    input: {
        borderColor: 'red',
        borderWidth:2,
        paddingVertical:5 ,
        paddingHorizontal:10
    
    },
    reultado:{
        alignSelf:'center',
        fontSize: 40
    },
    button:{
        marginTop:10
    }
})
export default ConvertidorDivisa
