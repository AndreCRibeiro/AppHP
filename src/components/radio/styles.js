import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsividade.largura_tela,
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 0,
    borderBottomColor: 'black',
  },


  buttonhp: {
    //backgroundColor: 'rgba(41, 42, 41, 0.65)',
    borderWidth: 2,
    borderColor: '#4CC6D3',
    borderRadius: 40,
    height: responsividade.largura_tela < 430 ? 50 : 60,
    width: responsividade. LARGURABOX*0.85,
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',

  },

    button_texthp:{
  
      //color: 'black',
      //color: 'white',
      color: '#4CC6D3',
      fontSize: responsividade.fonts.descriptionSize,
      //fontWeight: 'bold',
      marginLeft: 5,

    },

    font: {
      color: '#4CC6D3',
    },

    component_card: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
          width: responsividade.LARGURABOX,
    },

    answer: {
      //backgroundColor: "pink",
      width: responsividade. LARGURABOX*0.85,
      margin: 5,
      justifyContent: 'flex-start'
    },

    title: {
      //backgroundColor: "pink",
      width: responsividade. LARGURABOX*0.85,
      margin: 5,
      justifyContent: 'flex-start'

    },

    title_text: {

      fontSize: responsividade.fonts.descriptionSize,
      fontWeight: 'bold'      },

    blueline: {

      backgroundColor: "#4CC6D3",
      marginTop: 5,
      height: 3,
      width: responsividade. LARGURABOX*0.15,

    },

    radio: {
        justifyContent: 'flex-start',
        width: responsividade. LARGURABOX*0.85,

    }

});

export default styles;