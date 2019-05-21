import { Platform, StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFE',
  },

  bodyS: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: responsividade.largura_tela
  },

  card: {
    flex: 1,
    backgroundColor: colors.white,
    paddingRight: responsividade.largura_tela < 430 ? 80 : 100
  },

  info: {
    marginTop: responsividade.largura_tela < 430 ? 90 : 110,
  },

  name: {
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
  },

  turma: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    marginTop: 10,
  },

  blueLine: {
    backgroundColor: colors.primary,
    marginTop: 12,
    marginLeft: 1,
    height: 6,
    width: 55
  },

  novoTesteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 340,
    width: responsividade.largura_tela < 430 ? responsividade.LARGURABUTTON * 0.13 :  responsividade.LARGURABUTTON * 0.55,
    height: responsividade.largura_tela < 430 ? responsividade.ALTURABUTTON * 0.75: responsividade.largura_tela * 0.11,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },

  meusTestesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    width: responsividade.largura_tela < 430 ? responsividade.LARGURABUTTON * 0.72 :  responsividade.LARGURABUTTON * 0.55,
    height: responsividade.largura_tela < 430 ? responsividade.ALTURABUTTON * 0.72 : responsividade.largura_tela * 0.11,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: colors.primary,
  },

  button_text: {
    fontSize: 23,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
  },

  button_text2: {
    fontSize: responsividade.fonts.button,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.primary,
  },

  icon:{
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
 },

 buttons_view: {
   position: "absolute", 
   zIndex: 2,
   top: 390,
   left: 315
 },


});

export default styles;