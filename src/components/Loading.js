import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
      }}>
      <ActivityIndicator size="small" color="#999" />
      <Text style={{color: '#999', alignSelf: 'center'}}>Loading...</Text>
    </View>
  );
};

export default Loading;
