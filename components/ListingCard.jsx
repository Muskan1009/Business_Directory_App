import { View, Text, StyleSheet } from 'react-native';

export default function ListingCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.category}>{data.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  category: {
    color: '#aaa',
    marginTop: 4,
  },
});
