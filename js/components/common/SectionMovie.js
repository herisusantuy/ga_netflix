import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {IMAGE_URL} from '../../constant/general';
import {color} from '../../styles/default';

const SectionMovie = props => {
  const handleToMovieDetail = movieId => {
    props.navigation.navigate('Detail', {
      movieId,
    });
  };
  const renderPoster = ({item}) => (
    <TouchableOpacity onPress={() => handleToMovieDetail(item.id)}>
      <Image
        source={{
          uri: `${IMAGE_URL}${item.poster_path}`,
        }}
        style={styles.poster}
        horizontal
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          renderItem={renderPoster}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={{color: color.white, fontSize: 16}}>
          Opps...Movie not found!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: color.white,
    marginVertical: 5,
    textAlign: 'left',
  },
  poster: {
    width: 150,
    height: 225,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default SectionMovie;
