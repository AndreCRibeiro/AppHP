import { StyleSheet } from 'react-native';
import { colors, metrics, responsividade } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDF0F2',  
        paddingBottom: 10,      
    },
    salvarbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 40,
      width: responsividade.LARGURA_BUTTON,
      height: responsividade.LARGURA_BUTTON,
      borderRadius: 100,
      backgroundColor: '#F9AA33',
    },

    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 28,
    },
    numberType: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: responsividade.fonts.descriptionSize,
      color: 'black',
      fontWeight: 'bold',
      width: responsividade.LARGURABOLA * 0.8,
      textAlign: 'center',
      // backgroundColor: '#8484'
    },
    ball: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 30,
      width: responsividade.LARGURABOLA,
      height: responsividade.LARGURABOLA,
      backgroundColor: '#F9AA33',
      margin: 15,
      marginLeft: responsividade.margin.mainMargin,
      flexDirection: 'row',
    },

    textType: {
      fontSize: responsividade.fonts.descriptionSize,
      color: 'black',
      fontWeight: 'bold',
    },

    coluna:{
      flexDirection: 'column',
     
    },

    linha: {
      flexDirection: 'row',
      alignItems: 'center',
    // distância entre componentes
      // marginTop: 30,
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
            margin: 5,
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