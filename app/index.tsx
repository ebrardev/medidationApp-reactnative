import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import  beachImage from "@/assets/meditation-images/beach.webp"
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground 
      source={beachImage} 
      resizeMode="cover" 
      className='flex-1'
      >

        <LinearGradient 
        className='flex-1' 
        colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}>


          <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
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



        </LinearGradient>
      

      </ImageBackground>
     
    </View>
  )
}

export default App