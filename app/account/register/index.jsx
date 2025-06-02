import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Validation Error', 'Please enter both name and email.');
      return;
    }

    try {
      const userData = { name, email };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Success', 'You are registered!');
      router.replace('/account/profile');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong during registration.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="bg-[#1077BC] h-60 rounded-b-3xl items-center justify-center">
        <Text className="text-2xl font-bold text-white">Register</Text>
        <Text className="text-white text-sm mt-1">Create your Punjabi Pages account</Text>
      </View>

      <View className="px-6 py-10">
        <TextInput
          className="bg-[#F5F5F5] px-4 py-3 rounded-full mb-4"
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="bg-[#F5F5F5] px-4 py-3 rounded-full mb-6"
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          className="bg-[#FEDA15] py-4 rounded-full items-center mb-4"
          onPress={handleRegister}
        >
          <Text className="text-black font-bold text-lg">Register Now</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/account/login')}>
          <Text className="text-center text-[#1077BC] mt-4">
            Already registered? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
