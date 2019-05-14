import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
  BackHandler,
  ActivityIndicator
} from "react-native";
import { Header } from "../../globalComponents";
import {
  NavigationActions,
  withNavigation,
  StackActions
} from "react-navigation";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Api from '../../services/api';
import axios from "axios";


class UpdatePops extends Component {
  state = {
    pops: '',
    popList: false,
    arrayEnviados: null,
    arrayRef: null,
    modalVisible: false,
    form: null,
    idUser: null,
    loading: true,
    errorview: false,
    callFuction: true,
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  async componentWillMount() {
    this.requestAllPops();
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  loading() {
    this.setState({ loading: false });
  }

  handleBackButton() {
    return true;
  }


  requestAllPops = async () => {
    try {
      const response = await Api.form.getAllPops();
      if (response.status === 200) {
        this.setState({ pops: response.data, popList: true, loading: false, errorview: true });
      } else {

      }
    } catch (error) {
      this.setState({ loading: false, errorview: true })
    }
  }

  renderPops = item => {
    if (item) {

      return (

        <TouchableOpacity
          style={styles.box}
          onPress={() => { }}
        >

          <View style={styles.row}>
            <Text style={styles.status}>Perícia {item.form_titulo} </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.status1}>Num ID: {item.form_id}  |  Versão {item.form_version}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.status1}></Text>
          </View>
        </TouchableOpacity>

      );
    }
    return null;
  }


  render() {
    const { navigation } = this.props;
    const { popList, pops } = this.state;
    return (
      <View style={styles.container}>
        <Header
          showMenu
          showClear
          openMenu={navigation.toggleDrawer}
          title="POPs Disponíveis"
        />
        <View style={styles.main}>
          <ScrollView>
            {popList ? pops.map(item => this.renderPops(item)) : null}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default (UpdatePops);
