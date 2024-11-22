import { useState, useCallback} from 'react'
import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator} from 'react-native'
import { COLORS, SIZES } from '../../constants'
import {Company,JobAbout,JobFooter,JobTabs,Specifics } from '../../components'
import { Stack, useGlobalSearchParams } from 'expo-router'
import useFetch from '../../hook/useFetch'


const tabs = ["About", "Qualifications", "Responsibilities"]

const JobDetails = () => {
  const params = useGlobalSearchParams()

  const { data, error, isLoading, refetch } = useFetch("job-details", {
    job_id: params.id,
    
  })

  const [activeTab, setActiveTab] = useState(tabs[0])
  const [refreshing, setRefreshing] = useState(false)
  
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }, [])
  

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0]?.job_highlights?.Qualifications ?? ['N/A']} />
          
        )
      case "About":
        return (
          
          <JobAbout
            info={data[0]?.job_description ?? "No information found"} />
        )
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']} />
        )
      default:
        return null
    }
  };
  


   return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
       <Stack.Screen
         options={{
           headerStyle: { backgroundColor: COLORS.lightWhite },
            zIndex: -2,
          headerShadowVisible: false,
           headerBackVisible: true,
           
          
           headerTitle: "",
          
        }}
    
       />
       
       <>
         <ScrollView showsVerticalScrollIndicator={false}
           refreshControl={
           <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
         }>
           {isLoading ? (
             <ActivityIndicator size='large' color={COLORS.primary}/>
           ) : error ? (
              <Text>Oops something went wrong</Text>
             ) : data.length === 0 ? (
                 <Text>Sorry, no data was found!</Text>
               ) : (
                   <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                     <Company
                       companyLogo={data[0]?.employer_logo}
                       jobTitle={data[0]?.job_title}
                       companyName={data[0]?.employer_name}
                       location={data[0]?.job_country}
                     />

                     <JobTabs 
                       tabs={tabs}
                       activeTab={activeTab}
                       setActiveTab={setActiveTab}
                     />
                     {displayTabContent()}
                   </View>
           )}
         </ScrollView>
       <JobFooter url={data[0]?.job_apply_link??`https://careers.google.com/jobs/results`}/>
       </>

    </SafeAreaView>
  );
};
  



export default JobDetails