import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function FavouritesScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchFavorites();
    return () => unsubscribe;
  }, []);

  const fetchFavorites = async () => {
    const stored = await AsyncStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  };

  const removeFavorite = async (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    await AsyncStorage.setItem('favorites', JSON.stringify(updated));
  };

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-lg p-4 m-2 shadow">
      <Image source={item.image} className="w-full h-32 rounded-md" resizeMode="cover" />
      <View className="flex-row justify-between items-center mt-2">
        <View>
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="text-sm text-gray-600">{item.location}</Text>
        </View>
        <TouchableOpacity onPress={() => removeFavorite(item.id)}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Favourites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-10">
            You have no favorites yet.
          </Text>
        }
      />
    </View>
  );
}
