import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {color, style} from '../styles/default';
import CustomButton from './common/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginAction} from '../actions/userAction';

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('joko@gmail.com');
  const [password, setPassword] = useState('Joko1234!!');
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector(state => state.user.auth);
  const loading = useSelector(state => state.user.loading);

  const handleLogin = async () => {
    const res = await dispatch(loginAction({email, password}));
    if (res.token) {
      await AsyncStorage.setItem('token', res.token);
      props.navigation.navigate('MainTab');
    } else {
      console.log('Login error');
    }
  };
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
          onChangeText={email => setEmail(email)}
          value={email}
          placeholder="Email or phone number"
          placeholderTextColor={color.white}
        />
        <View>
          <TextInput
            style={styles.input}
            onChangeText={password => setPassword(password)}
            value={password}
            placeholder="Password"
            secureTextEntry={isOpen ? false : true}
            placeholderTextColor={color.white}
          />
          <FontAwesome
            onPress={() => setIsOpen(!isOpen)}
            name={isOpen ? 'eye' : 'eye-slash'}
            size={20}
            color={color.white}
            style={{
              position: 'absolute',
              right: 15,
              top: 30,
            }}
          />
        </View>
      </View>
      {loading && <ActivityIndicator size="large" color={color.darkRed} />}

      <View style={styles.buttonContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <CustomButton title="Sign In" onPressButton={() => handleLogin()} />
        </View>

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
