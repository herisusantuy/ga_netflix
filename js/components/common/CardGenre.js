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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../styles/default';

const CardGenre = props => {
  const dispatch = useDispatch();
  const renderGenre = ({item}) => (
    <TouchableOpacity
      onPress={() => dispatch(props.handleSelectGenre(item))}
      style={{
        justifyContent: 'center',
        padding: 5,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.red,
        backgroundColor: item.isActive ? color.red : color.black,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: color.white,
          marginLeft: 5,
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        height: 100,
        marginVertical: 5,
      }}>
      <View
        style={{
          padding: 5,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 24, color: color.white, fontWeight: 'bold'}}>
          Best Genre
        </Text>
      </View>
      <FlatList
        data={props.genres}
        renderItem={renderGenre}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardGenre;
