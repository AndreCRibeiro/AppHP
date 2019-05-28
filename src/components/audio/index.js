import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';

import styles from './styles';

class AudioRec extends Component {

  state = {
    currentTime: 0.0,
    recording: false,
    paused: false,
    stoppedRecording: false,
    finished: false,
    audioPath: AudioUtils.DocumentDirectoryPath + '/test.amr',
    hasPermission: true,
    gravarcor: 'black',
    stopcor: 'black',
    playcor: 'black',
  };


  render() {

    return (

      <View style={styles.container}>

      </View>



    );
  }
}

export default (AudioRec);
