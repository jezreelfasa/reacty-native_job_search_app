import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/search'
import { SIZES,COLORS } from '../constants';


const ProfileScreen = () => {
  const [image, setImage] = useState(null);

  // Request permission on mount
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'We need permission to access your media library.');
      }
    };

    requestPermissions();
  }, []);

  // Pick an image from the media library
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);  // Set selected image URI from the result
      } else {
        Alert.alert('No image selected');
      }
    } catch (error) {
      Alert.alert('Error', error.message);  // Show error if picker fails
    }
  };

  return (
    
    <View style={styles.centImage}>
     
      {image && <Image source={{ uri: image }} style={{ width: 70, height: 70, borderRadius:5,}} />}
      <TouchableOpacity style={styles.noo}onPress={pickImage}>
        <Text style={styles.up}>Upload image</Text>
      </TouchableOpacity>
      </View>
    
  );
};

export default ProfileScreen;
