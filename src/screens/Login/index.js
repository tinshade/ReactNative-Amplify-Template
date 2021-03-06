import React, {useState} from 'react';
import {
  View,
  Alert,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import InputField from '../../components/InputFields/InputField';
import {
  primaryButton,
  tertiaryButton,
  iconButton,
} from '../../utils/global_styles';
import Logo from '../../../assets/images/Logo.png';
import CustomButton, {SocialButton} from '../../components/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../../components/Spacer';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const initiateLogin = () => {
    Alert.alert('login called');
    //Validate user
    navigation.navigate('Home');
  };

  const initiateForgotPassword = () => {
    Alert.alert('FP called');
    navigation.navigate('ForgotPassword');
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
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <InputField
          value={username}
          setValue={setUsername}
          minLength={3}
          maxLength={16}
          placeholder={'Username / Email'}
        />
        <InputField
          value={password}
          setValue={setPassword}
          minLength={8}
          maxLength={32}
          placeholder={'Password'}
          type={'password'}
        />
        <CustomButton
          title={'Login'}
          styles={primaryButton}
          callback={initiateLogin}
        />

        <CustomButton
          title={'Forgot Password ?'}
          styles={tertiaryButton}
          callback={initiateForgotPassword}
        />

        <Spacer height={-1} />

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
          title={"Don't have an account? Create one"}
          styles={tertiaryButton}
          callback={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
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

export default Login;
