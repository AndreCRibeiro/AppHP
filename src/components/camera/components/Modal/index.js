import React, { Component } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

class CheckModal extends Component {
  state = {};
  render() {
    const { viewModal, onClose, onCloseEdit, onCloseDeletePops } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={viewModal}
        onRequestClose={() => onClose()}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>Atenção!</Text>
            <Text style={styles.description}>
              Só é permitido fazer um único envio de prova, tem certeza que
              deseja enviar?
            </Text>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.buttonNo}
                onPress={() => onClose()}
              >
                <Text style={styles.textNo}>NÃO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonYes}
                onPress={() => onCloseEdit()}
              >
                <Text style={styles.textYes}>SIM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default CheckModal;
