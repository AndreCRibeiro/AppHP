import { Platform, StyleSheet } from 'react-native';
import { colors, metric, responsividade } from '../../styles';

const styles = StyleSheet.create({
  header: {
    padding: responsividade.padding.mainPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 120 : responsividade.ALTURA_HEADER,
    //height: 80,
    //position: 'absolute',
    zIndex: 2,
    paddingTop: Platform.OS === 'ios' ? 45 : 25,
    backgroundColor: colors.secundary,
    bottom: Platform.OS === 'ios' ? 25 : 0,
  },

  iconMenu: {
    color: colors.white,
    bottom: responsividade.largura_tela < 430 ? 9 : 11
  },

  grades: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: responsividade.largura_tela < 430 ? 3 : 5
  },

  nameIcon: {
    color: colors.white,
    fontSize: responsividade.largura_tela < 430 ? 18 : 20,
    left: responsividade.largura_tela < 430 ? 8 : 10,
    bottom: responsividade.largura_tela < 430 ? 3 : 5
  },

  iconExit: {
    color: colors.white,
  },

  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',    //marginLeft: 4,
  },

  viewTitle: {
    flex: 1,
  },

  headerTitle: {
    color: colors.white,
    fontSize: responsividade.fonts.titleSize,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },

  concerto: {
    color: "#344955",
    width: 20,
    height: 20,
  }
});

export default styles; 