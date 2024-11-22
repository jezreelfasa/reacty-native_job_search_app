//This page works with the search/[id].js folder;

import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.styles'
import { useState } from 'react'


const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const[activeJobType, setActiveJobType] = useState("Full-time")
  
  return (
     <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello and welcome on board!</Text>
        <Text style={styles.welcomeMessage}>We'll help you find your dream job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='what are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
          
        </TouchableOpacity>
        
      </View> 
      <View style={styles.tabContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`);
              }}>
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{columnGap:SIZES.small}}
          />
        </View>
   </View>
  )
}

export default Welcome