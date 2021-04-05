import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from './common/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/register';

const Register = props => {
  console.log('🚀 ~ file: Register.js ~ line 9 ~ props', props.route.params);
  //   const [email, setEmail] = useState(null);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix_logo.png')}
        style={styles.logo}
      />
      <View style={styles.subContainer}>
        <Text style={styles.signIn}>Register</Text>
        <Text style={styles.signIn}>Hi {props.route.params.username}</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
          placeholder="Username"
          placeholderTextColor={color.white}
        />
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
        <CustomButton title="Register" />
        <View style={styles.underBtnContainer}>
          <View
            onPress={() => props.navigation.navigate('Login')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AntDesign
              name="left"
              size={20}
              color={color.white}
              style={{marginRight: 5}}
            />
            <Text style={styles.underBtnText}>Back</Text>
          </View>

          <Text style={styles.underBtnText}>Need help ?</Text>
        </View>
      </View>
    </View>
  );
};
export default Register;
