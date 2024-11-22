import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from '../constants';

const styles = StyleSheet.create({
   logContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: SIZES.xxLarge,
      padding: SIZES.large,
      width: "100%",
   },
   logWrapper: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   logInput: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: SIZES.medium,
      backgroundColor: '#f9f9f9',
      marginBottom: SIZES.medium,
      color:"black"
   },
});

export default styles;
