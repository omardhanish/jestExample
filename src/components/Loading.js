import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Colors from '../assets/Colors';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color = {Colors.buttonRedColor} />

    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
    width: '100%',
    height: '100%',
    zIndex : 5
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 16,
  },
});