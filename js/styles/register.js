import {StyleSheet} from 'react-native';
import {color, style} from './default';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: color.black,
    padding: 25,
  },
  subContainer: {
    marginVertical: style.containerMargin,
  },
  logo: {
    width: 180,
    height: 90,
    resizeMode: 'cover',
  },
  signIn: {
    fontSize: 45,
    fontWeight: 'bold',
    color: color.white,
    marginBottom: 25,
  },
  input: {
    backgroundColor: color.darkGrey,
    padding: style.paddingTextInput,
    borderRadius: 5,
    marginVertical: style.marginTextInput,
    color: color.white,
    fontSize: 14,
  },
  underBtnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  underBtnText: {
    color: color.white,
  },
  buttonContainer: {
    marginVertical: 30,
  },
  bottomContainer: {
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  loginFb: {
    color: color.white,
    marginVertical: 30,
    marginHorizontal: style.small,
  },
  isNew: {
    color: color.white,
    fontSize: 16,
  },
  signUp: {
    fontSize: 18,
    color: color.white,
    fontWeight: 'bold',
  },
  fbContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
