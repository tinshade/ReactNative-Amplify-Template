import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {primaryButton, global_styles} from '../../utils/global_styles';
import CustomButton from '../../components/CustomButton';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import InputField from '../../components/InputFields/InputField';
import {redirectTo} from '../../utils';
import {useNavigation} from '@react-navigation/native';
const ConfirmEmail = ({custom_styles}) => {
  const [code, setCode] = useState(null);
  const navigation = useNavigation();

  const initialEmailConfirm = () => {
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
        <Title content={'Confirm Email'} type={'h3'} />
        <Spacer />
        <InputField
          maxLength={6}
          minLength={6}
          value={code}
          setValue={setCode}
          placeholder={'Enter your OTP'}
        />
        <CustomButton
          styles={primaryButton}
          title={'Confirm'}
          callback={initialEmailConfirm}
        />
        <Spacer height={10} />

        <View style={styles.flexContainer}>
          <Text
            style={{
              ...global_styles.small,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
            onPress={() => {
              redirectTo('https://google.com');
            }}>
            Resend Code
          </Text>
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
});

export default ConfirmEmail;
