import React, { Component } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as GroupActions } from '../../store/ducks/group';

import { responsividade } from '../../styles';

import { RNCamera } from 'react-native-camera';
 
class Scanner extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];
  }

  state = {
    vetor: [],
    infoScanner: '',
    showScanner: false,
    showButton: true,
    showButton2: false,
    showCode: false,
    camera: {
      type: RNCamera.Constants.Type.back,
      flashMode: RNCamera.Constants.FlashMode.auto,
      barcodeFinderVisible: true
    },
  }

  componentWillMount() {
  }

  onPress = () => {
    const { vetor } = this.state;
  }

  saveGroupScanner = info => {
    const { infoScanner } = this.state;
  }

  onBarCodeRead(scanResult) {
    this.setState({ infoScanner: scanResult.data, showScanner: false, showButton2: true, showCode: true })
    if (scanResult.data != null) {
	  if (!this.barcodeCodes.includes(scanResult.data)) {
	  this.barcodeCodes.push(scanResult.data);
	}
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

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
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
      <View style={{ justifyContent: 'center', alignItem: 'center' }}>
          <View style={{ alignItems: 'center', height: 250 }}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                barcodeFinderWidth={280}
                barcodeFinderHeight={220}
                barcodeFinderBorderColor="white"
                barcodeFinderBorderWidth={2}
                defaultTouchToFocus
                flashMode={this.state.camera.flashMode}
                mirrorImage={false}
                onBarCodeRead={this.onBarCodeRead.bind(this)}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                style={{ width: 330, height: 250 }}
                type={this.state.camera.type}
            />
          </View>
        {
          this.state.showCode && (
            <View style={styles.codecontainer}>
              <Text style={styles.code}> Código: {this.state.infoScanner} </Text>
            </View>
          )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  form: state.formState,
  group: state.groupState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FormActions, ...GroupActions }, dispatch);;

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);