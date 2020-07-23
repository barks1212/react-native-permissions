import React from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native'

const NewPlaceScreen = props => {
    return (
        <ScrollView>
        <View>
            <Text>Title</Text>
            <TextInput />
        </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

const styles = StyleSheet.create({

})

export default NewPlaceScreen