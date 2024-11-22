//This page works with the search/[id].js folder;

import { View, Text, Alert, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { logOut } from '../services/authService'
import { useRouter,Stack} from 'expo-router'
import { COLORS,icons, SIZES } from '../constants'
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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
            dimension='60%'/>
          ),
       
          headerTitle:""
          
        }}
      
      />
        <View style={styles.upload}>
        <Text style={styles.centImage}><ProfileScreen /></Text>
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
       <View style={styles.containerSign}>
      <TouchableOpacity style={styles.logOut} 
        onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log out</Text>
        </TouchableOpacity>
        </View>
         </SafeAreaView>
  )
}

export default Home