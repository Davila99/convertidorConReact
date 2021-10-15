import React,{useState} from 'react'


import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'

export const Convertidor = () => {
    const [origin, setOrigin] = useState('cm')

    const handleChangeOrigin = (texto:string) =>{
        setOrigin(texto)
    }

    const [destino,setDestino] =useState('km')
    
    const handleChangeDestino =(texto:string) =>{
        setDestino(texto)
    }

    const [convertir,setConvertir] =useState('')

    const handleChangeConvertir=(texto:string) =>{
        setConvertir(texto)
    }

    const [resultado,setResultado] =useState('')

    const handleChangeResultado=(texto:string)=>{

    }

    return (
        <View>
            <Text style={styles.texto}> Origen </Text>
            <TextInput 
            style={styles.input}
            defaultValue={origin}
            maxLength={2}
            onChangeText={(text)=> handleChangeOrigin(text)}

             />
            <Text style={styles.texto}> Destino </Text>
            <TextInput 
            style={styles.input} 
            defaultValue={destino}
            maxLength={2}
            onChangeText={(text)=> handleChangeDestino(text)}

            />
            <Text style={styles.texto}> Convertir </Text>

            <TextInput
             style={styles.input}
             defaultValue={convertir}  
             maxLength={10} 
             onChangeText={(text)=> handleChangeConvertir(text)}
             />

            <Text style={styles.texto}> Resultado </Text>
            <TextInput
             style={styles.input}
             defaultValue={resultado}
             maxLength={10}
             onChangeText={(text)=>handleChangeResultado(text)}
              />
            <View style={styles.button}>
                <Button title="Calcular"
                    onPress={() => alert('Registrado')}
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
