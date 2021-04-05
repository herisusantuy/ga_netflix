import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from './common/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/login';

const Login = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix_logo.png')}
        style={styles.logo}
      />
      <View style={styles.subContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => setEmail(email)}
          value={email}
          placeholder="Email or phone number"
          placeholderTextColor={color.white}
        />
        <TextInput
          style={styles.input}
          onChangeText={() => setPassword(password)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={color.white}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Sign In"
          onPressButton={() => props.navigation.navigate('MainTab')}
        />
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
          New to Netflix ?{' '}
          <Text
            style={styles.signUp}
            onPress={() =>
              props.navigation.navigate('Register', {
                username: 'John Doe',
              })
            }>
            Sign up now.
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Login;
