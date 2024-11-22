import { View, Text, TouchableOpacity, Image, Linking,Alert,Share } from 'react-native'
import { COLORS, icons } from '../../../constants'
import styles from './footer.styles'
import { useState } from 'react'
import { Feather } from 'expo-vector-icons'

const Footer = ({ url }) => {
  const [isClicked, setIsClicked] = useState(false)
  
  
  const handleIsClicked = async () => {
   setIsClicked(!isClicked)
  } 
  
//handle share here

  const handleShare = async () => {
    try {
      const jobTitle = 'Amazing Job Opportunity'; // Replace with actual job title if available
      const jobUrl = url || `https://careers.google.com/jobs/results`; // Use provided URL or fallback URL

      const result = await Share.share({
        message: `Check out this job: ${jobTitle}! Apply here: ${jobUrl}`,
      });

      if (result.action === Share.sharedAction) {
        console.log('Content shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while sharing.');
      console.error('Error sharing content:', error);
    }
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.likeBtn, isClicked && styles.active]} onPress={handleIsClicked}>
        <Image source={icons.heartOutline}
          style={[styles.likeBtnImage, isClicked && styles.art]}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn} 
        onPress={() => {
        Linking.openURL(url)
        }}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShare}>
        <Feather 
              name="share-2" 
              size={30} 
          color="#F37453"
          paddingLeft="10"
            />
      </TouchableOpacity>
    </View>
    
  )
}

export default Footer