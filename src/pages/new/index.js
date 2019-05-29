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
import Icon from 'react-native-vector-icons/FontAwesome';
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
    arrayReq: false,
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  async componentWillMount() {
    const { navigation } = this.props
    const id = navigation.getParam('key');
    const response = await Api.user.checkClassTests(id);
    console.tron.log(response);
    this.setState({ arrayReq: response.data });
    console.tron.log(this.state.arrayReq);
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

  renderTests = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => { navigation.navigate('StepList', {key: item.data}) }}
      >
      <View style={styles.row}>
            <Icon name="file-text-o" size={20} color="black" style={styles.icon} />
            <Text style={styles.ref}>{item.table_name}</Text>
      </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      showRef,
      fadeAnim_ref,
      viewError,
      messageRequest,
      infopicker,
      arrayReq
    } = this.state;
    const { navigation, newState, goBack } = this.props;
    const {largura_tela} = responsividade;
    return (
      <View style={styles.container}>
      <Header
          showArrow
          goBack={this.props.navigation.goBack}
        />
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
              <Text style={styles.textType}>Testes</Text>
            </View>
            <View style={styles.blueLine} />
          </View>

          {
            arrayReq
              ? arrayReq.map(item => this.renderTests(item))
              : null
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