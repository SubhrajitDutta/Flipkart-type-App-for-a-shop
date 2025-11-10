import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface HomeScreenProps {
  searchQuery: string;
  onNavigateToShopkeeper: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ searchQuery, onNavigateToShopkeeper }) => {
  const categories: Category[] = [
    { id: '1', name: 'Refrigerators', icon: 'fridge-outline' },
    { id: '2', name: 'Air Conditioners', icon: 'air-conditioner' },
    { id: '3', name: 'Ceiling Fans', icon: 'fan' },
    { id: '4', name: 'Stand Fans', icon: 'fan-chevron-up' },
    { id: '5', name: 'Ovens', icon: 'toaster-oven' },
    { id: '6', name: 'Televisions', icon: 'television' },
    { id: '7', name: 'Sound Systems', icon: 'speaker' },
    { id: '8', name: 'Mobile Phones', icon: 'cellphone' },
    { id: '9', name: 'Washing Machines', icon: 'washing-machine' },
    { id: '10', name: 'Microwaves', icon: 'microwave' },
    { id: '11', name: 'Vacuum Cleaners', icon: 'vacuum' },
    { id: '12', name: 'Water Heaters', icon: 'water-boiler' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity 
      style={styles.categoryItem}
      onPress={() => {
        // Handle category press here
        console.log(`Pressed ${item.name}`);
      }}
    >
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={32} color="#2a52be" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <TouchableOpacity 
            style={styles.shopkeeperButton} 
            onPress={onNavigateToShopkeeper}
          >
            <Icon name="store" size={20} color="#2a52be" />
            <Text style={styles.shopkeeperText}>Visit Shopkeeper Details</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  shopkeeperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#e6f0ff',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  shopkeeperText: {
    marginLeft: 8,
    color: '#2a52be',
    fontWeight: '500',
  },
});

export default HomeScreen;