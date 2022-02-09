import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {global_styles} from '../../utils/global_styles';
import {Controller} from 'react-hook-form';

const InputField = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              global_styles.inputContainer,
              {borderColor: error && 'red'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder ? placeholder : 'Enter text..'}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Something seems off!'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default InputField;
