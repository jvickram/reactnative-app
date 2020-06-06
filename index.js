// Index.ios.js place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react'
import {AppRegistry, View} from 'react-native'
import {name as appName} from './app.json';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumLists'

// Create a component
const App = () => (
        <View style={{flex:1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    )

// Render it to the device
AppRegistry.registerComponent(appName, () => App)