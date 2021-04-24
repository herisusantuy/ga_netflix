import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {IMAGE_URL} from '../../constant/general';
import moment from 'moment';
import {color} from '../../styles/default';

const CardReview = props => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Image
        source={{
          uri: !props.review.author_details?.avatar_path.includes('https')
            ? `${IMAGE_URL}${props.review.author_details?.avatar_path}`
            : props.review.author_details?.avatar_path.slice(1, 1000),
        }}
        style={{
          width: 90,
          height: 90,
          borderRadius: 100,
          resizeMode: 'cover',
          borderWidth: 1,
          borderColor: color.white,
        }}
      />
      <Text
        style={{
          color: color.white,
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 10,
        }}>
        {props.review.author_details.rating
          ? props.review.author_details.rating
          : 0}
        <Text style={{fontWeight: 'normal'}}> /10 </Text>
      </Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={{color: color.white, fontWeight: 'bold', fontSize: 16}}>
        A review by {props.review.author_details?.username}
      </Text>
      <Text style={{fontSize: 12, color: color.white}}>
        Written by {props.review.author_details?.username} on{' '}
        {moment(props.review.created_at).format('LL')}
      </Text>
      <Text style={{marginTop: 20, textAlign: 'justify', color: color.white}}>
        {props.review.content.slice(0, 200)}{' '}
        <Text style={{textDecorationLine: 'underline', color: color.red}}>
          ...more
        </Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: color.red,
    borderRadius: 10,
    marginVertical: 5,
  },
  leftContainer: {
    flex: 3,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 7,
  },
});

export default CardReview;
