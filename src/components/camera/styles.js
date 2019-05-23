import { StyleSheet, PixelRatio } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 0,
      borderBottomColor: 'black',
      paddingBottom: 10,
     },

    avatarContainer: {
      width: responsividade.LARGURA_INPUT * 0.48,
      height: responsividade.ALTURA_BUTTON,      
      flexDirection: 'row',
      // margin: 10,
      backgroundColor:"#FAAB1A",
      padding: 15,
      // distância entre foto e título do input text
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarContainer1: {
      width: responsividade.LARGURA_INPUT * 0.48,
      height: responsividade.ALTURA_BUTTON,      
      flexDirection: 'row',
      // margin: 10,
      backgroundColor: "#344955",
      padding: 15,
      // distância entre foto e título do input text
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarContainer2: {
      flexDirection: 'row',
      //backgroundColor: "white",
    },

    txt: {
      color: colors.dark,
      fontSize: 18,
      fontWeight: '200',
    },

    text_foto:{
      marginLeft: 4,
      justifyContent: 'center',
      alignItems: 'center',

    },

    text1: {
      color: 'black',
      fontSize: 18,
      fontWeight: '200',
    },

    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: '200',
    },



    //input text
    containerText: {
      marginVertical: 5,
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
      marginHorizontal: 10,
    },

    avatar: {
      width: responsividade.LARGURA_BUTTON,
      height: responsividade.LARGURA_BUTTON,
      margin: 10,
    },

    buttonsView: {
      width: responsividade.LARGURA_INPUT,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',      
      margin: responsividade.margin.mainMargin,
    },

    buttonhp: {
      //backgroundColor: 'rgba(41, 42, 41, 0.65)',
      borderWidth: 2,
      borderColor: '#4CC6D3',
      borderRadius: 40,
      height: responsividade.largura_tela < 430 ? 50 : 60,
      width: responsividade. LARGURABOX*0.85,
      marginVertical: metrics.baseMargin,
      paddingHorizontal: metrics.basePadding,
      justifyContent: 'center',
      alignItems: 'center',
 
    },

      button_texthp:{
    
        //color: 'black',
        //color: 'white',
        color: '#4CC6D3',
        fontSize: responsividade.fonts.descriptionSize,
        //fontWeight: 'bold',
        marginLeft: 5,
  
      },

      font: {
        color: '#4CC6D3',
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
