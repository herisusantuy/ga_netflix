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
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('MoviesPerSection', {
              movies: props.data,
              title: props.title,
            })
          }>
          <AntDesign name="right" size={20} color={color.white} />
        </TouchableOpacity>
      </View>

      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          renderItem={renderPoster}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: color.white, fontSize: 16}}>
            Opps...Movie not found!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: color.white,
    marginVertical: 5,
    textAlign: 'left',
  },
  poster: {
    width: 115,
    height: 150,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default SectionMovie;
