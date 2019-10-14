import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
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
import { ModalCheck } from '../../globalComponents';
import {SnackBar, Header} from './../../globalComponents';
import StepIndicator from 'react-native-step-indicator';
import Axios from 'axios';
import Api from '../../services/api';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const imageCheck = require('../../assents/lottie/warning.json');
const imageCheck2 = require('../../assents/lottie/check.json');

import styles from './styles';

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
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#4CC6D3',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#FFFFFF',
  stepIndicatorLabelFinishedColor: '#4CC6D3',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#4CC6D3',
  labelSize: 18,
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
    pinRegistro: null,
    inputSave1: null,
    inputSave2: null,
    id: null,
    viewModals: false,
    messageRequest: '',
    userName: null,
    userEmail: null,
  }

  async componentWillMount() {
    const nome = await AsyncStorage.getItem('@UserName');
    const email = await AsyncStorage.getItem('@UserEmail');
    this.setState({ userName: nome, userEmail: email });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.navigateToEmail);
  }

  navigateToEmail = async () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Login' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }


   salvarId = async () => {
    //const { id, idRegistro, pinRegistro, inputSave1, inputSave2 } = this.state;
    const { userEmail, userName, inputSave1, inputSave2 } = this.state
    this.setState({ viewModal: false});
    
    if (inputSave1 == inputSave2) {
      try {
        const response = await Api.user.createPassword({ 
          name: userName, 
          email: userEmail, 
          type: "student", 
          password_hash: inputSave2
        });
        if (response.status === 200) {
          this.setState({ viewModals: true })
        } else {
          Alert.alert(response.data.mensagem);
        }
      } catch{
        this.setState({ viewModal: true , messageRequest: 'Erro de conexão' });
      }
    } else {
      this.setState({ viewModal: true , messageRequest: 'Senhas diferentes' });
    }
   
    //if(id){
    //AsyncStorage.setItem('@Id', id);
    //}
  }

  closeModal = () => {
    this.props.navigation.navigate('Password');
  }

  onPressAnimated = async () => {
    this.animation.play(30, 1000);
  }

  render() {
    const { viewModal, messageRequest , viewModals} = this.state;
    return (

      <KeyboardAwareScrollView
       contentContainerStyle={styles.container}
       scrollEnabled= {true}
      >

      <Header
          title=''
          showArrowRegister
          color = 'rgba(45, 45, 45, 0.8)'
        />
      <StatusBar backgroundColor="rgba(45, 45, 45, 0.8)" />
        <View style={styles.mainContainer}>
        <View style={styles.icon}>
        <Icon name="vpn-key" size={70} color="#4CC6D3" style={styles.icon} />
        </View>
        
          <Text style={styles.descript}>Escolha uma senha</Text>
            <View style={styles.forms}>
              <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Senha"
                  secureTextEntry={true}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  onChangeText={inputSave1 => this.setState({ inputSave1 })}
                  value={this.state.inputSave1}
            />
            <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Confirmar senha"
                  secureTextEntry={true}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  onChangeText={inputSave2 => this.setState({ inputSave2 })}
                  value={this.state.inputSave2}
            />

            <TouchableOpacity style={styles.testebutton} onPress={() => { this.salvarId(); }}>
              <Text style={styles.buttonText}>
                CADASTRAR
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
            stepCount={2}
          />
        </View>
        </HideWithKeyboard>
        {
          viewModals && (
            <ModalCheck
              message={messageRequest}
              viewModal
              success
              sourceImage={imageCheck2}
            />
          )
        }
        {
          viewModal && (
            <SnackBar register content={this.state.messageRequest} color="#4173CE" />
          )
        }
      </KeyboardAwareScrollView>
    );
  }
  onPageChange(position){
    this.setState({ currentPosition: position });
  }
}


export default Login;
