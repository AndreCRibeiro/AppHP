import React, { Component } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import ScannerAPI from "../../../../components/scannerAPI/";

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
      >
        <TouchableOpacity
          style={styles.modalcontainer}
          onPress={() => onClose()}
        >
          <Text style={styles.baixar}>Escaneie o código</Text>
          <View style={styles.modalinfo}>{viewModal && <ScannerAPI />}</View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default CheckModal;
