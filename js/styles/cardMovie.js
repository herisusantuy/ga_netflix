import {StyleSheet} from 'react-native';
import {color} from './default';

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  overview: {
    fontSize: 14,
    paddingVertical: 5,
    textAlign: 'justify',
  },
  poster: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
});

export default styles;
