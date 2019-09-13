import React, { Component } from "react";
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  RefreshControl,
  Modal,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  NavigationActions,
  withNavigation,
  StackActions
} from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FormActions } from "../../store/ducks/form";
import { Creators as GroupActions } from "../../store/ducks/group";

import * as Animatable from "react-native-animatable";

import { responsividade } from "../../styles";

import { RNCamera } from "react-native-camera";

import Api from "../../services/api";

class ScannerAPI extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];
    let { width } = Dimensions.get("window");
    this.maskLength = (width * 50) / 100;
  }

  state = {
    vetor: [],
    infoScanner: "",
    showScanner: true,
    showButton: true,
    showButton2: false,
    showCode: false,
    modalVisible: true,
    camera: {
      type: RNCamera.Constants.Type.back,
      flashMode: RNCamera.Constants.FlashMode.auto,
      barcodeFinderVisible: true
    }
  };

  componentWillMount() {}

  onPress = () => {
    const { vetor } = this.state;
  };

  saveGroupScanner = info => {
    const { infoScanner } = this.state;
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onBarCodeRead(scanResult) {
    this.setState({
      showScanner: false,
      showCode: true,
      setModalVisible: false
    });
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes.push(scanResult.data);
        //Alert.alert(scanResult.data)
        this.enrollClass(scanResult.data);
      }
      //this.setState({ infoScanner: scanResult.data, showScanner: false, showCode: true });
      //Alert.alert('Turma não encontrada');
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.uri);
    }
  }

  requestClass = async () => {
    const { navigation } = this.props;
    navigation.navigate("Main");
    try {
      const response = await Api.user.checkClass();
      if (response.data.data.length === 0) {
        this.setState({ viewNoClasses: true });
      } else {
        this.setState({ arrayReq: response.data.data });
      }
    } catch (error) {
      //console.tron.log({error})
      Alert.alert(error);
    }
  };

  _onRefresh = () => {
    fetchData().then(() => {});
  };

  enrollClass = async data => {
    try {
      const response = await Api.user.enrollStudent({ code: data });
      Alert.alert("Cadastrado com sucesso");
    } catch (error) {}
  };

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {
    const { showScanner, showButton, showButton2, infoScanner } = this.state;
    const { saveStep, step } = this.props.form;
    const { largura_tela } = responsividade;
    const { group } = this.props;
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          style={{ backgroundColor: "transparent" }}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View>
            {showScanner && (
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                barcodeFinderWidth={500}
                barcodeFinderHeight={500}
                barcodeFinderBorderColor="green"
                barcodeFinderBorderWidth={2}
                defaultTouchToFocus
                flashMode={this.state.camera.flashMode}
                mirrorImage={false}
                onBarCodeRead={this.onBarCodeRead.bind(this)}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                permissionDialogTitle={"Permission to use camera"}
                permissionDialogMessage={
                  "We need your permission to use your camera phone"
                }
                style={{
                  width: "100%",
                  height: "100%"
                }}
                type={this.state.camera.type}
              >
                <View style={styles.overlay} />
                <View style={[styles.contentRow, { height: this.maskLength }]}>
                  <View styel={styles.overlay} />
                  <View
                    style={[
                      styles.content,
                      { width: "90%", height: this.maskLength }
                    ]}
                  >
                    <Animatable.View
                      style={[
                        styles.scanline,
                        {
                          top: this.maskLength / 4,
                          width: "90%"
                        }
                      ]}
                      animation="slideInUp"
                      iterationCount="infinite"
                      direction="alternate"
                    />
                  </View>
                  <View style={styles.overlay} />
                </View>
                <View style={styles.overlay} />
              </RNCamera>
            )}

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  form: state.formState,
  group: state.groupState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FormActions, ...GroupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScannerAPI);
