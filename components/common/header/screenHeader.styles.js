import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../../constants'

const styles = StyleSheet.create({
   btnContainer: {
      marginTop:5,
      width: 30,
      height: 30,
      borderRadius: SIZES.small / 1.25,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      
   },
   btnImg: (dimension) => ({
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
      top:0
   })
})

export default styles 