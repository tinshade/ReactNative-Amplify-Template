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
import {useForm} from 'react-hook-form';
const Register = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const initiateRegister = data => {
    console.warn('Register called');
    console.log(data, errors);
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
          name="username"
          control={control}
          placeholder={'Your username'}
          rules={{
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Username should be minimum 3 characters long',
            },
            maxHeight: 16,
          }}
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
          name="email"
          control={control}
          placeholder={'Your email'}
          rules={{
            required: 'This field is required',
          }}
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
          name="password"
          control={control}
          placeholder={'Your password'}
          rules={{
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
            maxLength: 32,
          }}
          secureTextEntry
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
          name="re_password"
          control={control}
          placeholder={'Confirm your password'}
          rules={{
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
            maxLength: 32,
          }}
          secureTextEntry
        />
        <Spacer />
        <CustomButton
          title={'Register'}
          styles={primaryButton}
          callback={handleSubmit(initiateRegister)}
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
