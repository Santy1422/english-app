import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
export const HomeScreen = (props) =>{

    const profile = useSelector(state => state.profile)

    useEffect(() =>{
        if(!profile.length)  props.navigation.navigate('Login')
    }, [])
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>

</View>
    )
}