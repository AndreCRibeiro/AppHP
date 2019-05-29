import { StyleSheet } from 'react-native';
import { metrics, colors, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0,
        borderBottomColor: 'black',
        paddingBottom: 10,
  },
  titulo: {
    width: responsividade.LARGURABOX,
    height: 22,
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 15,
  },
  direcao: {
    flexDirection: 'row',
  },
  datecontainer: {
    width: (responsividade.LARGURABOX*0.46),
    height:  (responsividade.ALTURABOX*0.9),
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  date: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
  },

  square: {
    backgroundColor: "#FAAB1A",
    height: responsividade.ALTURA_BUTTON,
    width: responsividade.LARGURA_INPUT * 0.3,    
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,


  },

  parale: {
    backgroundColor: "transparent",
    height: responsividade.ALTURA_BUTTON,
    width: responsividade.LARGURA_INPUT * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  button: {
    //backgroundColor: "#344955",
    //backgroundColor: "#FAAB1A",
    backgroundColor: 'white',
    elevation: 1,
    //borderRadius: 50,
    borderRadius: 60,
    height: responsividade.ALTURA_BUTTON,
    width: responsividade.LARGURA_INPUT,    
    margin: 10,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 1,
    right: responsividade.largura_tela*0.04
  },
 picker:{
  width: 10
 },
  button_text:{

    //color: 'black',
    //color: 'white',
    color: "#344955",
    fontSize: responsividade.fonts.descriptionSize,
    fontWeight: 'bold',
    marginLeft: 5,

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

 
});

export default styles;