import { StyleSheet, Platform} from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light2,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#784657',
  },
  iconMenu: {
    color: colors.secundary,
    alignSelf: 'flex-start',
  },

  viewIcon: {
    marginLeft: 4,
  },

  blueLine: {
    backgroundColor: colors.primary,
    marginTop: 12,
    marginLeft: 1,
    height: 6,
    width: 55
  },

  viewTitle: {
    flex: 1,
    //marginLeft: 120,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  concerto: {
    width: 15,
    height: 15,
  },
  forms: {
    marginTop: 30,
    width: responsividade.WIDTH_MAIN,

  },
  forms1: {
    marginTop: 60,
    width: responsividade.WIDTH_MAIN,
    //backgroundColor: '#784687',
 },

  forms2: {
  },
  numberType: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: responsividade.fonts.descriptionSize,
    color: colors.halfblack,
    fontWeight: 'bold',
  },
  ball: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 75,
    width: responsividade.LARGURABOLA,
    height: responsividade.LARGURABOLA,
    backgroundColor: colors.secundary,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    height: responsividade.LARGURABOLA,
    //backgroundColor: '#784657',
  },
  textType: {
    //marginLeft: responsividade.largura_tela < 430 ? responsividade.margin.mainMargin : responsividade.margin.mainMargin * 0.7,
    //marginTop: responsividade.margin.mainMargin * 0.4,
    fontSize: responsividade.fonts.nameSize*1.2,
    color: colors.halfblack,
    fontWeight: 'bold',
  },

  Picker: {
    backgroundColor: colors.white,
    //height: responsividade.ALTURA_INPUT,
    width: responsividade.largura_tela * 0.9,
    borderRadius: responsividade.BORDER_RADIUS_INPUT,
    //paddingHorizontal: 35,
    marginTop: responsividade.margin.mainMargin * 1.5,
    alignItems: 'center',
    flexDirection: 'column',
  },

  estiloPicker: {
    backgroundColor: colors.white,
    color: colors.tercery,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 340,
    width: responsividade.largura_tela < 430 ? responsividade.LARGURABUTTON * 0.72 :  responsividade.LARGURABUTTON * 0.55,
    height: responsividade.largura_tela < 430 ? responsividade.ALTURABUTTON * 0.72 : responsividade.largura_tela * 0.11,
    borderRadius: 200,
    backgroundColor: colors.primary,
  },

  buttonText: {
    fontSize: responsividade.fonts.button,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.white,
  },
  input: {
    backgroundColor: colors.transparent,
    height: responsividade.ALTURA_INPUT,
    width: responsividade.LARGURA_INPUT,
    borderBottomWidth: 1,
    marginTop: responsividade.margin.mainMargin,
    color: colors.tercery,
    fontSize: 16,
   },
   scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsividade.largura_tela,
   },

   bar: {
    margin: responsividade.padding.mainPadding,
    
   },

   box:{
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 5,
    width: responsividade.LARGURABOX*0.9,
    //height: responsividade.ALTURACARD * 0.7,
    padding: 20,
    margin: 10,
  },

  row: {
    flexDirection: 'row',
  },

  card: {
    //flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'flex-start',
    width: responsividade.LARGURABOX*0.9,
    //paddingRight: responsividade.largura_tela < 430 ? 260 : 280,
  },

  ref: {
    marginHorizontal: 5,
  }

});

export default styles;