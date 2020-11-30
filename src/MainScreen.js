import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpeechToText from './SpeechToText';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
    return (
        <NavigationContainer>
                <Tab.Navigator>
            <Tab.Screen name="SpeechToText" options={{tabBarLabel:'Speech-to-text',
                        tabBarIcon:()=>(
                            <Image source={require('./HeadPhone.png')} style={{width:30,height:30}}></Image>
                        )}} component={SpeechToText}></Tab.Screen>
            <Tab.Screen name="TextToSpeech" options={{tabBarLabel:'Speech-to-text',
                        tabBarIcon:()=>(
                            <Image source={require('./Speaker.jpg')} style={{width:40,height:40}}></Image>
                        )}} component={SpeechToText}></Tab.Screen>
        </Tab.Navigator>
        </NavigationContainer>
        
    )
}