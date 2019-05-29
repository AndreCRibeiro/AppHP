import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0,
        borderBottomColor: 'black',
        //paddingBottom: 10,
  },
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
    height: responsividade.ALTURA_INPUT,
    width: responsividade. LARGURABOX*0.85,
    borderWidth: 1,
    borderColor: '#848484',
    borderRadius: responsividade.BORDER_RADIUS_INPUT,
    paddingLeft: 20,
    fontSize: 16,
    marginVertical: 10,
  },

  hint: {
    fontSize: responsividade.fonts.descriptionSize * 0.9,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.3,
    paddingVertical: 10,
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