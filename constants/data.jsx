export default [
  { id: '1', name: 'Punjabi Dhaba', category: 'Restaurant' },
  { id: '2', name: 'Amrit Hair Salon', category: 'Salon' },
  { id: '3', name: 'Golden Car Wash', category: 'Auto Services' },
];

export const categories = [
  { id: '1', name: 'Food', icon: require('../assets/icons/food.png') },
  { id: '2', name: 'Health', icon: require('../assets/icons/health.png') },
  { id: '3', name: 'Clothing', icon: require('../assets/icons/clothing.png') },
  { id: '4', name: 'Beauty', icon: require('../assets/icons/beauty.png') },
{ id: '5', name: 'Fitness', icon: require('../assets/icons/beauty.png') },
{ id: '6', name: 'Finance', icon: require('../assets/icons/beauty.png') },
{ id: '7', name: 'Event', icon: require('../assets/icons/beauty.png') },
{ id: '8', name: 'Kid', icon: require('../assets/icons/beauty.png') },
];

export const businesses = [
  // Food (id: '1')
  {
    id: '1',
    categoryId: '1',
    name: 'Delicious Bites',
    location: '123 Food St, Melbourne',
    image: require('../assets/icons/food.png'),
  },
  {
    id: '2',
    categoryId: '1',
    name: 'Tasty Treats',
    location: '456 Yummy Ave, Melbourne',
    image: require('../assets/icons/food.png'),
  },

  // Health (id: '2')
  {
    id: '3',
    categoryId: '2',
    name: 'Wellness Clinic',
    location: '789 Healthy Rd, Melbourne',
    image: require('../assets/icons/health.png'),
  },
  {
    id: '4',
    categoryId: '2',
    name: 'Fitness & Care',
    location: '101 Care Blvd, Melbourne',
    image: require('../assets/icons/health.png'),
  },

  // Clothing (id: '3')
  {
    id: '5',
    categoryId: '3',
    name: 'Trendy Threads',
    location: '202 Fashion Ln, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },

  // Beauty (id: '4')
  {
    id: '6',
    categoryId: '4',
    name: 'Glow Beauty Salon',
    location: '303 Beauty St, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },

  // Fitness (id: '5')
  {
    id: '7',
    categoryId: '5',
    name: 'Power Gym',
    location: '404 Muscle Ave, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },

  // Finance (id: '6')
  {
    id: '8',
    categoryId: '6',
    name: 'Secure Finance',
    location: '505 Money Rd, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },

  // Event (id: '7')
  {
    id: '9',
    categoryId: '7',
    name: 'Party Planners',
    location: '606 Celebration Blvd, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },

  // Kid (id: '8')
  {
    id: '10',
    categoryId: '8',
    name: 'Happy Kids Zone',
    location: '707 Playtime Rd, Melbourne',
    image: require('../assets/icons/clothing.png'),
  },
];
