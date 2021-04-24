import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import CardReview from './common/CardReview';
import {color} from '../styles/default';

const Reviews = props => {
  const renderReview = ({item}) => <CardReview review={item} />;
  return (
    <View style={styles.container}>
      {props.route.params.reviews.length > 0 ? (
        <FlatList
          data={props.route.params.reviews}
          renderItem={renderReview}
          keyExtractor={(item, index) => index}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 16, color: color.white}}>
            There's no review for this movie.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    flex: 1,
  },
});

export default Reviews;
