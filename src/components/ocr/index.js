import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions, TextInput, AsyncStorage
} from 'react-native';
import config from './config';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
var ImagePicker = NativeModules.ImageCropPicker;
import axios from 'axios';
import { responsividade } from '../../styles';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as GroupActions } from '../../store/ducks/group';


class OCR extends Component {
    state = {
        avatarSource: null,
        videoSource: null,
        imagePath: null,
        image: null,
        images: null,
        text: '',
        showButton: false,
    };

    componentWillMount() {
        const { form, data, group, index } = this.props;
          for (var key in form.step) {
            if (key === data.data_name) {
              if (form.step[key].filled === true) {
                this.setState( form.step[key].initialState );
              }
            }
          }
        }


    pickSingleWithCamera(cropping) {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 480,
            height: 640,
            includeExif: false,
            includeBase64: true,
        }).then(async image => {
            this.setState({
                image: { uri: image.path, width: image.width, height: image.height },
                images: null,
                imagePath: image.path
            });
            const responseOcr = await this.checkForText(image.data);
            if (responseOcr.responses[0]) {
                await this.setState({ text: responseOcr.responses[0].fullTextAnnotation.text, showButton: true });
            }
        });
    }

    // Chamada a API do Google Cloud Vision passando a foto no body
    async checkForText(base64) {
        const body = JSON.stringify({
            "requests": [
                {
                    "image": {
                        "content": base64
                    },
                    "features": [
                        {
                            "type": "DOCUMENT_TEXT_DETECTION"
                        }
                    ]
                }
            ]
        });

        return await fetch(config.googleCloud.api + config.googleCloud.apiKey, {
            method: 'POST',
            body: JSON.stringify({
                "requests": [
                    {
                        "image": {
                            "content": base64
                        },
                        "features": [
                            {
                                "type": "DOCUMENT_TEXT_DETECTION"
                            }
                        ]
                    }
                ]
            })
        }).then(response => {
            return response.json();
        }).catch()
    }

    saveFormOCR = info => {
        const { text, showButton } = this.state;
        const {
          form,
          getSaveStateForm,
          startControlArray,
          data,
          index,
          saveDataGroup,
          group,
          groupMother,
          startControlArrayGroup,
        } = this.props;
        if (text != '') {
          if (data.group === 'jhg') {
            saveDataGroup({ index, groupMother, name: info.data_name, data: text })
          } else {
            for (var key in form.step) {
              if (key === info.data_name) {
                const form = {};
                form[info.data_name] = { key: info.data_name, value: text, filled: true, initialState: this.state };
                getSaveStateForm(form);
              }
            }
          }
        } else {
          for (var key in form.step) {
            if (key === info.data_name) {
              const form = {};
              form[info.data_name] = { key: info.data_name, value: text, filled: false };
              //console.log(form[info.data_name])
              getSaveStateForm(form);
            }
          }
        }
        startControlArray();
        // await startControlArrayGroup();
      }

    render() {
        const { text, showButton } = this.state;
        const { data_name, label, hint, default_value, newState, groupFlag } = this.props.data;
        const  { largura_tela } = responsividade;
        const { saveStep, step } = this.props.form;

        if (saveStep) {
            this.saveFormOCR({ data_name, default_value });
        }
        return (
            <View style={styles.container}>

            <View style={styles.answer}>
                <Text style={styles.hint}>{hint}</Text>
            </View>

            {
                text 
                ?
                <View style={styles.input}>
                    <Text style={styles.info_text}>{this.state.text} </Text>
                </View>
                :
                <TouchableOpacity  onPress={() => this.pickSingleWithCamera(true)} style={styles.buttonhp}>
                    <View style={styles.button_texthp}><Text style={styles.font}>ABRIR CÂMERA</Text></View>  
                </TouchableOpacity>
            }
            {
                showButton && (
                    <TouchableOpacity  onPress={() => this.pickSingleWithCamera(true)} style={styles.buttonhp}>
                        <View style={styles.button_texthp}><Text style={styles.font}>REFAZER OCR</Text></View>  
                    </TouchableOpacity>
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
    bindActionCreators({ ...FormActions, ...GroupActions }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(OCR);
