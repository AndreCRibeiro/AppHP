import { StyleSheet, Platform } from "react-native";
import { colors, metrics, responsividade } from "../../styles";

const styles = StyleSheet.create({
  avatar: {
    width: responsividade.LARGURABUTTON * 0.8,
    height: responsividade.LARGURA_BUTTON * 0.9,
    margin: 10
  },

  parale: {
    backgroundColor: "transparent",
    height: responsividade.ALTURA_BUTTON,
    width: responsividade.LARGURA_INPUT * 0.7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60
  },

  buttonhp: {
    //backgroundColor: 'rgba(41, 42, 41, 0.65)',
    borderWidth: 2,
    borderColor: "#4CC6D3",
    borderRadius: 40,
    height: responsividade.largura_tela < 430 ? 50 : 60,
    width: responsividade.LARGURABOX * 0.85,
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    justifyContent: "center",
    alignItems: "center"
  },

  button_texthp: {
    color: "#4CC6D3",
    fontSize: responsividade.fonts.descriptionSize,
    marginLeft: 5
  },

  answer: {
    //backgroundColor: "pink",
    width: responsividade.LARGURABOX * 0.85,
    margin: 5,
    justifyContent: "flex-start"
  },

  hint: {
    fontSize: responsividade.fonts.descriptionSize * 0.9,
    fontWeight: "bold",
    color: "black",
    opacity: 0.7,
    paddingVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: Platform.OS === "ios" ? 35 : 0
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39579A"
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: "#39579A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});

export default styles;
