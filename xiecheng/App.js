// App.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigate={navigate} />;
      case 'Details':
        return <DetailsScreen navigate={navigate} />;
      default:
        return <HomeScreen navigate={navigate} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderScreen()}
    </SafeAreaView>
  );
};

export default App;
