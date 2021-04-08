import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import {IMAGE_URL, API_KEY, API_URL} from '../constant/general';
import CardMovie from './common/CardMovie';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [searchTextInput, setSearchTextInput] = useState(null);

  useEffect(() => {
    // getPopular();
    getNowPlaying();
  }, []);

  const handleMoveToDetail = async movie => {
    props.navigation.navigate('Detail', {
      selectedMovie: movie,
    });
  };

  async function getPopular() {
    try {
      const response = await axios.get(
        `${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`,
      );
      setPopular(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const getNowPlaying = async () => {
    let url = `${API_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    try {
      const response = await axios.get(url);
      setNowPlaying(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const renderMovie = ({item}) => (
    <CardMovie movie={item} moveToDetail={() => handleMoveToDetail(item)} />
  );
  const renderPoster = ({item}) => (
    <Image
      source={{
        uri: `${IMAGE_URL}${item.poster_path}`,
      }}
      style={styles.poster}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          data={
            !searchTextInput
              ? popular
              : popular.filter(movie =>
                  movie.title
                    .toLowerCase()
                    .includes(searchTextInput.toLowerCase()),
                )
          }
          renderItem={renderPoster}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <TextInput
        placeholder="Search movie..."
        value={searchTextInput}
        onChangeText={value => setSearchTextInput(value)}
      />
      <View style={styles.bottomContainer}>
        <FlatList
          data={
            !searchTextInput
              ? nowPlaying
              : nowPlaying.filter(movie =>
                  movie.title
                    .toLowerCase()
                    .includes(searchTextInput.toLowerCase()),
                )
          }
          renderItem={renderMovie}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 4,
    width: '100%',
  },
  bottomContainer: {
    flex: 6,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  poster: {
    width: 375,
    // height: 275,
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default Home;
