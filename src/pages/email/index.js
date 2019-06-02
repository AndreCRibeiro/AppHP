import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SnackBar, Header } from '../../globalComponents';
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
  BackHandler,
  ActivityIndicator
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const imageCheck = require('../../assents/lottie/warning.json');

import styles from './styles';
import { red } from 'ansi-colors';
import Axios from 'axios';
import Api from '../../services/api';


const labels = ["Email","Senha"];
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
  labelColor: '#4CC6D3',
  labelSize: 13,
  currentStepLabelColor: '#4CC6D3',
}


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    progress: new Animated.Value(0),
    inputSave1: null,
    inputSave2: null,
    viewModal: false,
    messageRequest: '',
    load : false,
    cont: true,
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.navigateToLogin);
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

  /*navigateToHash = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Hash' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }*/

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

  confereID = async () => {
    const { inputSave1, inputSave2 } = this.state;
    this.setState({ viewModal: false , cont: false ,load: true});
    /*try {
      const response = await Api.user.postCadastroId({ matricula: inputSave2 })
      if (response.status === 200) {
        AsyncStorage.setItem('@IdRegistro', inputSave2);
        //this.navigateToHash();
        this.navigateToPassword();
      } else {
        this.setState({ viewModal: true, messageRequest: response.data.mensagem, load: false , cont: true});
      }
    } catch {
      this.setState({ viewModal: true, messageRequest: response.data.mensagem });
    }*/
    AsyncStorage.setItem('@UserName', inputSave1);
    AsyncStorage.setItem('@UserEmail', inputSave2);
    this.navigateToPassword();
  }

  onPressAnimated = async () => {
    this.animation.play(30, 1000);
  }

  render() {
    const { viewModal, messageRequest, load ,cont } = this.state;
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
            <Icon name="fingerprint" size={70} color="#4CC6D3" style={styles.icon} />
          </View>
          <Text style={styles.descript}>Por favor digite seu email</Text>
          <View style={styles.forms}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Digite seu nome"
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={inputSave1 => this.setState({ inputSave1 })}
              value={this.state.inputSave}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Digite seu email"
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={inputSave2 => this.setState({ inputSave2 })}
              value={this.state.inputSave}
            />
            <TouchableOpacity style={styles.testebutton} onPress={() => { this.confereID(); }}>
            {
              cont && (
                <Text style={styles.buttonText}>
                CONTINUAR
                </Text>
              )
              
            }

            {
              load && (
                <ActivityIndicator size="small" color="#4CC6D3" />
              )
            }
            </TouchableOpacity>
           
          </View>
        </View>
        <HideWithKeyboard>
          <View style={styles.indicadorContainer}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={labels}
                stepCount={2}
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
