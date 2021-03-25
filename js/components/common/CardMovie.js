import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMAGE_URL} from '../../constant/general';
import styles from '../../styles/cardMovie';

const CardMovie = props => (
  <View style={styles.container}>
    <Image
      source={{
        uri: `${IMAGE_URL}${props.movie.poster_path}`,
      }}
      style={styles.poster}
    />
    <Text style={styles.title}>{props.movie.title}</Text>
    <Text style={styles.overview}>{props.movie.overview}</Text>
  </View>
);

export default CardMovie;
