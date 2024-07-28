import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import  beachImage from "@/assets/meditation-images/beach.webp"
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import AppGradient from '@/components/AppGradient'

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground 
      source={beachImage} 
      resizeMode="cover" 
      className='flex-1'
      >
  
       <AppGradient colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}>
      


          <SafeAreaView className='flex-1 px-1 justify-between'>
            <StatusBar style='light'/>
       <View>
       <Text className='text-center text-white font-bold text-4xl'>Medidation App</Text>
       <Text className=' text-center text-white text-regular  text-2xl mt-3'>Meditation for everyone</Text>
       </View>
       <View>
         <CustomButton 
           onPress={()=>router.push("/nature-meditate")}
            title='Get Started'
         />
       </View>
          </SafeAreaView>





        </AppGradient>
      

      </ImageBackground>
     
    </View>
  )
}

export default App