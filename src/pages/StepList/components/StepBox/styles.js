import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsividade.LARGURACARD * 0.95,
    height: responsividade.ALTURACARD * 0.85,
    backgroundColor: "white",
    borderRadius: 4,
    margin: responsividade.margin.mainMargin / 2,
    left: 40,
    elevation: 2,
  },
  viewicon: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#111111',
  },
  titulo: {
    width: responsividade.WIDTH_MAIN * 0.7,
    color: '#000000',
    fontSize: responsividade.fonts.nameSize,
    fontWeight: '500',
    lineHeight: 21,
  },
  blueline: {
    width: 40,
    height: 4,
    backgroundColor: colors.primary,
    margin: 5,
  },
  descricao: {
    width: responsividade.WIDTH_MAIN * 0.7,
    color: '#000000',
    opacity: 0.7,
    fontSize: responsividade.fonts.descriptionSize,
    lineHeight: 19,
  },
  icon: {
    color: '#000000',
  },

  card_titulo: {
    marginTop: responsividade.margin.mainMargin,
    marginLeft: responsividade.margin.mainMargin * 0.3,
  },

  card_descricao: {
    marginTop: responsividade.margin.mainMargin * 0.4,
    marginLeft: responsividade.margin.mainMargin * 0.3,
  },

  bar: {

    width: responsividade.LARGURACARD * 0.85,
    padding: 5,
    marginTop: responsividade.margin.mainMargin,
  },

  number: {
    fontSize: 12,
  },

  number_view: {
    //backgroundColor: 'pink',
    top: responsividade.largura_tela * 0.01,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
  }

});

export default styles;
