import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ShopkeeperScreenProps {
  onBack: () => void;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Region extends Coordinate {
  latitudeDelta: number;
  longitudeDelta: number;
}

const ShopkeeperScreen: React.FC<ShopkeeperScreenProps> = ({ onBack }) => {
  const shopLocation: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+911234567890');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#2a52be" />
          <Text style={styles.backText}>Back to Products</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Shop Details</Text>
      
      <View style={styles.detailItem}>
        <Icon name="user" size={20} color="#2a52be" />
        <Text style={styles.detailText}>Owner: John Doe</Text>
      </View>
      
      <View style={styles.detailItem}>
        <Icon name="phone" size={20} color="#2a52be" />
        <Text 
          style={[styles.detailText, styles.link]}
          onPress={handlePhonePress}
        >
          +91 1234567890
        </Text>
      </View>
      
      <View style={styles.detailItem}>
        <Icon name="map-marker" size={20} color="#2a52be" />
        <Text style={styles.detailText}>123 Appliance Street, Electronics City, Bangalore</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={shopLocation}
        >
          <Marker coordinate={shopLocation} title="Abhinandan Appliances" />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButtonContainer: {
    marginBottom: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 5,
    color: '#2a52be',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2a52be',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
  },
  link: {
    color: '#2a52be',
    textDecorationLine: 'underline',
  },
  mapContainer: {
    height: 250,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ShopkeeperScreen;