import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {primaryButton, global_styles} from '../../utils/global_styles';
import CustomButton from '../../components/CustomButton';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import {redirectTo} from '../../utils';
import IconInputField from '../../components/InputFields/IconInputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = ({custom_styles}) => {
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const navigation = useNavigation();
  const initiatePasswordReset = () => {
    console.warn('Email confirm');
    //Validate
    navigation.navigate('Login');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          ...global_styles.root,
          ...styles.container,
          ...custom_styles?.container,
        }}>
        <Spacer height={5} />
        <Title content={'Reset Password'} type={'h3'} />
        <Spacer />
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
        <CustomButton
          styles={primaryButton}
          title={'Reset'}
          callback={initiatePasswordReset}
        />
        <Spacer height={10} />

        <Text
          style={{
            ...global_styles.small,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Back to Login
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  flexContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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

export default ResetPassword;
