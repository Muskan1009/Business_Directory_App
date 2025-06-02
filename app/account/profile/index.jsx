import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        router.replace('/account/register');
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/account/register');
  };

  const handleAddBusiness = () => {
    router.push('/add-listings');
  };

  if (!user) return null;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="bg-[#1077BC] h-60 rounded-b-3xl items-center justify-center">
        <Text className="text-2xl font-bold text-white">My Profile</Text>
        <Text className="text-white text-sm mt-1">Welcome to Punjabi Pages</Text>
      </View>

      <View className="px-6 py-10">
        <Text className="text-lg mb-2 font-bold text-[#1077BC]">Name:</Text>
        <Text className="text-base mb-4">{user.name}</Text>

        <Text className="text-lg mb-2 font-bold text-[#1077BC]">Email:</Text>
        <Text className="text-base mb-8">{user.email}</Text>

        <TouchableOpacity
          className="bg-[#FEDA15] py-4 rounded-full items-center mb-4"
          onPress={handleAddBusiness}
        >
          <Text className="text-black font-bold text-lg">Add Your Business</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 py-4 rounded-full items-center"
          onPress={handleLogout}
        >
          <Text className="text-white font-bold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
