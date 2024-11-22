import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: SIZES.medium,
      borderRadius: SIZES.small,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#FFF",
      ...SHADOWS.medium,
      shadowColor: COLORS.white
      
   },
   logoContainer: {
      width: 50,
      height: 50,
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: SIZES.medium
   },
   logoImage: {
      height: "100%",
      width: "85%"
      
   },

   textContainer: {
      flex: 1,
      marginHorizontal: SIZES.medium,
      
   },

   jobName: {
      fontSize: SIZES.medium,
      fontFamily: "DMBold",
      color: COLORS.primary
      
   },

   jobType: {
      fontSize: SIZES.medium -3,
      fontFamily: "DMRegular",
      color: COLORS.gray,
      textTransform: "capitalize",
      marginTop: 3,
      flexDirection:"row"
    
   }
})


export default styles