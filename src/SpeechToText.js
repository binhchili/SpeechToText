import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image, SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from '@react-native-community/voice';
export default function SpeechToText() {


    const [result, setResult] = useState([]);

    const startRecording = async () => {
        try {
            await Voice.start('vi-VN');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechRecognized = onSpeechRecognized;
    }, [])

    const onSpeechResults = (e) => {
        setResult(e.value);
    }

    const onSpeechRecognized = (e) => {
        console.log('onSpeechRecognized: ', e);

    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.resultLabel}>Kết quả </Text>
                <View style={styles.resultContainer}>
                    <Text style={{ fontSize: 19 }}>{JSON.stringify(result)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00AEEF' }} onPress={startRecording}>
                        <Text>Ghi âm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text>Dừng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text>Huỷ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center'
    },
    resultLabel: {
        fontSize: 18, marginTop: 40
    },
    resultContainer: {
        borderWidth: 1, borderColor: 'blue', width: '80%', height: 125, marginTop: 20
    },
    buttonContainer: {
        marginTop: 100, borderWidth: 1, width: '70%', height: 60, flexDirection: 'row'
    }
})