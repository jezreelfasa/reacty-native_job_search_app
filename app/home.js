//This page works with the search/[id].js folder;

import { View, Text, Alert, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { logOut } from '../services/authService'
import { useRouter,Stack} from 'expo-router'
import { COLORS,icons, SIZES, SHADOWS} from '../constants'
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs } from '../components'
import { useState } from 'react'
import ProfileScreen from './profilescreen'
import styles from '../styles/search'


const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleLogOut = async () => {
    try {
      await logOut()
      Alert.alert("Signed out successfully")
      router.push(`/login`)
    } catch (error) {
      Alert.alert("An error occured, please try again", error.message);
    }

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <StatusBar backgroundColor={COLORS.lightWhite}/>
      <Stack.Screen 
        options={{
          
          headerShown: false,
        }}
      />
      <View style={{backgroundColor:COLORS.lightWhite, ...SHADOWS.medium, padding:10, height:'8%', flexDirection:"row", justifyContent:"space-between"}}>
        <TouchableOpacity>
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
        </TouchableOpacity>
         <View style={{marginTop:10}}>
        <Text ><ProfileScreen /></Text>
      </View>
       
      </View>
    

        
      <ScrollView showsVerticalScrollIndicator={false}>
        <View 
          style={{
            flex: 1,
            padding:SIZES.medium
          }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
         <Popularjobs />
          <Nearbyjobs />
      
      
          </View>
      </ScrollView>
       <View>
      <TouchableOpacity style={styles.logOut} 
        onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log out</Text>
        </TouchableOpacity>
        </View>
         </SafeAreaView>
  )
}

export default Home