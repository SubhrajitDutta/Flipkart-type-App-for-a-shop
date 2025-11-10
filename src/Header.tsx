import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface HeaderProps {
  onSearch: (text: string) => void;
  onShopkeeperPress?: () => void;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  onShopkeeperPress, 
  showBackButton, 
  onBackPress 
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        {showBackButton ? (
          <TouchableOpacity onPress={onBackPress}>
            <Icon name="arrow-left" size={24} color="#2a52be" />
          </TouchableOpacity>
        ) : (
          <Text style={styles.shopName}>Abhinandan</Text>
        )}
        
        {!showBackButton && (
          <TouchableOpacity onPress={onShopkeeperPress}>
            <Icon name="user" size={24} color="#2a52be" />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search appliances..." 
          style={styles.searchInput}
          onChangeText={onSearch}
          placeholderTextColor="#888"
        />
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2a52be',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default Header;