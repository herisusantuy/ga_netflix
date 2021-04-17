import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
} from 'react-native';
import {IMAGE_URL} from '../constant/general';
import CardMovie from './common/CardMovie';
import CardGenre from './common/CardGenre';
// action
import {
  getPopularAction,
  getGenresAction,
  getUpcomingAction,
  getNowPlayingAction,
  getTopRatedAction,
  updateGenres,
} from '../actions/movieAction';
import SectionMovie from './common/SectionMovie';

import {color} from '../styles/default';

const Home = props => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.movies.loading);
  const genres = useSelector(state => state.movies.genres);
  const movies = [
    {
      title: 'Upcoming',
      data: useSelector(state => state.movies.upcoming),
    },
    {
      title: 'Popular',
      data: useSelector(state => state.movies.popular),
    },
    {
      title: 'Now Playing',
      data: useSelector(state => state.movies.nowPlaying),
    },
    {
      title: 'Top Rated',
      data: useSelector(state => state.movies.topRated),
    },
  ];

  useEffect(() => {
    dispatch(getPopularAction());
    dispatch(getUpcomingAction());
    dispatch(getNowPlayingAction());
    dispatch(getTopRatedAction());
    dispatch(getGenresAction());
  }, []);

  const renderMoviePerSection = ({item}) => (
    <SectionMovie
      title={item.title}
      data={item.data}
      navigation={props.navigation}
    />
  );
  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <CardGenre genres={genres} handleSelectGenre={updateGenres} />
          <View>
            <FlatList
              data={movies}
              renderItem={renderMoviePerSection}
              keyExtractor={(item, index) => index}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color={color.darkRed} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.black,
    paddingBottom: 80,
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
    width: 150,
    height: 225,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default Home;
