import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
  },

  first:{
    flex: 1,
  },

  step:{
    color: 'white',
    fontSize : 58,
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  indicadorContainer: {
    backgroundColor: colors.white,
    paddingBottom: 40,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  image: {
    marginBottom: metrics.baseMargin * 6,
    alignSelf: 'center',
    height: 210,
    width: 170,
    padding: metrics.basePadding,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.white,
  },

  descript: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin / 2,
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    borderColor: colors.regular,
    borderWidth: 1,     
    marginTop: metrics.baseMargin * 2,
    height: responsividade.largura_tela < 430 ? 40 : 60,
    width: responsividade.largura_tela < 430 ? responsividade.largura_tela * 0.75 : responsividade.largura_tela * 0.80,
    paddingHorizontal: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
   },

  testebutton: {
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 40,
    height: responsividade.largura_tela < 430 ? 45 : 60,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: responsividade.largura_tela < 430 ? 16 : 20,
  },

  estiloPicker: {
    //height: 50,
    //paddingHorizontal: metric.basePadding,
    flex: 7,
  },

  forms2: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin / 3,
    backgroundColor: colors.whiteTransparent
  },

  icon:{
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
