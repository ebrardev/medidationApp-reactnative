import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationGallery';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AffirmationsPractice = () => {
  const params = useLocalSearchParams();
  const itemId = params.itemId;

  const [affirmation, setAffirmation] = useState<GalleryPreviewData | undefined>(undefined);
  const [sentences, setSentences] = useState<string[]>([]);

  // Shared value for animation
  const translateY = useSharedValue(100);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationData.find((a) => a.id === Number(itemId));
    

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationsArray =affirmationToStart.text.split('.'); 

        if(affirmationsArray[affirmationsArray.length-1]==="") {
            affirmationsArray.pop();
        }
        setSentences(affirmationsArray);
        translateY.value = withTiming(0, { duration: 1000 }); // Animate to 0
        return;
      }
    }
  }, [itemId]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View className='flex-1'>
      <ImageBackground 
        source={affirmation?.image}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable 
            className='absolute top-16 left-6 z-10'
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
            <View className='h-full justify-center'>
              <View className='h-4/5 justify-center'>
              {sentences.map((sentence,idx)=>(
                   <Animated.View style={animatedStyle}>
                   <Text
                        key={idx}
                    className='text-white text-3xl mb-12 font-bold text-center'>
                     {sentence}.
                   </Text>
                 </Animated.View>

              ))}
             
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationsPractice;
