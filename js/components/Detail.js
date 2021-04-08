import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {API_URL, API_KEY, IMAGE_URL} from '../constant/general';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../styles/default';
import LinearGradient from 'react-native-linear-gradient';

const Detail = props => {
  const [isLike, setIsLike] = useState(false);
  const [movie, setMovie] = useState(props.route.params.selectedMovie);

  useEffect(() => {
    // getDetailMovie(props.route.params.movieId);
  }, []);

  const getDetailMovie = async movieId => {
    let url = `${API_URL}/${movieId}?api_key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const renderGenre = genres => {
    return genres?.map((genre, i) => (
      <Text
        key={i}
        style={{color: color.white, fontSize: 12, marginHorizontal: 5}}>
        {genre.name}
      </Text>
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
      source={{uri: `${IMAGE_URL}/${movie.backdrop_path}`}}
      resizeMode="cover"
      style={{
        width: '100%',
        height: 450,
      }}>
      <View style={{flex: 1}}>
        {renderHeaderBar()}
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
                fontSize: 36,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {movie.title}
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
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <View style={[styles.categoryContainer]}>
        {renderGenre(movie.genres)}
      </View> */}
      <View style={styles.categoryContainer}>
        <AntDesign name="star" color="yellow" size={15} />
        <Text style={{color: color.white, fontSize: 12, marginHorizontal: 5}}>
          {movie.vote_average}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={{flex: 1, backgroundColor: color.black}}
      style={{backgroundColor: color.black}}>
      {renderHeaderSection()}
      {movie && (
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
            style={{fontSize: 14, color: color.white, textAlign: 'justify'}}>
            {movie.overview}
          </Text>
        </View>
      )}
    </ScrollView>
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
