import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { white } from '../utils/colors'
import { addEntry } from '../actions'
import { removeEntry } from '../utils/api'
import TextButton from './TextButton'


class EntryDetail extends Component {
    componentDidMount(){

    }

    setTitle = (entryId) => {
        if (!entryId) return
        const year = entryId.slice(0, 4)
        const month = entryId.slice(5, 7)
        const day = entryId.slice(8)

        this.props.navigation.setOptions({
            title: `${month}/${day}/${year}`
        })
    }

    render(){
        return (
            <View>
                <Text>Entry Detail - {JSON.stringify(this.props.route.params.entryId)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    }
})

function mapStateToProps(state, { route }){
    const { entryId } = route.params
    return ({
        entryId,
        metrics: state[entryId]
    })
}

export default EntryDetail