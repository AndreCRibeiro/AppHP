import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  TextInput,
  Animated,
  BackHandler
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, ModalCheck, PickerItem } from '../../globalComponents';
import styles from './styles';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NewActions } from '../../store/ducks/new';
import { Creators as FormActios } from '../../store/ducks/form';
import { responsividade } from '../../styles';

const imageCheck = require('../../assents/lottie/warning.json');

class New extends Component {
  static navigationOptions = {
    title: 'Nova Pericia',
  }

  state = {
    tipo: null,
    subtipo: null,
    ssubtipo: null,
    form: null,
    formQuerry: null,
    classe: null,
    incrementar: 2,
    contador: [1],
    showRef: false,
    fadeAnim: new Animated.Value(0),
    fadeAnim_l: new Animated.Value(0),
    fadeAnim_s: new Animated.Value(0),
    fadeAnim_ref: new Animated.Value(0),
    showButton: null,
    baseUrl: '',
    resposta: null,
    escolha: null,
    showAlert: false,
    viewModal: false,
    messageRequest: 'Sem conexão',
    viewError: false,
    infopicker: [
      {
        name: 'Veículos',
        value: 30,
      },
      {
        name: 'Incêndio',
        value: 32,
      },
      {
        name: 'Genética Forense',
        value: 33,
      },
      {
        name: 'Arrombamento de Caixa',
        value: 6,
      },
      {
        name: 'Catálogo de Componentes',
        value: 1,
      },
    ],
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  async componentWillMount() {
    const valueForm = await AsyncStorage.getItem('@Form');
    const formLocal = JSON.parse(valueForm);
    this.setState({ form: formLocal });
    const valueQuerry = await AsyncStorage.getItem('@Querry');
    const formQuerryLocal = JSON.parse(valueQuerry);
    this.setState({ formQuerry: formQuerryLocal });
    this.incrementarFuncao();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  onPressButton = () => {
    const { navigation, getReference, resetEditForm } = this.props;
    const { inputSave } = this.state;
    if (inputSave) {
      getReference(this.state.inputSave);
      resetEditForm();
      navigation.navigate('StepList', { inputSave: this.state.inputSave });
    } else {
      getReference('Laudo sem Nome');
      resetEditForm();
      navigation.navigate('StepList');
    }
  }

  reqUrl = (value) => {
    const { getNewRequest } = this.props;
    getNewRequest(value);
    this.setState({ showRef: true });
    Animated.timing(                  // Animate over time
      this.state.fadeAnim_ref,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();
  }

  closeModal = () => {
    this.setState({ showRef: false });
    this.props.closeModalError();
  };

  receiveParams = params => {
    this.setState({ testeParam: params, baseUrl: params });
    this.reqUrl(params)
  }

  render() {
    const {
      showRef,
      fadeAnim_ref,
      viewError,
      messageRequest,
      infopicker,
    } = this.state;
    const { navigation, newState, goBack } = this.props;
    const {largura_tela} = responsividade;
    return (
      <View style={styles.container}>
       <Header />
       <View style = {styles.bar}> 
    
      </View>
        
        <KeyboardAwareScrollView 
          contentContainerStyle={styles.scrollview}
          scrollEnabled={true}
        >
          {
            viewError && (
              <View style={styles.message}>
                <Text style={styles.messageError}>Sem conexão</Text>
              </View>
            )
          }
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.textType}> Testes </Text>
            </View>
            <View style={styles.blueLine} />
            <View style={styles.Picker}>
              <PickerItem
                receiveProps={(params => this.receiveParams(params))}
                arrayConfig={infopicker}
              />
            </View>
          </View>

          {
            newState.showButton && (
              <TouchableOpacity style={styles.button} onPress={() => this.onPressButton()}>
                <Text style={styles.buttonText}>
                  CONTINUAR
              </Text>
              </TouchableOpacity>
            )
          }
          {
            newState.erro && (
              <ModalCheck
                message={messageRequest}
                viewModal
                failure
                sourceImage={imageCheck}
                onClose={this.closeModal}
              />
            )
          }
        </KeyboardAwareScrollView>
      </View>

    );
  }
}

const mapStateToProps = state => ({
  newState: state.newState
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...NewActions,
  ...FormActios
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(New);