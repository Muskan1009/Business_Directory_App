import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function AddListingScreen() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [address, setAddress] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const [licenseImages, setLicenseImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [featuredImages, setFeaturedImages] = useState([]);

  const pickImage = async (setImages) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Camera roll access is needed.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false, // Disable cropping
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const renderImageBoxWithRemove = (uri, index, images, setImages) => (
    <View key={index} className="relative w-[45%] h-24 rounded-xl mb-3">
      <Image source={{ uri }} className="w-full h-full rounded-xl" resizeMode="cover" />
      <TouchableOpacity
        onPress={() => {
          const updated = [...images];
          updated.splice(index, 1);
          setImages(updated);
        }}
        className="absolute top-1 right-1 bg-black/70 p-1 rounded-full"
      >
        <Ionicons name="close" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );

  const renderImageSection = (title, images, setImages) => (
    <>
      <Text className="font-semibold mb-2">{title}</Text>
      <View className="flex-row justify-between flex-wrap mb-2">
        {images.map((uri, index) =>
          renderImageBoxWithRemove(uri, index, images, setImages)
        )}
        {/* Only one Add box, no matter how many images */}
        <TouchableOpacity
          onPress={() => pickImage(setImages)}
          className="w-[45%] h-24 bg-[#FFF082] rounded-xl items-center justify-center mb-3"
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-[#1077BC] h-60 rounded-b-3xl items-center justify-center">
        <Text className="text-2xl font-bold text-white">Add Business</Text>
        <Text className="text-white text-sm mt-1">Join Punjabi Pages!</Text>
      </View>

      {/* Form */}
      <View className="px-5 py-6 bg-[#FEDA15] rounded-t-3xl">
        <TextInput
          className="bg-white px-4 py-3 rounded-full mb-3"
          placeholder="Business Name"
          value={businessName}
          onChangeText={setBusinessName}
        />
        <TextInput
          className="bg-white px-4 py-3 rounded-full mb-3"
          placeholder="Business Type"
          value={businessType}
          onChangeText={setBusinessType}
        />
        <TextInput
          className="bg-white px-4 py-3 rounded-full mb-3"
          placeholder="Full Business Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          className="bg-white px-4 py-3 rounded-full mb-5"
          placeholder="License Number"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
        />

        {/* Upload Sections */}
        {renderImageSection('Upload License Picture', licenseImages, setLicenseImages)}
        {renderImageSection('Gallery', galleryImages, setGalleryImages)}
        {renderImageSection('Featured Images', featuredImages, setFeaturedImages)}

        {/* Submit */}
        <TouchableOpacity
          className="bg-[#1077BC] py-4 rounded-xl items-center mt-4 mb-24"
          onPress={() => Alert.alert('Submitted', 'Your listing has been submitted.')}
        >
          <Text className="text-white font-bold text-lg">Register Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
