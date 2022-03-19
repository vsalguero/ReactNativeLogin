import React from 'react';
import { ActivityIndicator, View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.background}>
      <ActivityIndicator size="large" color="#999" />
      <Image
        style={styles.logo}
        source={require('../images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 32,
    resizeMode: 'stretch',
  },
});

export default SplashScreen;
