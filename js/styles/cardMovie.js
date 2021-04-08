import {StyleSheet} from 'react-native';
import {color} from './default';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    height: 400,
    width: 200,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  overview: {
    fontSize: 12,
    paddingVertical: 5,
  },
  poster: {
    width: 200,
    height: 250,
    borderRadius: 20,
  },
});

export default styles;
