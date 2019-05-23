

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, ScrollView, Picker} from 'react-native';
import styles from './styles';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    
    {label: 'a', value: 0 },
    {label: 'b', value: 1 },
    {label: 'c', value: 2 },
    {label: 'd', value: 3 },
    {label: 'e', value: 4 },

  ];

class Radio extends Component {



render() {
    return(
    <View>

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

        <View style={styles.radio}>

        <RadioForm
          style={styles.radio}
          radio_props={radio_props}
          initial={0}
          buttonColor={'#4CC6D3'}
          buttonInnerColor={'#4CC6D3'}
          buttonSize={20}
          onPress={(value) => {this.setState({ value:value })}}
        />



        </View>


        </View>

        

    </View>
    );
}
}

export default Radio; 