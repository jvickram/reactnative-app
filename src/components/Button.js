import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity } from 'react-native'

const Button = () => {
    const { textStyle, buttonStyles } = styles
    
    return (
        <TouchableOpacity onPress={() => console.log('Button Clicked')} style={buttonStyles}>
            <Text style={textStyle}>Buy now</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button