import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage, BackHandler, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { Header } from '../../globalComponents';
import { responsividade } from '../../styles';
import { connect } from 'react-redux';

import { NavigationActions, withNavigation, StackActions } from 'react-navigation';

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

  render() {
    const { navigation , login } = this.props;
    const { nome } = this.state
    const name = navigation.getParam('nome', 'Nome não cadastrado');
    const { largura_tela } = responsividade;
    return (
      <View style={styles.container}>

        <View style={styles.buttons_view}>
          <TouchableOpacity onPress={this.navigateToScreen('NewMenu')}>
            <View style={styles.novoTesteButton}>
              <Text style={styles.button_text}>+</Text>
            </View>
            </TouchableOpacity>
        </View>
        
        <Header 
          showExit
          showNotas
        />

        <ScrollView contentContainerStyle={styles.bodyS}>
          <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>{login.userName}</Text>
                <View style={styles.blueLine} />
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
