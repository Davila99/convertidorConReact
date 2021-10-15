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
        if (origin ==="cm" && destino ==="km") {
            result = convertir /100;
            setResultado(result)
        }else{
            if (origin ==="km" && destino ==="cm") {
                result = convertir *100000;
                setResultado(result)
            }
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
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 80,
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
