import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './src/Header';
import HomeScreen from './src/HomeScreen';
import ShopkeeperScreen from './src/ShopkeeperScreen';

type ActiveScreen = 'home' | 'shopkeeper';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [searchQuery, setSearchQuery] = useState('');

  // const renderScreen = () => {
  //   switch (activeScreen) {
  //     case 'shopkeeper':
  //       return <ShopkeeperScreen onBack={() => setActiveScreen('home')} />;
  //     case 'home':
  //     default:
  //       return (
  //         <HomeScreen 
  //           searchQuery={searchQuery}
  //           onNavigateToShopkeeper={() => setActiveScreen('shopkeeper')}
  //         />
  //       );
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* <Header 
        onSearch={setSearchQuery} 
        onShopkeeperPress={() => setActiveScreen('shopkeeper')}
        showBackButton={activeScreen === 'shopkeeper'}
        onBackPress={() => setActiveScreen('home')}
      /> */}
     <Text>Hellow world
     </Text>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

  //  {renderScreen()}