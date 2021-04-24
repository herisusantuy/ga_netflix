import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {IMAGE_URL} from '../constant/general';
import {color} from '../styles/default';

const MoviesPerSection = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route.params.title,
    });
  }, []);
  const handleToMovieDetail = movieId => {
    props.navigation.navigate('Detail', {
      movieId,
    });
  };
  const renderPoster = props.route.params.movies?.map((movie, i) => (
    <TouchableOpacity key={i} onPress={() => handleToMovieDetail(movie.id)}>
      <Image
        source={{
          uri: `${IMAGE_URL}${movie.poster_path}`,
        }}
        style={styles.poster}
        horizontal
      />
    </TouchableOpacity>
  ));
  return (
    <ScrollView>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: color.black,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {renderPoster}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 115,
    height: 150,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default MoviesPerSection;
