import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  RefreshControl,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { Header } from "../../globalComponents";
import { ScannerAPI } from "../../components";
import { responsividade } from "../../styles";
import { connect } from "react-redux";
import { ModalCheck } from "../../globalComponents";

import {
  NavigationActions,
  withNavigation,
  StackActions
} from "react-navigation";
import Api from "../../services/api";

class Main extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  static navigationOptions = {
    header: null
  };

  state = {
    nome: "",
    drawerStatus: null,
    scanner: false,
    viewModals: false,
    messageRequest: "",
    arrayReq: null
  };

  componentWillMount() {
    this.requestClass();
  }

  requestClass = async () => {
    this.setState({ scanner: false });
    const { navigation } = this.props;
    try {
      const response = await Api.user.checkClass();
      if (response.status === 206) {
        this.setState({ viewNoClasses: true });
      } else {
        this.setState({
          arrayReq: response.data.data,
          viewNoClasses: false,
          scanner: false
        });
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.navigateToLogin);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress");
  }

  navigateToScreen = (route, exit) => () => {
    if (exit) {
      this.props.getExitLogin();
    }
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  openDrawer = () => {
    const { drawerStatus } = this.state;

    if (drawerStatus === true) {
    }
  };

  navigateToLogin = async () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: "Login" })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  openScanner = () => {
    this.setState({ scanner: true });
  };

  closeScanner = () => {
    this.setState({ scanner: false });
  };

  renderClasses = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("NewMenu", { key: item.disciplineId });
        }}
      >
        <View style={styles.row}>
          <Text style={styles.status1}>Disciplina: </Text>
          <Text style={styles.ref}>{item.discipline}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.status1}>Turma: </Text>
          <Text style={styles.statusEnviado}>{item.class}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.status2}>P1: </Text>
          <Text style={styles.notas}>{item.test1 ? item.test1 : "N/A"}</Text>
          <Text style={styles.status2}>P2: </Text>
          <Text style={styles.notas}>{item.test2 ? item.test2 : "N/A"}</Text>
          <Text style={styles.status2}>P3: </Text>
          <Text style={styles.notas}>{item.test3 ? item.test3 : "N/A"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.requestClass();
    this.setState({ refreshing: false });
  };

  render() {
    const { navigation, login } = this.props;
    const {
      nome,
      scanner,
      viewModals,
      viewClasses,
      viewNoClasses,
      messageRequest,
      arrayReq
    } = this.state;
    const name = navigation.getParam("nome", "Nome não cadastrado");
    const { largura_tela } = responsividade;
    return (
      <View style={styles.container}>
        <Header showExit showNotas />

        <View style={{ marginTop: 22 }}>
          <Modal animationType="slide" transparent={true} visible={scanner}>
            <TouchableOpacity
              style={styles.modalcontainer}
              onPress={() => {
                this.setState({ scanner: false });
              }}
            >
              <Text style={styles.baixar}>Escaneie o código</Text>
              <View style={styles.modalinfo}>{scanner && <ScannerAPI />}</View>
            </TouchableOpacity>
          </Modal>
        </View>

        <View style={styles.titlee}>
          <Text style={styles.name}>{login.userName}</Text>
          <View style={styles.blueLine} />
        </View>

        <View style={styles.buttons_view2}>
          <TouchableOpacity
            onPress={() => {
              this.openScanner();
            }}
          >
            <View style={styles.novoTesteButton}>
              <Text style={styles.button_text}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          // contentContainerStyle={styles.bodyS}
          //centerContent={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={styles.info}>
            {viewNoClasses && (
              <View style={styles.teste}>
                <Text style={styles.textoNaoCadastrado}>
                  {" "}
                  Nenhuma turma encontrada.
                </Text>
                <Text style={styles.textoNaoCadastrado}>
                  {" "}
                  Para adicionar uma nova turma,{" "}
                </Text>
                <Text style={styles.textoNaoCadastrado}>
                  {" "}
                  aperte no botão "+".
                </Text>
              </View>
            )}

            {arrayReq ? arrayReq.map(item => this.renderClasses(item)) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginState
});

export default connect(
  mapStateToProps,
  null
)(Main);
