import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 5,
          right: 5,
          height: 90,
          backgroundColor: '#005BA4',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Home" icon="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Categories" icon="grid" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-listings/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <AddButton focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Favorites" icon="heart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Account" icon="user" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

// Reusable icon with label
function TabIcon({ icon, label, focused }) {
  return (
    <View className="items-center mt-4">
      <Feather name={icon} size={28} color={focused ? '#FFD700' : '#fff'} />
      <Text className={`text-[6px] mt-1 ${focused ? 'text-[#FFD700]' : 'text-white'}`}>{label}</Text>
    </View>
  );
}

// Center Add button
// Fixed Add Button for center tab (visual only, no Touchable)
function AddButton({ focused }) {
  return (
    <View className="items-center justify-center -mt-6 bg-[#FFC048] w-16 h-16 rounded-full">
      <Feather name="plus" size={32} color="#005BA4" />
    </View>
  );
}
