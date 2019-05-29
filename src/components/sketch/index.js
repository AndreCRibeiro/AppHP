import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Picker
} from "react-native";

import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { responsividade } from "../../styles";

import RNSketchCanvas from "@terrylinla/react-native-sketch-canvas";

onPress = () => {
  const { vetor } = this.state;
};

export default class Sketch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScanner: false,
      showButton: true,
      fundo: ""
    };
  }

  render() {
    const { showScanner, showButton } = this.state;
    const { largura_tela } = responsividade;
    return (
      <View style={{ justifyContent: "center", alignItem: "center" }}>
        {showButton && (

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

          <TouchableOpacity
                      onPress={() =>
                        this.setState({ showScanner: true, showButton: false })
                      } style={styles.buttonhp}>
              <View style={styles.button_texthp}><Text style={styles.font}>ABRIR CROQUI</Text></View>  
          </TouchableOpacity>
          </View>
        )}
        {showScanner && (
          <View style={{ width: 330, height: 250, rigth: 50 }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={showScanner}
              onRequestClose={() => { }}
            >
              <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <RNSketchCanvas
                    containerStyle={{ backgroundColor: "transparent", flex: 1 }}
                    canvasStyle={{ backgroundColor: "transparent", flex: 1 }}
                    defaultStrokeIndex={0}
                    defaultStrokeWidth={5}
                    changeImg={
                      <View style={styles.functionButton}>
                        <Picker
                          selectedValue={this.state.fundo}
                          style={{ height: 50, width: 50 }}
                          onValueChange={value =>
                            this.setState({ fundo: value })
                          }
                        >
                          <Picker.Item label="Croqui" value="croqui.png" />
                          <Picker.Item label="Vítima" value="img.jpg" />
                        </Picker>
                      </View>
                    }
                    closeComponent={
                      <View style={styles.functionButton}>
                        <Text
                          onPress={() =>
                            this.setState({
                              showScanner: false,
                              showButton: true
                            })
                          }
                          style={{ color: "red", fontWeight: "bold" }}
                        >
                          Fechar
                        </Text>
                      </View>
                    }
                    saveComponent={
                      <View style={styles.functionButton}>
                        <Text style={{ color: "green", fontWeight: "bold" }}>
                          Salvar
                        </Text>
                      </View>
                    }
                    undoComponent={
                      <View style={styles.functionButton}>
                        <Text style={{ color: "white" }}>Desfazer</Text>
                      </View>
                    }
                    clearComponent={
                      <View style={styles.functionButton}>
                        <Text style={{ color: "white" }}>Limpar</Text>
                      </View>
                    }
                    eraseComponent={
                      <View style={styles.functionButton}>
                        <Text style={{ color: "white" }}>Apagar</Text>
                      </View>
                    }
                    strokeComponent={color => (
                      <View
                        style={[
                          { backgroundColor: color },
                          styles.strokeColorButton
                        ]}
                      />
                    )}
                    strokeSelectedComponent={(color, index, changed) => {
                      return (
                        <View
                          style={[
                            { backgroundColor: color, borderWidth: 2 },
                            styles.strokeColorButton
                          ]}
                        />
                      );
                    }}
                    strokeWidthComponent={w => {
                      return (
                        <View style={styles.strokeWidthButton}>
                          <View
                            style={{
                              backgroundColor: "white",
                              marginHorizontal: 2.5,
                              width: Math.sqrt(w / 3) * 10,
                              height: Math.sqrt(w / 3) * 10,
                              borderRadius: (Math.sqrt(w / 3) * 10) / 2
                            }}
                          />
                        </View>
                      );
                    }}
                    localSourceImage={{
                      filename: this.state.fundo,
                      directory: "android/app/src/main/res/drawable",
                      mode: "AspectFill"
                    }}
                    savePreference={() => {
                      return {
                        folder: "Croqui",
                        filename: String(Math.ceil(Math.random() * 100000000)),
                        transparent: false,
                        imageType: "png"
                      };
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
      </View>
    );
  }
}
