import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../../constants/data';
import { useRouter } from 'expo-router';

export default function Categories() {

  const router = useRouter();

  const handleCategoryPress = (category) => {

    router.push(`/categories/${category.id}`);

  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCategoryPress(item)}
      className="items-center justify-center m-3"
    >
      <View className="bg-[#FCE130] w-16 h-16 rounded-lg items-center justify-center shadow">
        <Image source={item.icon} className="w-8 h-8" resizeMode="contain" />
      </View>
      <Text className="text-black text-xs mt-2">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Top Section */}
      <View className="bg-[#1077BC] h-72 relative rounded-b-2xl">
        <View className="absolute inset-0 px-6 py-12">
          <Image source={require('../../assets/logo.png')} className="w-12 h-12 mb-2" />
          <Text className="text-white text-lg font-bold mt-4">Good morning Elda</Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="location" size={16} color="#fff" />
            <Text className="text-white ml-2 text-xs">141 Sydney Rd, Melbourne, Victoria</Text>
          </View>
          <View className="mt-4 flex-row items-center bg-white rounded-xl px-4 h-14">
            <Ionicons name="search" size={20} color="#1077BC" />
            <TextInput placeholder="Search for category" className="ml-2 flex-1 text-black" />
          </View>
        </View>
      </View>

      {/* Categories */}
      <View className="px-6 pt-6 pb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-black text-lg font-bold">Categories</Text>
        </View>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          renderItem={renderCategoryItem}
        />
      </View>
    </View>
  );
}
