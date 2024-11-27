import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native'
import { useRouter, Stack, useGlobalSearchParams } from 'expo-router'
import axios from 'axios'
import { COLORS, icons, SIZES } from '../../constants'
import { NearbyJobCard } from '../../components'
import styles from '../../styles/search'



const JobSearch = () => {
  const router = useRouter()
  const params = useGlobalSearchParams()
  
  const [searchResult, setSearchResult] = useState([])
  const [searchLoader, setSearchLoader] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [page, setPage] = useState(1)

  const handleSearch = async () => {
    setSearchLoader(true)
    setSearchResult([])
  
    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
      
        headers: {
          'x-rapidapi-key': '32c20277dcmshd8c16b8a36a964ap1e48cajsnc1ba1daf33d4',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
          query: params.id,
          page: page.toString()
        },
      };
      const response = await axios.request(options)
      setSearchResult(response.data.data)
    
    } catch (error) {
      console.log(error)
      setSearchError(error)
    } finally {
      setSearchLoader(false)
    };
  };

  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1)
      handleSearch()
    } else if (direction === 'right') {
      setPage(page + 1)
      handleSearch()
    };
  };

  useEffect(() => {
    handleSearch()
  }, [])
  

  //handlesharehere
  const handleShare = async () => {
  try {
    const jobTitle = data[0]?.job_title || 'Amazing Job Opportunity'; // Fallback if title is missing
    const jobUrl = data[0]?.job_apply_link || `https://careers.google.com/jobs/results`; // Fallback to default URL

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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen 
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: true,
            
            headerTitle: ""
            
        
          }}
          
        />
        <FlatList 
          data={searchResult}
          renderItem={({ item }) => (
            <NearbyJobCard
              job={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)} />
            
              
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{ padding: SIZES.medium, columnGap: SIZES.medium }}
          ListHeaderComponent={() => (
            <>
              <View style={styles.container}>
                <Text style={styles.searchTitle}>{params.id}</Text>
                <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
              </View>
              <View style={styles.loaderContainer}>
                {searchLoader ? (
                  <ActivityIndicator size='large' color={COLORS.primary}/>
                ) : searchError && (
                    <Text>Oops something went wrong</Text>
                )}
              </View>
            </>
          )}

          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination('left')}>
                <Image 
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                <Text style={styles.paginationText}>{page}</Text>
              </View>
              
              <TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination('right')}>
                <Image  
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    )
  }

export default JobSearch