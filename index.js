/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import SpeechToText from './src/SpeechToText'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => SpeechToText);
