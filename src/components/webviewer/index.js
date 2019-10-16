import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert, Image, 
    TouchableOpacity, NativeModules, Dimensions, TextInput, AsyncStorage
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { responsividade } from '../../styles';
import HTML from 'react-native-render-html';
import ModalBox from 'react-native-modal';
import { colors, metrics } from '../../styles';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

class Webviewer extends Component {
    state = { 
        textModal: false,
    };

    openModal = () => {
        this.setState({ textModal: true });
    }

    closeModal = () => {
        this.setState({ textModal: false });
    }

    render() {
        const { textModal } = this.state;
        return (
            <View style={styles.container}>
                    <TouchableOpacity  onPress={() => this.openModal() } style={styles.buttonhp}>
                        <View style={styles.button_texthp}><Text style={styles.font}>ABRIR TEXTO</Text></View>  
                    </TouchableOpacity>
                <ModalBox 
                    backdropOpacity={1} isVisible={textModal} 
                    onBackdropPress={this.closeModal}
                    backdropColor= "white"
                >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.closeModal() }>
                            <Icon name="md-arrow-back" size={40} style={styles.arrowheader} />
                        </TouchableOpacity>
                        <Text style={styles.textheader} >VOLTAR PARA PROVA</Text>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
                    </ScrollView>
                </ModalBox>
            </View>
        )
    }
}

export default Webviewer