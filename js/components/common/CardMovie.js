import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMAGE_URL} from '../../constant/general';

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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    height: 400,
    width: 200,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  overview: {
    fontSize: 12,
    paddingVertical: 5,
  },
  poster: {
    width: 200,
    height: 250,
  },
});

export default CardMovie;
