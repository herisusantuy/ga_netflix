import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IMAGE_URL} from '../../constant/general';
import styles from '../../styles/cardMovie';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CardMovie = props => {
  return (
    <View style={styles.container} onPress={props.moveToDetail}>
      <TouchableOpacity>
        <Image
          source={{
            uri: `${IMAGE_URL}${props.movie.backdrop_path}`,
          }}
          style={styles.poster}
        />
        <AntDesign
          name="playcircleo"
          size={50}
          color="#F3AD2E"
          style={{position: 'absolute', top: '40%', left: '40%'}}
        />
      </TouchableOpacity>

      <Text style={styles.overview}>{props.movie.overview}</Text>
      <View
        style={{
          borderTopWidth: 0.5,
          borderTopColor: 'black',
          marginTop: 10,
          padding: 5,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="chatbubbles-outline" size={30} />
          <Text style={{marginHorizontal: 10}}>122</Text>
        </View>
        <Ionicons name="share-social-sharp" size={30} />
      </View>
    </View>
  );
};

export default CardMovie;
