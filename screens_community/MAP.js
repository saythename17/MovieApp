import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

//제목줄을 갖기 위한 Screen 1개짜리 Navigator제작
export default MAP=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="MAP" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    )
}

//실제 화면 컴포넌트

class Screen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text>MAP</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'}
})