// Import a library to help create a component
import React from 'react'
import { Text, View } from 'react-native'

// Create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles
    
    return (
        <View style ={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

// Create styles for the component
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}

// Make it available to other parts of the app
export default Header