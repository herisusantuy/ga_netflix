import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const genres = [
  {
    id: 28,
    name: 'Action',
    status: false,
  },
  {
    id: 12,
    name: 'Adventure',
    status: false,
  },
  {
    id: 16,
    name: 'Animation',
    status: false,
  },
  {
    id: 35,
    name: 'Comedy',
    status: false,
  },
  {
    id: 80,
    name: 'Crime',
    status: false,
  },
  {
    id: 99,
    name: 'Documentary',
    status: false,
  },
  {
    id: 18,
    name: 'Drama',
    status: false,
  },
  {
    id: 10751,
    name: 'Family',
    status: false,
  },
  {
    id: 14,
    name: 'Fantasy',
    status: false,
  },
  {
    id: 36,
    name: 'History',
    status: false,
  },
  {
    id: 27,
    name: 'Horror',
    status: false,
  },
  {
    id: 10402,
    name: 'Music',
    status: false,
  },
  {
    id: 9648,
    name: 'Mystery',
    status: false,
  },
  {
    id: 10749,
    name: 'Romance',
    status: false,
  },
  {
    id: 878,
    name: 'Science Fiction',
    status: false,
  },
  {
    id: 10770,
    name: 'TV Movie',
    status: false,
  },
  {
    id: 53,
    name: 'Thriller',
    status: false,
  },
  {
    id: 10752,
    name: 'War',
    status: false,
  },
  {
    id: 37,
    name: 'Western',
    status: false,
  },
];

const CardGenre = props => {
  const renderGenre = ({item}) => (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        padding: 5,
        height: 50,
        borderRadius: 10,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
      <Image source={require('../../assets/Icon.png')} resizeMode="cover" />
      <Text style={{fontSize: 18, color: 'black', marginLeft: 5}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{height: 100}}>
      <View
        style={{
          padding: 5,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 18}}>Best Genre</Text>
        <Text>more</Text>
      </View>
      <FlatList
        data={genres}
        renderItem={renderGenre}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  );
};

export default CardGenre;
