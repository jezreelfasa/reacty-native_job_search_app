import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../../constants'

const styles = StyleSheet.create({
   btnContainer: {
      width: 40,
      height: 40,
      borderRadius: SIZES.small / 1.25,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      
   },
   btnImg: (dimension) => ({
      width: dimension,
      height: dimension,
      borderRadius:SIZES.small/1.25
   })
})

export default styles 