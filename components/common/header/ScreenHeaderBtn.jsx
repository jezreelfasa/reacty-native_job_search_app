import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenHeader.styles'

const ScreenHeaderBtn = ({ handlePress, dimension, iconUrl }) => {
  
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        style={styles.btnImg(dimension)}
        resizeMode='cover'
      />
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn