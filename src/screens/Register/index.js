import React, {useState} from 'react';
import Title from '../../components/Title';
import {Alert, View, StyleSheet, Text, ScrollView} from 'react-native';
import Spacer from '../../components/Spacer';
import {
  primaryButton,
  global_styles,
  tertiaryButton,
  iconButton,
} from '../../utils/global_styles';
import IconInputField from '../../components/InputFields/IconInputField';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton, {SocialButton} from '../../components/CustomButton';
import {redirectTo} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');

  const navigation = useNavigation();

  const initiateRegister = () => {
    console.warn('Register called');
    //Validate data
    navigation.navigate('Login');
  };

  const initiateFBLogin = () => {
    Alert.alert('FB called');
  };

  const initiateTWLogin = () => {
    Alert.alert('TW called');
  };

  const initiateGoogleLogin = () => {
    Alert.alert('G called');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={global_styles.root}>
        <Title content={'Create Account'} type={'h1'} />
        <Spacer />
        <IconInputField
          icon={
            <Ionicons
              style={{...styles.icon}}
              name="ios-person-outline"
              size={20}
              color="#051c60"
            />
          }
          value={username}
          setValue={setUsername}
          placeholder={'Your username'}
          minLength={3}
          maxLength={16}
        />

        <IconInputField
          icon={
            <MaterialCommunityIcons
              style={{...styles.icon}}
              name="email-outline"
              size={20}
              color="#051c60"
            />
          }
          value={email}
          setValue={setEmail}
          placeholder={'Your email'}
          minLength={3}
          maxLength={16}
        />

        <IconInputField
          icon={
            <Ionicons
              style={{...styles.icon}}
              name="lock-open-outline"
              size={20}
              color="#051c60"
            />
          }
          value={password}
          setValue={setPassword}
          placeholder={'Your password'}
          minLength={8}
          maxLength={32}
          type={'password'}
        />
        <IconInputField
          icon={
            <Ionicons
              style={{...styles.icon}}
              name="lock-closed-outline"
              size={20}
              color="#051c60"
            />
          }
          value={re_password}
          setValue={setRePassword}
          placeholder={'Confirm your password'}
          minLength={8}
          maxLength={32}
          type={'password'}
        />
        <Spacer />
        <CustomButton
          title={'Register'}
          styles={primaryButton}
          callback={initiateRegister}
        />
        <Spacer />
        <Text style={{...global_styles.small, paddingHorizontal: 5}}>
          By registering, you confirm that you accept our{' '}
          <Text
            onPress={() => {
              redirectTo('https://google.com');
            }}
            style={global_styles.link}>
            Terms Of Use
          </Text>{' '}
          and{' '}
          <Text
            onPress={() => {
              redirectTo('https://google.com');
            }}
            style={global_styles.link}>
            Privacy Policy
          </Text>{' '}
        </Text>
        <Spacer height={2} />

        <SocialButton
          icon={
            <MaterialCommunityIcons name="facebook" size={25} color="#4765A9" />
          }
          title={'Sign in with Facebook'}
          styles={{...iconButton, ...social_styles}}
          callback={initiateFBLogin}
          icon_for={'facebook'}
        />

        <SocialButton
          icon={
            <MaterialCommunityIcons name="twitter" size={25} color="#00acee" />
          }
          title={'Sign in with Twitter'}
          styles={{...iconButton, ...social_styles}}
          callback={initiateTWLogin}
          icon_for={'twitter'}
        />

        <SocialButton
          icon={
            <MaterialCommunityIcons name="google" size={25} color="#dd4d44" />
          }
          title={'Sign in with Google'}
          styles={{...iconButton, ...social_styles}}
          callback={initiateGoogleLogin}
          icon_for={'google'}
        />
        <Spacer height={1} />
        <CustomButton
          title={'Have an account? Login'}
          styles={tertiaryButton}
          callback={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    padding: 5,
    borderRightColor: '#F9FBFC',
    borderRightWidth: 3,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const social_styles = StyleSheet.create({
  facebook: {
    backgroundColor: '#e7eaf4',
  },
  facebook_text: {
    color: '#4765A9',
    fontWeight: 'bold',
  },
  twitter: {
    backgroundColor: 'rgba(214, 244, 255, 0.4)',
  },
  twitter_text: {
    color: '#00acee',
    fontWeight: 'bold',
  },
  google: {
    backgroundColor: '#fae9ea',
  },
  google_text: {
    color: '#dd4d44',
    fontWeight: 'bold',
  },
});

export default Register;
