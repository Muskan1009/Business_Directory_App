import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { businesses } from '../../../constants/data';
import { Ionicons } from '@expo/vector-icons';

export default function CategoryDetails() {
  const { id } = useLocalSearchParams();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const stored = await AsyncStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  };

  const toggleFavorite = async (business) => {
    let updatedFavorites = [];
    const exists = favorites.find(item => item.id === business.id);

    if (exists) {
      updatedFavorites = favorites.filter(item => item.id !== business.id);
    } else {
      updatedFavorites = [...favorites, business];
    }

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);

  const filteredBusinesses = businesses.filter(
    (business) => business.categoryId.toString() === id
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-white rounded-lg p-4 m-2 shadow">
      <Image source={item.image} className="w-full h-32 rounded-md" resizeMode="cover" />
      <View className="flex-row justify-between items-center mt-2">
        <View>
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="text-sm text-gray-600">{item.location}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          <Ionicons
            name={isFavorite(item.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite(item.id) ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Businesses</Text>
      <FlatList
        data={filteredBusinesses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No businesses found in this category.</Text>}
      />
    </View>
  );
}
