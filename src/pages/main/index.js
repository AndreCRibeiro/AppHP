import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, AsyncStorage, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import axios from 'axios';
import { Header } from '../../globalComponents';
import { Sketch } from '../../components';
import { responsividade } from '../../styles';
import { connect } from 'react-redux';

import { NavigationActions, withNavigation, StackActions } from 'react-navigation';


const dias = 23;
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
    day: 0,
    drawerStatus: null,
  }
  
  /*componentWillMount() {
    const { login } = this.props;

    let days;
    const currentDate = new Date();
    const date =  new Date(login.valtoken.replace(' ','T'));
    console.tron.log('date token', days, currentDate, date, currentDay, dateDay, currentMonth, dateMonth);
   

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    const dateDay = date.getDate();
    const dateMonth = date.getMonth();

    if (dateMonth > currentMonth) {
      if (dateDay < currentDay) {
        days = (30 - currentDay) + dateDay;
      } else {
        days = 30;
      }
    } else {
      days = dateDay - currentDay;
    }
    
    
    console.tron.log('date token', days, currentDate, date, currentDay, dateDay, currentMonth, dateMonth);
    this.setState({ day: days })  
  }

  convertDate = starttime => {
    // Your default date object  
    //var starttime = new Date();
    // Get the iso time (GMT 0 == UTC 0)
    var isotime = new Date((new Date(starttime)).toISOString() );    
    var fixedtime = new Date(isotime.getTime()-(starttime.getTimezoneOffset()*60000));    
    var formatedMysqlString = fixedtime.toISOString().slice(0, 19).replace('T', ' ');
    console.log( formatedMysqlString );

    return formatedMysqlString;
  }*/

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.navigateToLogin);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
   
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
    const { nome, day } = this.state
    const name = navigation.getParam('nome', 'Nome não cadastrado');
    const { largura_tela } = responsividade;
    //console.tron.log(day);
    return (
      <View style={styles.container}>
        
        <Header />

        <View style={styles.bodyS}>
          <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>Helvio Peixoto</Text>
                <Text style={styles.turma}>Turma B</Text>
                <View style={styles.blueLine} />
            </View>
            <View style={styles.buttons_view}>
              <TouchableOpacity onPress={this.navigateToScreen('NewMenu')}>
                <View style={styles.novoTesteButton}>
                  <Text style={styles.button_text}>NOVO TESTE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Hist')}>
                <View style={styles.meusTestesButton}>
                  <Text style={styles.button_text2}>MEUS TESTES</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginState,
});

export default connect( mapStateToProps , null )(Main);
