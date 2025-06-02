import React from 'react';
import { View, Text, TouchableOpacity, Share, Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  const router = useRouter();

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out Punjabi Pages: https://punjabipages.app',
      });
    } catch (error) {
      Alert.alert('Error sharing the app.');
    }
  };

  const handleContact = () => {
    Linking.openURL('mailto:support@punjabipages.app'); // Replace with actual email or contact page
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-6">My Account</Text>

      <Option icon="person-add" label="Register" onPress={() => router.push('/account/register')} />
      <Option icon="person" label="Profile" onPress={() => router.push('/account/profile')} />
      <Option icon="share-social-outline" label="Share Punjabi Pages" onPress={handleShare} />
      <Option icon="call-outline" label="Contact Us" onPress={handleContact} />
    </View>
  );
}

function Option({ icon, label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center bg-gray-100 p-4 rounded-xl mb-3"
    >
      <Ionicons name={icon} size={24} color="#1077BC" style={{ marginRight: 12 }} />
      <Text className="text-base font-medium">{label}</Text>
    </TouchableOpacity>
  );
}
