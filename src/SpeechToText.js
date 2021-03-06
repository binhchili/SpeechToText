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

    const stopRecognizing = async () => {
        //Stops listening for speech
        try {
            await Voice.stop();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const cancelRecognizing = async () => {
        //Cancels the speech recognition
        try {
            await Voice.cancel();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechRecognized = onSpeechRecognized;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        return () => {
            //destroy the process after switching the screen
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, [])

    const onSpeechStart = (e) => {
        //Invoked when .start() is called without error
        console.log('onSpeechStart: ', e);

    };

    const onSpeechResults = (e) => {
        let arr = e.value;
        let newArr = [];
        arr.forEach((ele ,index)=>{
           newArr.push({key:index.toString(),value:ele});
        })
        console.log(JSON.stringify(newArr));
        setResult(newArr);
    }

    const onSpeechRecognized = (e) => {
        console.log('onSpeechRecognized: ', e);

    };

    const onSpeechPartialResults = (e) => {
        //Invoked when any results are computed
        console.log('onSpeechPartialResults: ', e);

    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.resultLabel}>Kết quả </Text>
                <View style={styles.resultContainer}>
                    {result.map((item )=>(
                        <Text style={styles.resultText} key={item.key}>{item.value}</Text>
                    ))}
                    
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={startRecording}>
                        <Text>Ghi âm</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.button} onPress={cancelRecognizing}>
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
        borderWidth: 1, borderColor: 'blue', width: '80%', height: 425, marginTop: 20
    },
    buttonContainer: {
        marginTop: 100, width: '70%', height: 60, flexDirection: 'row', justifyContent:'space-around'
    },
    button: {
         justifyContent: 'center', alignItems: 'center', backgroundColor: '#00AEEF',
       height:'100%',width:'40%',borderRadius:10
    },
    resultText:{
        fontSize:19, marginTop:10
    }
})