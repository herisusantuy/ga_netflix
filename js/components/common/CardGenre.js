import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../styles/default';

const CardGenre = props => {
  const [genres, setGenres] = useState(props.genres);
  const [isMore, setIsMore] = useState(false);
  const onPressGenre = genre => {
    // selecte multiple genres
    // let updateGenres = props.genres.map((g, i) => {
    //   let obj = g;
    //   g.isActive =
    //     g.id == genre.id ? (g.isActive = !genre.isActive) : g.isActive;
    //   return obj;
    // });
    // select one genre
    let updateGenres = props.genres.map(gen =>
      gen.id == genre.id
        ? (gen.isActive = !gen.isActive)
        : (gen.isActive = false),
    );
    setGenres(updateGenres);
    props.handleSelectGenre(genre.id);
  };
  useEffect(() => {}, [props.genres]);

  const renderGenre = ({item}) => (
    <TouchableOpacity
      onPress={() => onPressGenre(item)}
      style={{
        justifyContent: 'center',
        // padding: 2,
        paddingHorizontal: 5,
        height: 30,
        borderRadius: 10,
        marginHorizontal: 3,
        // flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.red,
        backgroundColor: item.isActive ? color.red : color.black,
      }}>
      <Text
        style={{
          fontSize: 14,
          color: color.white,
          marginLeft: 5,
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderMoreGenres = props.genres.map((genre, i) => (
    <TouchableOpacity
      key={i}
      onPress={() => onPressGenre(genre)}
      style={{
        justifyContent: 'center',
        // padding: 2,
        paddingHorizontal: 5,
        height: 30,
        borderRadius: 10,
        marginHorizontal: 3,
        marginVertical: 5,
        // flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.red,
        backgroundColor: genre.isActive ? color.red : color.black,
      }}>
      <Text
        style={{
          fontSize: 14,
          color: color.white,
          marginLeft: 5,
          fontWeight: 'bold',
        }}>
        {genre.name}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <View
      style={{
        // height: 80,
        marginTop: 5,
      }}>
      <View
        style={{
          padding: 5,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: color.white, fontWeight: 'bold'}}>
          Best Genre
        </Text>
        <TouchableOpacity onPress={() => setIsMore(!isMore)}>
          <Text
            style={{
              fontSize: 16,
              color: color.white,
              fontWeight: 'normal',
              textDecorationLine: 'underline',
            }}>
            {isMore ? 'Collapse' : 'Expand'}
          </Text>
        </TouchableOpacity>
      </View>
      {isMore ? (
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            // marginVertical: 10,
            justifyContent: 'flex-start',
          }}>
          {renderMoreGenres}
        </View>
      ) : (
        <FlatList
          data={genres.length > 0 ? genres : props.genres}
          renderItem={renderGenre}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default CardGenre;
