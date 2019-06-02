import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SnackBar , Header} from './../../globalComponents';

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Animated,
  Easing,
  AsyncStorage,
  Alert,
  BackHandler
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Axios from 'axios';
import Api from '../../services/api';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const imageCheck = require('../../assents/lottie/warning.json');

import styles from './styles';

const labels = ["Email", "PIN", "Senha"];
const customStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4CC6D3',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#4CC6D3',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4CC6D3',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4CC6D3',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#4CC6D3',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#ffffff',
  labelSize: 13,
  currentStepLabelColor: '#4CC6D3',
}

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    progress: new Animated.Value(0),
    currentPosition: 1,
    idRegistro: null,
    inputSave: null,
    viewModal: false,
    messageRequest: '',
  }

  async componentWillMount() {
    const idRegistro = await AsyncStorage.getItem('@IdRegistro');
    this.setState({ idRegistro: idRegistro });
  }

  componentDidMount() {

    BackHandler.addEventListener('hardwareBackPress', this.navigateToLogin);
  }

  navigateToLogin = async () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Login' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  navigateToPassword = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Password' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  onPressAnimated = async () => {
    this.animation.play(30, 1000);
  }

  conferePIN = async () => {
    const { inputSave, idRegistro } = this.state;

    try {
      const response = await Api.user.postConferePIN({ matricula: idRegistro, pin: inputSave });
      if (response.status === 200) {
        AsyncStorage.setItem('@PinRegistro', inputSave);
        this.navigateToPassword();
      } else {
        this.setState({ viewModal: true, messageRequest: response.data.mensagem });
      }
    } catch {
      this.setState({ viewModal: true, messageRequest: response.data.mensagem });
    }
  }

  render() {
    const { viewModal, messageRequest } = this.state;
    return (
      <KeyboardAwareScrollView
       contentContainerStyle={styles.container}
       scrollEnabled= {false}
      >

      <Header
          title=''
          showArrowRegister
          color = 'rgba(45, 45, 45, 0.8)'
        />
        <StatusBar backgroundColor="rgba(45, 45, 45, 0.8)" />
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <Icon name="fiber-pin" size={70} color="#4CC6D3" style={styles.icon} />
          </View>

          <Text style={styles.descript}>Verifique seu email</Text>
          <View style={styles.forms}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              keyboardType='numeric'
              autoCorrect={false}
              placeholder="Código de confirmação"
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={inputSave => this.setState({ inputSave })}
              value={this.state.inputSave}
            />

            <TouchableOpacity style={styles.testebutton} onPress={() => { this.conferePIN(); }}>
              <Text style={styles.buttonText}>
                CONTINUAR
               </Text>
            </TouchableOpacity>
          </View>
        </View>
        <HideWithKeyboard>
          <View style={styles.indicadorContainer}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
              stepCount={3}
            />
          </View>
          </HideWithKeyboard>
        {
          viewModal && (
            <SnackBar register content={this.state.messageRequest} color="#4173CE" />
          )
        }
      </KeyboardAwareScrollView>
    );
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
}

export default Login;
