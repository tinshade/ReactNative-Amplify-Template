import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {primaryButton, global_styles} from '../../utils/global_styles';
import CustomButton from '../../components/CustomButton';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import InputField from '../../components/InputFields/InputField';
import {useNavigation} from '@react-navigation/native';
const ForgotPassword = ({custom_styles}) => {
  const [email, setEmail] = useState(null);
  const navigation = useNavigation();

  const initialPasswordReset = () => {
    console.warn('Email confirm');
    //Validate
    navigation.navigate('ResetPassword');
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
        <Title content={'Forgot Password'} type={'h3'} />
        <Spacer />
        <InputField
          value={email}
          setValue={setEmail}
          placeholder={'Enter your registered email'}
        />
        <CustomButton
          styles={primaryButton}
          title={'Verify'}
          callback={initialPasswordReset}
        />
        <Spacer height={10} />

        <Text
          style={{
            ...global_styles.small,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Back to Home
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
});

export default ForgotPassword;
