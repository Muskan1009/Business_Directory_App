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

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email.trim()) {
          router.replace('/account/profile');
        } else {
          Alert.alert('Login Failed', 'Email not found. Please register.');
        }
      } else {
        Alert.alert('No account', 'Please register first.');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not login. Try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="bg-[#1077BC] h-60 rounded-b-3xl items-center justify-center">
        <Text className="text-2xl font-bold text-white">Login</Text>
        <Text className="text-white text-sm mt-1">Welcome back to Punjabi Pages</Text>
      </View>

      <View className="px-6 py-10">
        <TextInput
          className="bg-[#F5F5F5] px-4 py-3 rounded-full mb-4"
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          className="bg-[#FEDA15] py-4 rounded-full items-center mb-4"
          onPress={handleLogin}
        >
          <Text className="text-black font-bold text-lg">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/account/register')}>
          <Text className="text-center text-[#1077BC] mt-4">
            Don’t have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
