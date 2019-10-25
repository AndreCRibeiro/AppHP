import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, ScrollView, Picker} from 'react-native';
import styles from './styles';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as GroupActions } from '../../store/ducks/group';

var radio_props = [
    
    {label: 'a', value: 0 },
    {label: 'b', value: 1 },
    {label: 'c', value: 2 },
    {label: 'd', value: 3 },
    {label: 'e', value: 4 },

  ];

class Radio extends Component {
  state = {
    value: false,
  }

  componentWillMount() {
    const { form, data, group, index } = this.props;
      for (var key in form.step) {
        if (key === data.data_name) {
          if (form.step[key].filled === true) {
            this.setState({ value: form.step[key].value });
          }
        }
      }
    }

  saveFormRadio = info => {
    const { value } = this.state;
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
    if (value) {
        for (var key in form.step) {
          if (key === info.data_name) {
            const form = {};
            form[info.data_name] = { key: info.data_name, value: value, filled: true };
            getSaveStateForm(form);
        }
      }
    } else {
      for (var key in form.step) {
        if (key === info.data_name) {
          const form = {};
          form[info.data_name] = { key: info.data_name, value: value, filled: false };
          //console.log(form[info.data_name])
          getSaveStateForm(form);
        }
      }
    }
    startControlArray();
    // await startControlArrayGroup();
  }

render() {
  const { data_name, label, hint, default_value, newState, groupFlag } = this.props.data;
  const { saveStep, step } = this.props.form;

  if (saveStep) {
    this.saveFormRadio({ data_name, default_value });
  }

    return(
    <View>

        <View style={styles.component_card}>

        <View style={styles.answer}>
            <Text style={styles.hint}>{hint}</Text>
        </View>

        <View style={styles.radio}>

        <RadioForm
          style={styles.radio}
          radio_props={label}
          initial={this.state.value === false ? null : this.state.value}
          buttonColor={'#4CC6D3'}
          buttonInnerColor={'#4CC6D3'}
          buttonSize={20}
          onPress={(value) => {this.setState({ value })}}
        />
        </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Radio);