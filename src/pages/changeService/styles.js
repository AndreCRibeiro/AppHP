import { StyleSheet } from 'react-native';
import { colors, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.lighter,
  },
  picker: {
    width: responsividade.LARGURABUTTON,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  button: {
    width: responsividade.LARGURABUTTON,
    height: responsividade.ALTURABUTTON,
    backgroundColor: colors.secundary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 40,
  },
  title: {
    fontSize: 16,
    color: colors.lighter,
  },
});

export default styles;