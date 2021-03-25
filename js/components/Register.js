import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from './common/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/register';

const Register = props => {
  //   const [email, setEmail] = useState(null);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix_logo.png')}
        style={styles.logo}
      />
      <View style={styles.subContainer}>
        <Text style={styles.signIn}>Register</Text>
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
          <Text
            style={styles.underBtnText}
            onPress={() => props.navigation.pop()}>
            Back
          </Text>
          <Text style={styles.underBtnText}>Need help ?</Text>
        </View>
      </View>
    </View>
  );
};
export default Register;
