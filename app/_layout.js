import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
   initialRouteName: 'home'
   
}

const Layout = () => {
   const [fontsLoaded] = useFonts({
      DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
      DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
      
   })
   if (!fontsLoaded) {
   return null
}
  return (
     <Stack>
     
        <Stack.Screen name='login' />
        <Stack.Screen name='signup' />
        
   </Stack>
  )
}

export default Layout
