import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Food', icon: require('../assets/icons/food.png') },
  { id: '2', name: 'Health', icon: require('../assets/icons/health.png') },
  { id: '3', name: 'Clothing', icon: require('../assets/icons/clothing.png') },
  { id: '4', name: 'Beauty', icon: require('../assets/icons/beauty.png') },
];

const listings = [
  { id: '1', name: 'The Tax Factor', tag: 'Verified', image: require('../assets/images/tax.png') },
  { id: '2', name: 'Chemist Hub', tag: 'Verified', image: require('../assets/images/chemist.png') },
];

const recentListings = [
  { id: '1', name: 'Glam Up', category: 'Beauty', image: require('../assets/images/glamup.png') },
  { id: '2', name: 'Fashion Fab', category: 'Clothing', image: require('../assets/images/fashion.png') },
  { id: '3', name: 'ABC Automobile', category: 'Automotive', image: require('../assets/images/abcauto.png') },
  { id: '4', name: 'XYZ Travels', category: 'Travel', image: require('../assets/images/travel.png') },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Top Section */}
      <View className="bg-[#1077BC] h-72 relative">
        <Image source={require('../assets/images/Header.png')} className="w-full h-full rounded-b-3xl brightness-75" />
        <View className="absolute inset-0 px-6 py-12">
          <Image source={require('../assets/logo.png')} className="w-12 h-12 mb-2" />
          <Text className="text-white text-lg font-bold mt-4">Good morning Elda</Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="location" size={16} color="#fff" />
            <Text className="text-white ml-2 text-xs">141 Sydney Rd, Melbourne, Victoria</Text>
          </View>
          <View className="mt-4 flex-row items-center bg-white rounded-xl px-4 h-14">
            <Ionicons name="search" size={20} color="#1077BC" />
            <TextInput placeholder="What are you looking for?" className="ml-2 flex-1 text-black" />
          </View>
        </View>
      </View>

      {/* Categories */}

      <View className="bg-[#1077BC] rounded-b-3xl px-6 pt-5 pb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-lg font-bold">Categories</Text>
          <TouchableOpacity>
            <Text className="text-white font-semibold">View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="items-center justify-center m-3">
              <View className="bg-white w-16 h-16 rounded-lg items-center justify-center shadow">
                <Image source={item.icon} className="w-8 h-8" resizeMode="contain" />
              </View>
              <Text className="text-white text-xs mt-2">{item.name}</Text>
            </View>
          )}
        />
      </View>


      {/* Platinum Listings */}
      <View className="p-5">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold">Platinum Listings</Text>
          <TouchableOpacity>
            <Text className="text-[#1077BC] font-bold">View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listings.map(listing => (
            <View key={listing.id} className="mr-5 w-36">
              <Image source={listing.image} className="w-full h-24 rounded-lg" />
              <Text className="font-bold mt-1">{listing.name}</Text>
              <Text className="text-[#1077BC]">⭐ {listing.tag}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Recently Listed */}
      <View className="p-5 mb-20">
        <Text className="text-lg font-bold mb-3">Recently Listed</Text>
        <View className="flex-row flex-wrap justify-between">
          {recentListings.map(item => (
            <View key={item.id} className="w-[47%] mb-5">
              <Image source={item.image} className="w-full h-24 rounded-lg" />
              <Text className="font-bold mt-1">{item.name}</Text>
              <Text className="text-gray-500">{item.category}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
