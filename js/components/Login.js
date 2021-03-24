import React from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from './common/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = props => (
  <View style={styles.container}>
    <Image source={require('../assets/netflix_logo.png')} style={styles.logo} />
    <View style={styles.subContainer}>
      <Text style={styles.signIn}>Sign In</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Email or phone number"
        placeholderTextColor={color.white}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={color.white}
      />
    </View>
    <View style={styles.buttonContainer}>
      <CustomButton title="Sign In" />
      <View style={styles.underBtnContainer}>
        <Text style={styles.underBtnText}>Remember</Text>
        <Text style={styles.underBtnText}>Need help ?</Text>
      </View>
    </View>
    <View style={styles.bottomContainer}>
      <View style={styles.fbContainer}>
        <AntDesign name="facebook-square" size={25} color={color.fbColor} />
        <Text style={styles.loginFb}>Login with Facebook</Text>
      </View>

      <Text style={styles.isNew}>
        New to Netflix ? <Text style={styles.signUp}>Sign up now.</Text>
      </Text>
    </View>
  </View>
);

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
    marginHorizontal: 5,
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

export default Login;
