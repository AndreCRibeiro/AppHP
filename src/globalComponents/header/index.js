import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, AsyncStorage, Alert } from 'react-native';
import { NavigationActions, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as GroupActions } from '../../store/ducks/group';
import { Creators as LoginActions } from '../../store/ducks/login';
import { responsividade } from '../../styles';

class HeaderRedux extends Component {
  state = {
    showAlert: false,
    alertVisible: false,
  }

  openAlert = () => {
    this.setState({ showAlert: true, alertVisible: true })
  }

  closeAlert = () => {
    this.setState({ showAlert: false, alertVisible: false })
  }

  clearAsync = () => {
    AsyncStorage.clear();
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

  showGrades = () => {

  }

  static defaultProps = {
    color: '#344955',
  }

  render() {
    const {
      showClear,
      showModalInfo,
      showArrow,
      showArrowRegister,
      showMenu,
      showInfo,
      showExit,
      showNotas,
      goBack,
      openMenu,
      title,
      startUpdateProgress,
      showProgress,
      saveStepState,
      form,
      activeFlag,
      navigation,
    } = this.props;
    const { showAlert } = this.state;
    const { largura_tela } = responsividade;
    // console.tron.log(this.props, goBack);
  

    return (
      <View style={{...styles.header }}>

        <StatusBar backgroundColor= {this.props.color} barStyle="light-content" />
          <View style={styles.viewIcon}>
            {
              showMenu && (
                <TouchableOpacity onPress={() => openMenu()}>
                  <Icon name="md-menu" size={ largura_tela < 430 ? 28 : 40 } style={styles.iconMenu} />
                </TouchableOpacity>
              )
            }            
            {
              showNotas && (
                <TouchableOpacity onPress={() => this.showGrades()} style={styles.grades}>
                  <Icon name="md-book" size={ largura_tela < 430 ? 30 : 40 } style={styles.iconExit} />
                  <Text style={styles.nameIcon}>Notas</Text>
                </TouchableOpacity>
              )
            }
            {
              showArrow && (
                <TouchableOpacity onPress={() => {
                    if(showProgress){
                      activeFlag();
                      startUpdateProgress();
                      saveStepState();                     
                    }
                    goBack();
                  }}
                >
                  <Icon name="md-arrow-back" size={ largura_tela < 430 ? 28 : 40 } style={styles.iconMenu} />
                </TouchableOpacity>
              )
            }
             {
              showArrowRegister && (
                <TouchableOpacity onPress={() => 
                    navigation.navigate('Login')
                  }
                >
                  <Icon name="md-arrow-back" size={ largura_tela < 430 ? 28 : 40 } style={styles.iconMenu} />
                </TouchableOpacity>
              )
            }
          </View>
            <View style={styles.viewTitle}>
              <Text style={styles.headerTitle}>
                {title}
              </Text>
            </View>
          <View style={styles.viewIcon}>
            {
              showInfo ?
                <TouchableOpacity onPress={() => this.openInfo()}>
                  <Icon name="ios-information-circle-outline" size={28} style={styles.iconMenu} />
                </TouchableOpacity>
              : <View style={styles.concerto} />
            }
            {
              showClear && __DEV__ && (
                <TouchableOpacity onPress={() => this.clearAsync()}>
                  <Icon name="md-trash" size={28} style={styles.iconMenu} />
                </TouchableOpacity>
              )
            }
            {
              showModalInfo && (
                <Info
                  closeModalInfo={this.closeInfo}
                  textInfo={info}
                />
              )
            }
            {
              showAlert && (
                <Alert
                  alertVisible
                  goBack={goBack}
                  closeModalAlert={this.closeAlert}
                />
              )
            }
            {
              showExit && (

                <TouchableOpacity onPress={this.navigateToScreen('Login', true)} style={styles.grades}>
                  <Icon name="md-exit" size={ largura_tela < 430 ? 30 : 40 } style={styles.iconMenu} />
                </TouchableOpacity>
              )
            }
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  form: state.formState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...FormActions, ...GroupActions, ...LoginActions}, dispatch);

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderRedux)
export default withNavigation(Header);
