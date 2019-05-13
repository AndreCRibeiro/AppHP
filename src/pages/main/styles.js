import { Platform, StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  bodyS: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  card: {
    flex: 1,
    marginTop: 80,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 65,
    backgroundColor: colors.white,
    zIndex: 2
  },

  info: {
    marginTop: 65,
    marginLeft: 25,
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
    width: responsividade.largura_tela < 430 ? responsividade.LARGURABUTTON * 0.72 :  responsividade.LARGURABUTTON * 0.55,
    height: responsividade.largura_tela < 430 ? responsividade.ALTURABUTTON * 0.72 : responsividade.largura_tela * 0.11,
    borderRadius: 200,
    backgroundColor: colors.primary,
  },

  meusTestesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    width: responsividade.largura_tela < 430 ? responsividade.LARGURABUTTON * 0.72 :  responsividade.LARGURABUTTON * 0.55,
    height: responsividade.largura_tela < 430 ? responsividade.ALTURABUTTON * 0.72 : responsividade.largura_tela * 0.11,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.primary,
  },

  button_text: {
    fontSize: responsividade.fonts.button,
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
   //backgroundColor: 'red',"
   flexDirection:  responsividade.largura_tela < 430 ? "column" : "row",
   alignItems: "center",
   width: responsividade.largura_tela * 0.9,
   justifyContent: 'space-around',
   marginBottom: responsividade.margin.secondMargin,
 },


});

export default styles;