/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import SpeechToText from './src/SpeechToText'
import { name as appName } from './app.json';
import MainScreen from './src/MainScreen';


AppRegistry.registerComponent(appName, () => MainScreen);
