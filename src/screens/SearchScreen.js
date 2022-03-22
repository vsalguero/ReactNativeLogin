import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AuthContext } from '../context/AuthContext';


const SearchScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Search Screen

        </Text>

      </View>
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
export default SearchScreen;