import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, ScrollView, Picker} from 'react-native';
import styles from './styles';
import { CheckBox } from 'react-native-elements';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as GroupActions } from '../../store/ducks/group';

var arrayChecks = [
    {
        title:'Opção A',
        key: 0,
    },
    {
        title:'Opção B',
        key: 1,
    }
]

class Check extends Component {

    state = { }

    componentWillMount() {
        const { form, data, group, index } = this.props;
        data.default_value.map(item => {
            this.setState({ [item.key]: false })
        })
        for (var key in form.step) {
            if (key === data.data_name) {
              if (form.step[key].filled === true) {
                this.setState( form.step[key].value );
              }
            }
        }
    }

    saveFormCheck = info => {
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
        if (this.state) {
            for (var key in form.step) {
              if (key === info.data_name) {
                const form = {};
                form[info.data_name] = { key: info.data_name, value: this.state, filled: true };
                getSaveStateForm(form);
            }
          }
        } else {
          for (var key in form.step) {
            if (key === info.data_name) {
              const form = {};
              form[info.data_name] = { key: info.data_name, value: this.state, filled: false };
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
        this.saveFormCheck({ data_name, default_value });
    }
    return(
    <View>
        <View style={styles.answer}>
            <Text style={styles.answer_text}>{this.props.label}</Text>
        </View>

        <View style={styles.checks}>
        {
            default_value.map(item => {
                return (
                    <CheckBox
                        title={item.title}
                        checked={this.state[item.key]}
                        onPress={() => this.setState({ [item.key]: !this.state[item.key] })} 
                    />
                )
            })
        }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Check);