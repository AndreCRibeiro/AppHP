import { StyleSheet } from 'react-native';
import { colors, metrics,responsividade } from '../../styles';

const styles = StyleSheet.create({

   Name: {
    width: responsividade.LARGURABOX,
    height: 30,
    backgroundColor: colors.transparent,
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
   },

  input: {
     backgroundColor: 'white',
     height: responsividade.ALTURABOX,
     borderRadius: 4,
     paddingLeft: 20,
     fontSize: 16,
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
  },
 picker:{
  width: 10
 },
  button_text:{

    //color: 'black',
    //color: 'white',
    color: "#344955",
    fontSize: responsividade.fonts.descriptionSize,
    //fontWeight: 'bold',
    marginLeft: 5,

  },

  hint:{

    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.3,
    paddingVertical: 10,

  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  },

  buttonhp: {
    //backgroundColor: 'rgba(41, 42, 41, 0.65)',
    borderWidth: 2,
    borderColor: '#4CC6D3',
    borderRadius: 40,
    height: responsividade.largura_tela < 430 ? 50 : 60,
    width: responsividade. LARGURABOX*0.85,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,

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