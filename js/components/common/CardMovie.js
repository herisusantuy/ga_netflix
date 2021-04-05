import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {IMAGE_URL} from '../../constant/general';
import styles from '../../styles/cardMovie';

const CardMovie = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${IMAGE_URL}${props.movie.poster_path}`,
        }}
        style={styles.poster}
      />
      <TextInput style={styles.title}>{props.movie.title}</TextInput>
      <Text style={styles.overview}>{props.movie.overview}</Text>
    </View>
  );
};

export default CardMovie;
