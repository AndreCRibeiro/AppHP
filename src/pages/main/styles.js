import { Platform, StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';
import { padding } from '../../styles/responsividade';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FAFBFE',
  },

  bodyS: {
    flex: 1,
    //justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'green',
    width: responsividade.largura_tela
  },

  teste: {
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },

  textoNaoCadastrado: {
    color: colors.grey,
    fontSize: 16,
  },

  card: {
    //flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingRight: responsividade.largura_tela < 430 ? 260 : 280,
  },

  info: {
    marginTop: responsividade.largura_tela < 430 ? 90 : 110,
    width: responsividade.largura_tela,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 220
    //backgroundColor: 'red'
  },

  name: {
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
  },

  box:{
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 5,
    width: responsividade.LARGURABOX*0.9,
    height: responsividade.ALTURACARD * 0.7,
    padding: 20,
    margin: 10,
  },

  row: {
    flexDirection: "row",
  },

  status1: {     
    height: 20,
    fontSize:  responsividade.fonts.nameSize,
    fontWeight: '500',
    lineHeight: 21,
    // opacity: 0.6,
    marginTop: responsividade.margin.mainMargin,
  }, 

  ref: {
    height: 20,
    fontSize:  responsividade.fonts.nameSize,
    fontWeight: '300',
    lineHeight: 21,
    marginTop: responsividade.margin.mainMargin
  },

  statusEnviado:{
    height: 20,
    color: 'green',
    fontSize:  responsividade.fonts.nameSize * 0.8,
    fontWeight: '400',
    lineHeight: 21,
    opacity: 0.6,
    marginTop: responsividade.margin.mainMargin
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
    width: 58
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
   left: 330
 },

 buttons_view2: {
  position: "absolute", 
  zIndex: 2,
  top: 330,
  left: 330
},

titlee: {
  justifyContent: 'flex-start',
  width: responsividade.LARGURABOX*0.9,

}


});

export default styles;