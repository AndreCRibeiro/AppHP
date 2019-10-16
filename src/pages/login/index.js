import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { ModalCheck } from '../../globalComponents';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SnackBar } from '../../globalComponents';
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
  ActivityIndicator
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import axios from 'axios';
import { responsividade } from '../../styles';

import styles from './styles';

const imageCheck = require('../../assents/lottie/warning.json');

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    progress: new Animated.Value(0),
    btt: null,
    inputSave: null,
    password: null,
    nome: null,
    name: null,
    idUser: null,
    currentPosition: 0,
    viewModal: false,
    messageRequest: '',
    call: false,
    erro: false,
    notLoading: true,
    loading: false,
    teste: false
  }

  async componentWillMount() {
    const id = await AsyncStorage.getItem('@Id');
    this.setState({ btt: id });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.logged !== this.props.login.logged) {
      this.navigateToLogged();
    }
    if (nextProps.login.error && nextProps.login.error !== this.props.login.error) {
      this.setState({ messageRequest: this.props.login.messageError })
    }
  }

  navigateToLogged = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Main' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  navigateToChangeService = () => {
    this.props.navigation.navigate('ChangeService')
  }

  confereCadastro = async () => {
    const { login } = this.props;
    await this.setState({ loading: true })
    const data = { inputSave: this.state.inputSave, password: this.state.password };
    await this.props.getLoginRequest(data);
    await this.setState({ loading:false, messageRequest: login.messageError })
  }

  onPressAnimated = async () => {
    this.animation.play(30, 1000);
  }

  render() {
    const { login } = this.props;
    const { btt, viewModal, messageRequest, call , erro, notLoading, loading } = this.state;
    return (
      <View style={styles.container}>

        {
              login.error && (
                <SnackBar inside content={login.messageError || "Verique sua conexão com a internet"} color='#3C3C46' fontcolor="white"  />
              )
        }

        <KeyboardAwareScrollView
            contentContainerStyle={styles.viewInputs}
            scrollEnabled={true}
        >

          <View style={styles.logoview}>
            <Text style={styles.logo}>SPHL</Text>
            <Text style={styles.ed}>Educacional</Text>
          </View>
           
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={true}
              placeholder="Email"
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={inputSave => this.setState({ inputSave })}
              value={this.state.inputSave}
              defaultValue={btt}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={true}
              placeholder="Senha"
              underlineColorAndroid="rgba(0,0,0,0)"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <TouchableOpacity style={styles.entrarButton} onPress={() => this.confereCadastro()}>
            {
                loading ? (
                  <ActivityIndicator size ="small" color='rgb(225, 200, 133)'/>
                ) : (
                  <Text style={styles.buttonText}>
                    ENTRAR
                  </Text>
                )
              }
            </TouchableOpacity>
            <TouchableOpacity style={styles.cadastrarButton} onPress={() => this.navigateToSignUp()}>
              <Text style={styles.buttonText}>
                CADASTRAR
              </Text>
            </TouchableOpacity>         
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

