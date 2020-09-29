import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MovieStackNav from './MovieStackNav'
import LoginStackNav from './LoginStackNav'
import CommunityTabNav from './CommunityTabNav'

const Drawer= createDrawerNavigator()

export default function MainDrawerNav(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Movie' component={MovieStackNav}></Drawer.Screen>
            <Drawer.Screen name='Community' component={CommunityTabNav}></Drawer.Screen>
        </Drawer.Navigator>
    )
}