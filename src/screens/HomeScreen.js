import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { AuthContext } from '../context/AuthContext';


const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Welcome!

      </Text>

      <Button onPress={() => navigation.navigate('Search')} title="Open other screen" />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});

export default HomeScreen;