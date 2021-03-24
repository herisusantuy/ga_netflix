import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import CardMovie from './js/components/common/CardMovie';
import {IMAGE_URL} from './js/constant/general';
import Login from './js/components/Login';

const App = () => {
  const movies = [
    {
      adult: false,
      backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
      genre_ids: [28, 12, 14, 878],
      id: 791373,
      original_language: 'en',
      original_title: "Zack Snyder's Justice League",
      overview:
        "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      popularity: 6011.914,
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
      release_date: '2021-03-18',
      title: "Zack Snyder's Justice League",
      video: false,
      vote_average: 8.7,
      vote_count: 3012,
    },
    {
      adult: false,
      backdrop_path: '/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
      genre_ids: [16, 12, 14, 10751, 28],
      id: 527774,
      original_language: 'en',
      original_title: 'Raya and the Last Dragon',
      overview:
        'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
      popularity: 3828.086,
      poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
      release_date: '2021-03-03',
      title: 'Raya and the Last Dragon',
      video: false,
      vote_average: 8.4,
      vote_count: 1554,
    },
    {
      adult: false,
      backdrop_path: '/gzJnMEMkHowkUndn9gCr8ghQPzN.jpg',
      genre_ids: [53, 28, 18],
      id: 793723,
      original_language: 'fr',
      original_title: 'Sentinelle',
      overview:
        'Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.',
      popularity: 2479.97,
      poster_path: '/fFRq98cW9lTo6di2o4lK1qUAWaN.jpg',
      release_date: '2021-03-05',
      title: 'Sentinelle',
      video: false,
      vote_average: 6,
      vote_count: 247,
    },
    {
      adult: false,
      backdrop_path: '/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg',
      genre_ids: [14, 28, 12],
      id: 458576,
      original_language: 'en',
      original_title: 'Monster Hunter',
      overview:
        'A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.',
      popularity: 2138.307,
      poster_path: '/1UCOF11QCw8kcqvce8LKOO6pimh.jpg',
      release_date: '2020-12-03',
      title: 'Monster Hunter',
      video: false,
      vote_average: 7.2,
      vote_count: 1206,
    },
  ];
  const renderMovie = ({item}) => <CardMovie movie={item} />;
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
      <Login />
      {/* <View style={styles.topContainer}>
        <FlatList
          data={movies}
          renderItem={renderPoster}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={movies}
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
    height: 275,
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default App;
