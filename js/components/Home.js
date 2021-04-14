import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import {IMAGE_URL} from '../constant/general';
import CardMovie from './common/CardMovie';
import CardGenre from './common/CardGenre';

// action
import {getPopularAction} from '../actions/movieAction';

const Home = props => {
  const dispatch = useDispatch();
  const [popular, setPopular] = useState(
    useSelector(state => state.movies.popular),
  );
  const [loading, setLoading] = useState(
    useSelector(state => state.movies.loading),
  );
  // const [nowPlaying, setNowPlaying] = useState([]);
  const [searchTextInput, setSearchTextInput] = useState(null);

  useEffect(() => {
    dispatch(getPopularAction());
  }, [loading]);

  const handleMoveToDetail = async movie => {
    props.navigation.navigate('Detail', {
      selectedMovie: movie,
    });
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
  console.log('popular', popular);
  console.log('loading', loading);
  return (
    <View style={styles.container}>
      <CardGenre />
      {/* <View style={styles.topContainer}>
        {!loading ? (
          <FlatList
            data={popular}
            renderItem={renderPoster}
            keyExtractor={item => item.id}
            horizontal
          />
        ) : (
          <Text>Loading data...</Text>
        )}
      </View> */}
      <TextInput
        placeholder="Search movie..."
        value={searchTextInput}
        onChangeText={value => setSearchTextInput(value)}
      />
      {/* <View style={styles.bottomContainer}>
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
      </View> */}
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
