import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import {
  Header,
  PickerItem,
} from '../../globalComponents';
import Api from '../../services/api';

import styles from './styles';

class ChangeService extends Component {
  state = {
    infopicker: [
      {
        name: 'Servidor v1',
        value: 'http://35.198.17.69/api',
      },
      {
        name: 'Servidor v2',
        value: 'http://35.198.17.69/api/v2',
      },
    ],
    testeParam: '',
  }

  change = (variavel) => {
    Api.changeBaseURL(variavel);
    this.props.navigation.goBack();
  }
  receiveParams = params => {
    console.log(params)
    this.setState({ testeParam: params });

  }

  render() {
    const { infopicker, testeParam } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title="Trocar Servidor"
          showArrow
          goBack={this.props.navigation.goBack}
        />
        <View style={styles.mainView}>
          <Text style={styles.title}>
            Escolha um servidor:
          </Text>
          <View style={styles.picker}>
            <PickerItem
              receiveProps={(params => this.receiveParams(params))}
              arrayConfig={infopicker}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.change(testeParam)}>
            <Text style={styles.textButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChangeService;
