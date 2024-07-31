import { View, Text, Pressable, Animated } from 'react-native';
import React, { useRef, useEffect, useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
const {setDuration} = useContext(TimerContext);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value is 0
  const translateYAnim = useRef(new Animated.Value(50)).current; // Initial translateY value is 50

  const handlePress = (duration:number) => {
    setDuration(duration);
    router.back();
  }

  useEffect(() => {
    // Start the animation
    Animated.timing(fadeAnim, {
      toValue: 1, // End opacity value is 1
      duration: 1000,
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    Animated.timing(translateYAnim, {
      toValue: 0, // End translateY value is 0
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, translateYAnim]);

  return (
    <View className='flex-1 relative'>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Text> Test </Text>
        <Pressable
          onPress={() => router.back()}
          className='absolute top-8 left-6 z-10 '
        >
          <AntDesign name='close' size={24} color='white' />
        </Pressable>

        <View className='justify-center h-4/5'>
          <Text className='text-center font-bold text-3xl text-white mb-8'>
            Adjust your meditation duration
          </Text>

          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }}>
            <CustomButton title='30 seconds' onPress={() => handlePress(30)} containerStyles='mb-5 bg-blue-500' />
            <CustomButton title='5 minutes' onPress={() => handlePress(5*60)} containerStyles='mb-5 bg-red-500' />
            <CustomButton title='10 minutes' onPress={() => handlePress(10*60)} containerStyles='mb-5 bg-yellow-500' />
            <CustomButton title='15 minutes' onPress={() => handlePress(15*60)} containerStyles='mb-5 bg-green-500' />
          </Animated.View>
        </View>
      </AppGradient>
    </View>
  );
}

export default AdjustMeditationDuration;
