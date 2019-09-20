import React, { Component } from "react";
import {
  View,
  FlatList,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  Animated,
  BackHandler
} from "react-native";
import styles from "./styles";
import StepBox from "./components/StepBox";
import { Load } from "../../components";
import { Header } from "../../globalComponents";
import { connect } from "react-redux";
import axios from "axios";
import Api from "../../services/api";

import { bindActionCreators } from "redux";
import { Creators as FormAction } from "../../store/ducks/form";
import { Creators as HistActions } from "../../store/ducks/hist";
import { SnackBar } from "../../globalComponents";

class StepList extends Component {
  state = {
    modalVisible: false,
    load: false,
    form: "",
    teste: 10,
    showAlert: false,
    formRedux: true,
    viewError: false,
    matriculaAsync: "",
    saved: false,
    error: false,
    mensageError: "Error",
    data: false
  };

  componentWillMount() {
    BackHandler.removeEventListener("hardwareBackPress", this.saveForm);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.saveForm);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.saveForm);
  }

  cancel() {
    this.props.navigation.goBack();
  }

  saved() {
    this.setState({ saved: true });
    let that = this;
    setTimeout(function() {
      that.setState({ saved: false });
    }, 4000);
  }

  saveForm = () => {
    const { reference, saveForm, setSaveContentForm, form } = this.props;
    //saveForm(reference);
    //this.saved();
    this.props.navigation.goBack();
    return true;
  };

  saveForm2 = async () => {
    const { data } = this.state;
    const { reference, saveForm, setSaveContentForm, form } = this.props;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    await this.setState({
      data:
        date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    });

    const timestamp =
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec;

    saveForm(reference, timestamp);
    this.saved();
  };

  resetAsync = () => {
    AsyncStorage.clear();
  };

  errorMessage = msg => {
    this.setState({ viewError: true, mensageError: msg });
    let that = this;
    setTimeout(function() {
      that.setState({ viewError: false });
    }, 4000);
  };

  error = () => {
    this.setState({ error: true });
    let that = this;
    setTimeout(function() {
      that.setState({ error: false });
    }, 4000);
  };

  enviaForm = async () => {
    const { matriculaAsync } = this.state;
    const {
      reference,
      formulario,
      setUpdateHistory,
      login,
      group
    } = this.props;
    const { dataGroup } = group;

    this.setState({ sending: true, original: false });
    const matriculaProv = await AsyncStorage.getItem("@AppInc:matricula");
    const matricula = JSON.stringify(matriculaProv);

    const arrayRef = await AsyncStorage.getItem("arrayRef");
    const array = JSON.parse(arrayRef);

    let contentGroup = false;
    let count = 0;
    if (dataGroup.length > 0) {
      contentGroup = true;
    }

    await AsyncStorage.setItem("arrayRef", JSON.stringify(array));

    const dataForm = new FormData();

    // dataForm.append('form_name', formulario.form.form_name);

    for (var key in formulario.step) {
      if (formulario.step[key].type === "camera") {
        formulario.step[key].value.map(item => {
          dataForm.append(`${key}`, item);
        });
      } else {
        dataForm.append(formulario.step[key].key, formulario.step[key].value);
      }
    }

    setUpdateHistory();
    this.setState({ matriculaAsync: matricula });

    this.onSendForm({
      dataForm,
      userId: login.userID,
      token: login.token,
      reference,
      contentGroup,
      dataGroup,
      formName: formulario.form.form_name
    });
  };

  onSendForm = data => {
    const {
      dataForm,
      userId,
      token,
      reference,
      contentGroup,
      dataGroup,
      formName
    } = data;
    const { form } = this.props;

    axios({
      method: "post",
      url: "http://157.230.177.190/form/receiver",
      data: dataForm,
      headers: {
        "Content-Type": "application/json",
        authorization: token,
        test_name: form.form_name,
        discipline_id: form.discipline
      }
    })
      .then(response => {
        //console.tron.log('response', response);
        if (response.status === 206) {
          //console.tron.log('teste', response.data, response.data.mensagem);
          //this.errorMessage(response.data.mensagem);
        } else {
          //AsyncStorage.setItem('@IDlaudo', response.data.number);
          //Alert.alert('ID do laudo', 'O número do seu laudo é ' + response.data.number);
          this.onSendGroup({
            userId,
            token,
            reference,
            dataGroup,
            //idForm: response.data.number,
            formName
          });
        }
      })
      .catch(error => {
        var mensage;
        if (error.response.status === 404) {
          mensage = `${error.response.status} - Não encontrado`;
          //console.tron.log('error 404', error, mensage);
          // this.errorMessage(mensage);
        } else if (error.response.status === 403) {
          mensage = `${error.response.status} - Bloqueado pelo Firewall`;
        } else if (error.response.status === 500) {
          mensage = `${error.response.status} - Erro interno`;
        } else if (error.response.status === 0) {
          mensage = `${error.response.status} - Formato incorreto`;
        }
        //console.tron.log('error form', error, mensage);
        this.errorMessage(mensage);
      });
  };

  onSendGroup = data => {
    const { userId, token, reference, dataGroup, idForm, formName } = data;

    dataGroup.map(group => {
      const formGroup = new FormData();
      let count = 1;
      group.value.map(item => {
        Object.keys(item).map(key => {
          if (key !== "index") {
            formGroup.append(`${group.key}[${count}][${key}]`, item[key].value);
          }
        });
        count += 1;
      });

      axios({
        method: "post",
        url: "http://35.198.17.69/api/pericia/formularios/envio/grupo",
        data: formGroup,
        headers: {
          "Content-Type": "multipart/form-data",
          matricula: userId,
          referencia: "",
          "x-Token": token,
          "form-id": idForm,
          "form-group": group.key,
          "form-name": formName
        }
      })
        .then(function(response) {})
        .catch(error => {
          this.errorMessage();
        });
    });

    // this.props.navigation.navigate('Hist');
  };

  sendGroup = (dataGroup, userId, token, groupName) => {};

  render() {
    const { formRedux } = this.state;
    const { navigation, reference, form } = this.props;
    const { viewError, load, saved, mensageError, data } = this.state;
    if (formRedux) {
      this.props.setSaveContentForm(form);
      this.setState({ formRedux: false });
    }
    let i = 0;
    return (
      <View style={styles.container}>
        <Header title={form.form_titulo} showArrow goBack={this.saveForm} />
        {viewError && (
          <SnackBar
            outside
            content={mensageError}
            color="#3C3C46"
            fontcolor="white"
          />
        )}

        {saved && (
          <SnackBar
            outside
            content="Progresso Salvo!"
            color="#3C3C46"
            fontcolor="white"
          />
        )}

        {data && <Text>{this.state.data}</Text>}
        <ScrollView>
          <FlatList
            data={form.steps}
            renderItem={item => {
              i = i + 1;
              return <StepBox steps={item} form={form} index={i} />;
            }}
          />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttonhp}
              onPress={() => this.enviaForm()}
            >
              <Text style={styles.button_texthp}>ENVIAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonhp}
              onPress={() => this.saveForm2()}
            >
              <Text style={styles.button_texthp}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  form: state.newState.data,
  reference: state.newState.reference,
  formulario: state.formState,
  login: state.loginState,
  group: state.groupState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...FormAction,
      ...HistActions
    },
    dispatch
  );

StepList.navigationOptions = {
  title: "Perícia"
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
