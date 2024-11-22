import { View, Text, Alert, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { router,Stack } from 'expo-router'
import { signUp} from '../services/authService'
import { useState } from 'react'
import styles from '../logs/styles'
import {COLORS,SIZES,SHADOWS} from '../constants'
const SignUp= () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
   const handleSignUp= async () => {
      try {
         await signUp(email,password)
         Alert.alert("Successful!", "registration failed")
        router.push('/home')

      } catch (error) {
         Alert.alert("signUpfalied!", error.message)
      }
   }
      
   return (
      <SafeAreaView>
      
         <Stack.Screen 
            options={{
               headerStyle:{backgroundColor:"#F37453"},
               headerBackVisible: true,
               headerTitleAlign: "center",
               headerTitle: "Register",
               headerTitleStyle: "#F37453",
               headerTintColor: "white",
               
               
            }}
         />
         <View style={styles.logContainer}>
            <View style={styles.logWrapper}>
            
            <TextInput 
               value={email}
               placeholder='Enter your email address'
                  onChangeText={setEmail}
                   style={styles.logInput}
            />

            <TextInput
               value={password}
               placeholder='Enter your password'
               onChangeText={setPassword}
                  secureTextEntry
                   style={styles.logInput}
            />
         </View>
         <TouchableOpacity onPress={handleSignUp}>
            <Text style={{ textAlign: "center", color: COLORS.white, fontSize:SIZES.medium, fontFamily:"DMBold", borderColor:COLORS.gray,...SHADOWS.medium,padding:SIZES.small, borderRadius:100, borderWidth:1, backgroundColor:COLORS.primary, marginTop:10 }}>Sign up now!</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default SignUp