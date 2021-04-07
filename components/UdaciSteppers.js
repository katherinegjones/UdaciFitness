import  React from 'react'
import { Platform, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { purple, white, gray } from '../utils/colors'

export default function UdaciSteppers ({max, unit, step, value, onIncrement, onDecrement}) {
    return (
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
            {Platform.OS==='ios'
            ? <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={[styles.iosBtn, {borderBottomRightRadius: 0, borderTopRightRadius: 0}]}
                    onPress={onDecrement}>
                    <Entypo name='minus' size={30} color={purple} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.iosBtn, {borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftWidth: 0}]} 
                    onPress={onIncrement}>
                    <Entypo name='plus' size={30} color={purple} />
                </TouchableOpacity>
            </View>
            : <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={styles.androidBtn}
                    onPress={onDecrement}>
                    <FontAwesome name='minus' size={30} color={white} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.androidBtn} 
                    onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color={white} />
                </TouchableOpacity>
            </View>}
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,   
    },
    androidBtn: {
        margin: 5,
        padding: 10,
        borderRadius: 2,
        backgroundColor: purple
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    },
})