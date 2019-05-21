import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage, BackHandler, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { Header } from '../../globalComponents';
import { Scanner } from '../../components';
import { responsividade } from '../../styles';
import { connect } from 'react-redux';
import { ModalCheck } from '../../globalComponents';

import { NavigationActions, withNavigation, StackActions } from 'react-navigation';
import Api from '../../services/api';

class Main extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  static navigationOptions = {
    header: null,
  }

  state = {
    nome: '',
    drawerStatus: null,
    scanner: false,
    viewModals: false,
    messageRequest: '',
  }

  componentWillMount() {
    this.requestClass();
  }

  requestClass = async () => {
    try {
      const response = await Api.user.checkClass();
      if(response.status === 200 ) {
        this.setState({ viewClasses: true });
      } else {
        Alert.alert(response.data.mensagem);
      }
    } catch (error) {
      console.tron.log(error)
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.navigateToLogin);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
   
  }

  navigateToScreen = (route, exit) => () => {
    if (exit) {
        this.props.getExitLogin();
    }
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
}

  openDrawer = () => {
    const { drawerStatus } = this.state;

    if (drawerStatus === true) {
    }
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

  openScanner = () => {
    this.setState({ scanner: true });
  }

  render() {
    const { navigation , login } = this.props;
    const { nome, scanner, viewModals, viewClasses, messageRequest } = this.state
    const name = navigation.getParam('nome', 'Nome não cadastrado');
    const { largura_tela } = responsividade;
    return (
      <View style={styles.container}>

        <View style={styles.buttons_view}>
          <TouchableOpacity onPress={this.navigateToScreen('NewMenu')}>
            <View style={styles.novoTesteButton}>
              <Text style={styles.button_text}>New</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons_view2}>
          <TouchableOpacity onPress={() => this.openScanner()}>
            <View style={styles.novoTesteButton}>
              <Text style={styles.button_text}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Header 
          showExit
          showNotas
        />

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

        <ScrollView contentContainerStyle={styles.bodyS}>
        {
          scanner && (
            <View>
              <Scanner />
            </View>
          )
        }
          <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>{login.userName}</Text>
                <View style={styles.blueLine} />
                {
                  viewClasses && (
                    <View>
                      <Text>Testando</Text>
                    </View>
                  )
                }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginState,
});

export default connect( mapStateToProps , null )(Main);
