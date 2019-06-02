import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  image: {
    width: responsividade.largura_tela,
    height: responsividade.altura_tela * 0.4,
    opacity: 0.5
  },

  viewInputs: {
    backgroundColor: colors.white,
    width: responsividade.largura_tela,
    height: responsividade.altura_tela * 0.6,
    elevation: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },

  logoview: {

    width: responsividade.largura_tela,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },

  logo: {

    fontSize: 25,

  },

  ed: {
    fontSize: 12,
  },

  entrarButton: {
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 40,
    height: responsividade.largura_tela < 430 ? 45 : 60,
    width: responsividade.largura_tela < 430 ? responsividade.largura_tela * 0.7 : responsividade.largura_tela * 0.55,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cadastrarButton: {
    height: 50,
    marginTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
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

   buttonText: {
     color: colors.primary,
     fontWeight: 'bold',
     fontSize: responsividade.largura_tela < 430 ? 14 : 20,
   },
});

export default styles;
