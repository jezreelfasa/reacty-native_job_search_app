import React from 'react'
import { View, Text } from 'react-native'
import styles from './about.styles'


const About = ({ info }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      
      <View style={styles.contentBox}>
        <Text syle={styles.contextText}>{info}</Text>
      </View>
   </View>
  )
}

export default About