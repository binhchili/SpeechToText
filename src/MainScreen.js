import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SpeechToText"></Tab.Screen>
            <Tab.Screen name="TextToSpeech"></Tab.Screen>
        </Tab.Navigator>
    )
}