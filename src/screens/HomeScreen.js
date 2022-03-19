import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AuthContext } from '../context/AuthContext';


const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>

      <Text>
        Welcome!

      </Text>


    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default HomeScreen;