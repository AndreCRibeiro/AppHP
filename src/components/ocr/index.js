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

class OCR extends Component {
    state = {
        avatarSource: null,
        videoSource: null,
        imagePath: null,
        image: null,
        images: null,
        text: null,
    };


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
                await this.setState({ text: responseOcr.responses[0].fullTextAnnotation.text });
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

    render() {
        const { text } = this.state;
        const  { largura_tela } = responsividade;
        return (
            <View style={styles.container}>

            <View style={styles.component_card}>

            <View style={styles.title}> 
            <View style={styles.title_view}>
            <Text style={styles.title_text}>Questão X</Text>
            <View style={styles.blueline}></View>
            </View>

            </View>

            <View style={styles.answer}>
                <Text style={styles.answer_text}>Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet</Text>
            </View>

            <TouchableOpacity  onPress={() => this.pickSingleWithCamera(true)} style={styles.buttonhp}>
                <View style={styles.button_texthp}><Text style={styles.font}>ABRIR CÂMERA</Text></View>  
            </TouchableOpacity>
            </View>

                

                {
                    text && (
                        <View style={styles.input}>
                            <Text style={styles.info_text}>{this.state.text} </Text>
                        </View>
                    )
                }
            </View>
        );
    }
}

export default OCR;
