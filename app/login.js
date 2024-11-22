import { View, Text, Alert, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { router, Stack } from 'expo-router';
import { logIn } from '../services/authService';
import { useState } from 'react';
import { COLORS, SHADOWS, SIZES } from '../constants';
import styles from '../logs/styles';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const handleLogin = async () => {
      try {
         await logIn(email, password);
         Alert.alert("Successful!", "Logged in successfully");
         router.push('/home');
      } catch (error) {
         Alert.alert("Login failed!", error?.message || 'An unknown error occurred.');
      }
   };
      
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
         <Stack.Screen 
            options={{
               headerStyle: { backgroundColor: "#F37453" },
               headerBackVisible: false,
               headerTitleAlign: "center",
               headerTitle: "Login",
               headerTitleStyle: { color: "#eee7e5" },
               headerTintColor: "white",
            }}
         />
         <View style={styles.logContainer}>
            <View style={styles.logWrapper}>
               <TextInput  
                  value={email}
                  placeholder="Enter your email address"
                  onChangeText={setEmail}
                  style={styles.logInput}
               />
               <TextInput
                  value={password}
                  placeholder="Enter your password"
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.logInput}
               />
            </View>
            <TouchableOpacity onPress={handleLogin} style={{ padding: 10, backgroundColor: "#F37453", borderRadius: 10, marginTop: 10 }}>
               <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
            <Text style={{marginTop:10,color:COLORS.primary, fontFamily:"DMBold"}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/signup')} style={{ marginTop: 10 }}>
               <Text style={{ textAlign: "center", color: COLORS.white, fontSize:SIZES.medium, fontFamily:"DMBold", borderColor:COLORS.gray,...SHADOWS.medium,padding:SIZES.small, borderRadius:100, borderWidth:1, backgroundColor:COLORS.primary }}>Sign up now!</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

export default Login;
