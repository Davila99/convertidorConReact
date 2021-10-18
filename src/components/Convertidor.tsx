import React,{useState} from 'react'


import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'

export const Convertidor = () => {
    const [origin, setOrigin] = useState('')
    const [destino,setDestino] =useState('')
    const [convertir,setConvertir] =useState(0)

    const handleChangeConvertir=(texto:string) =>{
     const numero = parseFloat(texto)
        setConvertir(numero)
    }

    const [resultado,setResultado] =useState(0)

    const handleCalcular=()=>{
        let result:number

        if (origin ==="ml" && destino ==="cm") {
            result = convertir /10;
            setResultado(result)
        }
        if (origin ==="ml" && destino ==="mt") {
            result = convertir /1000;
            setResultado(result)
        }
        if (origin ==="ml" && destino ==="km") {
            result = convertir /1000000;
            setResultado(result)
        }
        if (origin ==="cm" && destino ==="ml") {
            result = convertir *10;
            setResultado(result)
        }
        if (origin ==="cm" && destino ==="mt") {
            result = convertir *100;
            setResultado(result)
        }
        if (origin ==="cm" && destino ==="km") {
            result = convertir *100000;
            setResultado(result)
        }
        if (origin ==="mt" && destino ==="ml") {
            result = convertir *1000;
            setResultado(result)
        }
        if (origin ==="mt" && destino ==="cm") {
            result = convertir *100;
            setResultado(result)
        }
        if (origin ==="mt" && destino ==="km") {
            result = convertir /1000;
            setResultado(result)
        }
        if (origin ==="km" && destino ==="ml") {
            result = convertir *1000000;
            setResultado(result)
        }
        if (origin ==="km" && destino ==="cm") {
            result = convertir *100000;
            setResultado(result)
        }
        if (origin ==="km" && destino ==="mt") {
            result = convertir *1000;
            setResultado(result)
        }
        
    }
 

    return (
        <View>
            <Text style={styles.texto}>Unidad de  Origen </Text>
            <TextInput 
            style={styles.input}
            defaultValue={origin}
            maxLength={2}
            onChangeText={setOrigin}

             />
            <Text style={styles.texto}> Unidad de Destino </Text>
            <TextInput 
            style={styles.input} 
            defaultValue={destino}
            maxLength={2}
            onChangeText={setDestino}

            />
            <Text style={styles.texto}>A Convertir </Text>

            <TextInput
             style={styles.input}
             defaultValue={convertir.toString()}  
             maxLength={10} 
             onChangeText={(text)=> handleChangeConvertir(text)}
             />

            <Text style={styles.texto}> Resultado de convertir {origin} a {destino} </Text>
            <TextInput
             style={styles.input}
             defaultValue={resultado.toString()}
             maxLength={10}
              />
            <View style={styles.button}>
                <Button title="Calcular"
                    onPress={handleCalcular}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: 'green',
        backgroundColor: 'gray'

    },
    texto: {
        textAlign: 'center'
    },
    button: {
        marginTop: 20
    }
})
