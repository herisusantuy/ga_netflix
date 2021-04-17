import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../../styles/default';

const CustomButton = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPressButton}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: color.red,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: color.white,
    fontWeight: 'bold',
  },
});

export default CustomButton;
