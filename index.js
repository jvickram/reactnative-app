// Index.ios.js place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react'
import {AppRegistry, Text} from 'react-native'
import {name as appName} from './app.json';
import Header from './src/components/header'


// Create a component
const App = () => (
            <Header headerText={'Albums'} />
    )


// Render it to the device
AppRegistry.registerComponent(appName, () => App)