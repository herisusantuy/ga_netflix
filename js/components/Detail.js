import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {YOUTUBE_URL, IMAGE_URL, YOUTUBE_API_KEY} from '../constant/general';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../styles/default';
import LinearGradient from 'react-native-linear-gradient';
import YouTube from 'react-native-youtube';
import {
  getMovieAction,
  getMovieReviewAction,
  getVideosAction,
} from '../actions/movieAction';

const Detail = props => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [play, setPlay] = useState(false);

  const selectedMovie = useSelector(state => state.movies.movie);
  const reviews = useSelector(state => state.movies.reviews);
  const videos = useSelector(state => state.movies.videos);
  const loading = useSelector(state => state.movies.loading);

  useEffect(() => {
    dispatch(getMovieAction(props.route.params.movieId));
    dispatch(getMovieReviewAction(props.route.params.movieId));
    dispatch(getVideosAction(props.route.params.movieId));
  }, [props.route.params.movieId, play]);

  const renderGenre = genres => {
    return genres?.map((genre, i) => (
      <View
        key={i}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text key={i} style={{color: color.white, fontSize: 10}}>
          {genre.name}
        </Text>
        {i != genres.length - 1 && (
          <View
            style={{
              backgroundColor: color.red,
              marginHorizontal: 5,
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 3,
            }}></View>
        )}
      </View>
    ));
  };
  const renderHeaderBar = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('MainTab')}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="left" size={25} color={color.white} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsLike(!isLike)}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign
          name="heart"
          size={25}
          color={isLike ? color.red : color.white}
        />
      </TouchableOpacity>
    </View>
  );
  const renderHeaderSection = () => (
    <ImageBackground
      source={{uri: `${IMAGE_URL}/${selectedMovie.backdrop_path}`}}
      resizeMode="cover"
      style={{
        width: '100%',
        height: 450,
      }}>
      <View style={{flex: 1}}>
        {renderHeaderBar()}
        {/* {play && (
          <View>
            <YouTube
              videoId={videos[0]?.key}
              play={play}
              fullscreen={false}
              // loop={false}
              // onReady={e => this.setState({isReady: true})}
              // onChangeState={e => this.setState({status: e.state})}
              // onChangeQuality={e => this.setState({quality: e.quality})}
              // onError={e => this.setState({error: e.error})}
              style={{
                alignSelf: 'stretch',
                height: 300,
              }}
              apiKey={YOUTUBE_API_KEY}
            />
          </View>
        )} */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['transparent', '#000']}
            style={{
              width: '100%',
              height: 200,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: color.white,
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {selectedMovie.title}
            </Text>
            {renderCategoryAndRating()}
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );

  const renderCategoryAndRating = () => (
    <View
      style={{
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        {/* {renderGenre(selectedMovie?.genres?.slice(0, 3))} */}
        {renderGenre(selectedMovie?.genres)}
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.categoryContainer}>
          <AntDesign name="message1" color={color.white} size={15} />
          <Text style={{color: color.white, fontSize: 12, marginHorizontal: 5}}>
            {reviews.length}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => setPlay(true)}>
          <AntDesign name="caretright" color={color.white} size={15} />
          <Text
            style={{
              color: color.white,
              fontSize: 12,
              marginHorizontal: 5,
              fontWeight: 'bold',
            }}>
            Play Trailer
          </Text>
        </TouchableOpacity>
        <View style={styles.categoryContainer}>
          <AntDesign name="star" color="yellow" size={15} />
          <Text style={{color: color.white, fontSize: 12, marginHorizontal: 5}}>
            {selectedMovie.vote_average}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderCasting = ({item}) => (
    <View
      style={{
        width: 100,
        height: 250,
        marginRight: 5,
      }}>
      <Image
        source={{
          uri: `${IMAGE_URL}${item.profile_path}`,
        }}
        style={{
          width: 100,
          height: 150,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          resizeMode: 'cover',
        }}
      />
      <View style={{paddingVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: color.white}}>
          {item.original_name}
        </Text>
        <Text style={{color: color.white}}>{item.character}</Text>
      </View>
    </View>
  );

  return (
    <>
      {!loading ? (
        <ScrollView
          contentContainerStyle={{
            backgroundColor: color.black,
            paddingHorizontal: 5,
            paddingBottom: 40,
          }}
          style={{backgroundColor: color.black}}>
          {renderHeaderSection()}
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 18,
                color: color.white,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Overview
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: color.white,
                textAlign: 'justify',
              }}>
              {selectedMovie.overview}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: color.white,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Top Billed Cast
            </Text>
            <FlatList
              data={selectedMovie?.credits?.cast}
              renderItem={renderCasting}
              keyExtractor={(item, index) => index}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: color.black,
          }}>
          <ActivityIndicator size="large" color={color.darkRed} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default Detail;
