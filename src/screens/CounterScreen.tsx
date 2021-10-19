import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Fab from '../components/Fab'
const CounterScreen = () => {

    const [cantidad, setCantidad] = useState(0  )

    const handleSum = () => {
        setCantidad(cantidad + 1)
    }
    const handleSubtract = () => {
        setCantidad(cantidad - 1)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{cantidad}</Text>
            <Fab position='bl' size='md' title='-1' onPress={handleSum} ></Fab>
            <Fab position='br' size='md' title='+1' onPress={handleSubtract} ></Fab>

        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: 'white',
    }
})