import React from 'react';
import {View, TextInput} from 'react-native';
import {HIGHESTVALUE} from '../../constants';
import {global_styles} from '../../utils/global_styles';

const InputField = ({
  value,
  setValue,
  placeholder,
  type,
  maxLength,
  minLength,
}) => {
  return (
    <View style={global_styles.inputContainer}>
      <TextInput
        secureTextEntry={type === 'password'}
        value={value}
        maxLength={maxLength ? maxLength : HIGHESTVALUE}
        minLength={minLength ? minLength : 0}
        onChangeText={setValue}
        placeholder={placeholder ? placeholder : 'Enter text..'}
      />
    </View>
  );
};

export default InputField;
